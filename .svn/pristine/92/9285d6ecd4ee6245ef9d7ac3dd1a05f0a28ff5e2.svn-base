'use strict';

/**
 * Controller of the department
 */

app.controller('DepartmentCtrl', function($scope, $stateParams, Department, userPermission) {
    userPermission.getUserPermission($scope);
    $scope.company = window.localStorage.getItem("company");
    $scope.name = window.localStorage.getItem("name");
    $scope.uid = window.localStorage.getItem("uid");
    $scope.bgs = Array('success','info','danger','primary','success','info','danger','primary','success','info','danger','primary','success','info','danger','primary','success','info','danger','primary');



    Department.allDepartment($scope);

    Department.memberDepartment($scope);

    $scope.getName = function (name) {
        $scope.department_name = name;
    }
    $scope.getDesc = function (desc) {
        $scope.department_desc = desc;
    }

    $scope.addDepartment = function () {
        if ($scope.department_name === undefined) {
            return;
        }
        Department.addDepartment($scope, $scope.department_name, $scope.department_desc);
    }


});

app.controller("DepartmentOneCtrl", function ($scope, $stateParams, Department, $alert, userPermission) {
    userPermission.getUserPermission($scope);
    $scope.department_id = $stateParams.department_id;
    $scope.company = window.localStorage.getItem('company');
    $scope.member = $stateParams.member;

    Department.departmentInfo($scope,  $scope.department_id);
    Department.memberInfo($scope,  $scope.department_id, 'null');
    Department.getRoleType($scope);

    $scope.searchMsg = $stateParams.searchMsg;
    $scope.search = function () {
        Department.memberInfo($scope, $scope.department_id, $scope.searchMsg);

    }

    $scope.updateDingding = function() {
        Department.updateDingding($scope, $scope.department_id);
    }

    $scope.addMember = function() {
        if ($scope.member === undefined) {
            return;
        } else {
            if ($scope.member.email === undefined) {
                return;
            }
            if ($scope.member.role_type === undefined) {
                $alert({
                    title: 'Error:',
                    content: "请选择角色类型",
                    placement: 'top-right',
                    type: 'danger',
                    show: true,
                    duration: 3,
                    animation: 'am-fade-and-slide-top',
                })
                return;
            }
            if ($scope.member.role === undefined) {
                return;
            }
        }
        $scope.member.department = $scope.department_id;
        Department.addMember($scope, $scope.member);
    }

});

