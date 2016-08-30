'use strict';

/**
 * Controller of the permission
 */

app.controller('PermissionAssignCtrl', function($scope, $stateParams, Permission, userPermission) {
    userPermission.getUserPermission($scope);
    Permission.getMemberGroup($scope);
    Permission.getAllGroup($scope);

    $scope.getPermissionInfo = function (id) {
        Permission.getUserGroup($scope, id);
    }

    $scope.changeSelectGroup = function (selectGroup) {
        $scope.selectGroup = selectGroup;
    }
    $scope.changeUserGroup = function (id) {
        Permission.changeUserGroup($scope, id, $scope.selectGroup);
    }
});
app.controller('PermissionGroupCtrl', function($scope, $stateParams, Permission, userPermission, Restangular, alertMsg) {
    userPermission.getUserPermission($scope);
    $scope.group = $stateParams.group;
    $scope.permissions = new Array();
    $scope.getGroupInfo = function (group_id) {
        Restangular.one('group/one', group_id).get().then(function (response) {
            var bool = alertMsg.alert(response, '');
            if (bool) {
                $scope.groupInfo = response.data;
            }
        })
    }
    if ($scope.groupInfo === undefined) {
        $scope.permissions['all'] = false;
        $scope.permissions['add_department'] = false;
        $scope.permissions['add_department_member'] = false;
        $scope.permissions['add_project'] = false;
        $scope.permissions['audit_project'] = false;
        $scope.permissions['add_group'] = false;
        $scope.permissions['assign_permission'] = false;
        $scope.permissions['check_contacts'] = false;
        $scope.permissions['check_all_departments'] = false;
        $scope.permissions['add_demand'] = false;
        $scope.permissions['check_all_projects'] = false;
        $scope.permissions['edit_group'] = false;
        $scope.permissions['delete_group'] = false;

    } else {
        $scope.permission = $scope.groupInfo.permission;
        $scope.permissions['all'] = $scope.permission.all;
        $scope.permissions['add_department'] = $scope.permission.add_department;
        $scope.permissions['add_department_member'] = $scope.permission.add_department_member;
        $scope.permissions['add_project'] = $scope.permission.add_project;
        $scope.permissions['audit_project'] = $scope.permission.audit_project;
        $scope.permissions['add_group'] = $scope.permission.add_group;
        $scope.permissions['assign_permission'] = $scope.permission.assign_permission;
        $scope.permissions['check_contacts'] = $scope.permission.check_contacts;
        $scope.permissions['check_all_departments'] = $scope.permission.check_all_departments;
        $scope.permissions['add_demand'] = $scope.permission.add_demand;
        $scope.permissions['check_all_projects'] = $scope.permission.check_all_projects;
        $scope.permissions['edit_group'] = $scope.permission.edit_group;
        $scope.permissions['delete_group'] = $scope.permission.delete_group;
    }
    console.log($scope.permissions);
    $scope.changePermission = function (value, param) {
        $scope.permissions[param] = value;
        console.log($scope.permissions);
    }
    $scope.addGroup = function () {
        if ($scope.group === undefined) {
            return false;
        }
        if ($scope.group.group_name === undefined) {
            return false;
        }
        $scope.group.permissions = {"all":permissions['all'], "add_department":permissions['add_department'], "add_department_member":permissions['add_department_member'], "add_project":permissions['add_project'], "audit_project":permissions['audit_project'], "add_group":permissions['add_group'], "assign_permission":permissions['assign_permission'], "check_contacts":permissions['check_contacts'], "check_all_departments":permissions['check_all_departments'], "add_demand":permissions['add_demand'], "check_all_projects":permissions['check_all_projects'], "edit_group":permissions['edit_group'], "delete_group":permissions['delete_group']};
        Permission.addGroup($scope, $scope.group);
    }

    Permission.getAllGroup($scope);

    $scope.getGroupInfo = function (group_id) {
        Permission.getGroupInfo($scope, group_id);
    }

});

