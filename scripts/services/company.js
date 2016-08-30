"use.strict";

/*
 * Company Service
 */


app.factory("Company", function (Restangular, $location, $alert, alertMsg) {
    return {
        info: function ($scope) {
            Restangular.one('company/info').get().then(function(response) {
               var bool =  alertMsg.alert(response, '');
               if (bool) {
                    $scope.companyInfo = response.data;
               }
            })
        },
        add: function ($scope, newCompany) {
            var company = Restangular.all('company/add');
            company.post(newCompany).then(function (response) {
                alertMsg.alert(response, '');
                $("#add").modal('hide');
                Restangular.one('company/info').get().then(function(response) {
                    var bool =  alertMsg.alert(response, '');
                    if (bool) {
                        $scope.companyInfo = response.data;
                    }
                })
            })
        },
        join: function ($scope, oldCompany) {
            var company = Restangular.all('company/join');
            company.post(oldCompany).then(function (response) {
                alertMsg.alert(response, '');
                $("#join").modal('hide');
                Restangular.one('company/info').get().then(function(response) {
                    var bool =  alertMsg.alert(response, '');
                    if (bool) {
                        $scope.companyInfo = response.data;
                    }
                })

            })
        },
        departmentCount: function ($scope) {
            Restangular.one('department/count').get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.departmentCount = response.data['count'];
                    $scope.departmentDate = new Date().toLocaleDateString();
                }
            })
        },
        memberCount: function ($scope) {
            Restangular.one('company/member/count').get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.memberCount = response.data['count'];
                    $scope.memberDate = new Date().toLocaleDateString();
                }
            })
        },
        companyMember: function ($scope, search) {
            Restangular.one('company/member/info', search).get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.memberInfo = response.data;
                }
            })
        },
        getDepartmentFromD: function ($scope) {
            Restangular.one('/department/getlist').get().then(function (response) {
                alertMsg.alert(response, '');
                Restangular.one('department/count').get().then(function (response) {
                    var bool = alertMsg.alert(response, '');
                    if (bool) {
                        $scope.departmentCount = response.data['count'];
                        $scope.departmentDate = new Date().toLocaleDateString();
                    }
                })
            })
        }
    }
});

