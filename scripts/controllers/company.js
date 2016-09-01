'use strict';

/**
 * Controller of the company
 */

app.controller("CompanyCtrl", function($scope, $stateParams, Company, userPermission) {
    userPermission.getUserPermission($scope);
    $scope.company = window.localStorage.getItem("company");
    $scope.uid = window.localStorage.getItem("uid");
    if ($scope.company !== "null") {
        Company.info($scope);
        Company.departmentCount($scope);
        Company.memberCount($scope);
        Company.companyMember($scope, "null");
    }
    $scope.new = function(newCompany) {
        $scope.newCompany = newCompany;
    }

    $scope.addCompany = function () {
        if ($scope.newCompany === undefined) {
            return;
        } else {
            if ($scope.newCompany.company_name === undefined) {
                return;
            }
            if ($scope.newCompany.english_name === undefined) {
                return;
            }
        }
        Company.add($scope, $scope.newCompany);
    }

    $scope.old = function (oldCompany) {
        $scope.oldCompany = oldCompany;
    }

    $scope.joinCompany = function () {
        if ($scope.oldCompany === undefined) {
            return;
        } else {
            if ($scope.oldCompany.company_code === undefined) {
                return;
            }
        }
        Company.join($scope, $scope.oldCompany);
    }


    $scope.searchMsg = $stateParams.searchMsg;
    $scope.search = function () {
        if ($scope.searchMsg !== undefined) {
            Company.companyMember($scope, $scope.searchMsg);
        }
    }

    $scope.getDepartmentFromD = function () {
        Company.getDepartmentFromD($scope);
    }

});

