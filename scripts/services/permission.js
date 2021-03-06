"use.strict";

/*
 * Permission Service
 */


app.factory("Permission", function (Restangular, $location, $alert, alertMsg) {
    return {
        addGroup: function ($scope, group) {
            var permissionRest = Restangular.all('group/add');
            permissionRest.post(group).then(function (response) {
                alertMsg.alert(response, '');
                $("#add").modal('hide');
                Restangular.one('group/all').get().then(function (response) {
                    var bool = alertMsg.alert(response, '');
                    if (bool) {
                        $scope.groups = response.data;
                    }
                })
            })
        },
        getAllGroup: function ($scope) {
            Restangular.one('group/all').get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.groups = response.data;
                }
            })
        },
        getMemberGroup: function ($scope) {
            Restangular.one('group/member').get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.memberGroup = response.data;
                }
            })
        },
        getUserGroup: function ($scope, id) {
            Restangular.one('user/group/info', id).get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.userGroup = response.data;
                    $scope.selectGroup = $scope.userGroup.group_id;
                }
            })
        },
        changeUserGroup: function ($scope, id, group_id) {
            var permissionRest = Restangular.all('group/change_group');
            permissionRest.post({'uid':id,'group_id':group_id}).then(function (response) {
                alertMsg.alert(response, '');
                $("#changeGroup").modal('hide');
                Restangular.one('group/member').get().then(function (response) {
                    var bool = alertMsg.alert(response, '');
                    if (bool) {
                        $scope.memberGroup = response.data;
                    }
                })
            })
        },
        getGroupInfo: function ($scope, group_id) {
            Restangular.one('group/one', group_id).get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.groupInfo = response.data;
                }
            })
        }
    }
});

