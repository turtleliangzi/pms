"use.strict";

/*
 * Department Service
 */


app.factory("Department", function (Restangular, alertMsg) {
    return {
        allDepartment: function ($scope) {
            Restangular.one('department/all/info').get().then(function(response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.allDepartment = response.data;
                }
            })

        },
        memberDepartment: function ($scope) {
            Restangular.one('department/member/department').get().then(function(response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.memberDepartment = response.data;
                }
            })
        },
        addDepartment: function ($scope, department_name, department_desc) {
            var department = Restangular.all('department/add');
            department.post({"department_name":department_name, "department_desc":department_desc}).then(function (response) {
                alertMsg.alert(response, '');
                $("#add").modal('hide');
                Restangular.one('department/all/info').get().then(function(response) {
                    var bool = alertMsg.alert(response, '');
                    if (bool) {
                        $scope.allDepartment = response.data;
                    }
                })
            })
        },
        departmentInfo: function ($scope, department_id) {
            Restangular.one('department/one/info', department_id).get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.departmentInfo = response.data;
                }
            })
        },
        addMember: function ($scope, member) {
            var departmentRest = Restangular.all('department/add/member');
            departmentRest.post(member).then(function (response) {
                alertMsg.alert(response, '');
                $("#add").modal('hide');
                Restangular.one('department/member/info/'+member['department'], 'null').get().then(function (response) {
                    var bool = alertMsg.alert(response, '');
                    if (bool) {
                        $scope.memberInfo = response.data;
                        $scope.mount = $scope.memberInfo.length;
                    }
                })

            })
        },
        memberInfo: function ($scope, department_id, searchMsg) {
            Restangular.one('department/member/info/'+department_id, searchMsg).get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.memberInfo = response.data;
                    $scope.mount = $scope.memberInfo.length;
                }
            })
        },
        getRoleType: function ($scope) {
            Restangular.one('/role/role_type', 0).get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.roleType = response.data;
                }
            })
        },
        updateDingding: function ($scope, department_id) {
            Restangular.one('/department/getMemberlist/', department_id).get().then(function (response) {
                alertMsg.alert(response, '');
                Restangular.one('department/member/info/'+department_id, 'null').get().then(function (response) {
                    var bool = alertMsg.alert(response, '');
                    if (bool) {
                        $scope.memberInfo = response.data;
                        $scope.mount = $scope.memberInfo.length;
                    }
                })
            })
        }
    }
});
