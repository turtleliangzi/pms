'use strict';

/**
 * @signin function
 * @email 
 * @password
 * Controller of the signin
 */

app.controller('SignInCtrl', function($scope, $stateParams, Auth) {
    $scope.user = $stateParams.user;
    $scope.login = function () {
        if ($scope.user === undefined) {
            return;
        } else {
            if ($scope.user.email === undefined) {
                return;
            };
            if ($scope.user.password === undefined) {
                return;
            };
        }
        Auth.signIn($scope, $scope.user);
    }


});

/*
 * @signup function
 * @name
 * @emial
 * @password
 * @repeat password
 * Controller of the signup
 */

app.controller('SignUpCtrl', function($scope, $stateParams, Auth, $alert) {
    $scope.user = $stateParams.user;
    $scope.repassword = $stateParams.repassword;
    $scope.register = function () {
        if ($scope.user === undefined && $scope.repassword === undefined) {
            return;
        } else {
            if ($scope.user.name === undefined) {
                return;
            }
            if ($scope.user.password === undefined) {
                return;
            }
            if ($scope.user.email === undefined) {
                return;
            }
            if ($scope.repassword === undefined) {
                return;
            }
            if ($scope.user.password != $scope.repassword) {
                $alert({
                    title: 'Error:',
                    content: "两次输入的密码不一致",
                    placement: 'top-right',
                    type: 'danger',
                    show: true,
                    duration: 3,
                    animation: 'am-fade-and-slide-top',
                });
                return;
            }
        }
        Auth.signUp($scope, $scope.user);
    }


});
/*
 * @resetPwd function
 * @emial
 * @password
 * @repeat password
 * Controller of the resetPwd
 */

app.controller('ResetPwdCtrl', function($scope, $stateParams, Auth, $alert) {
    $scope.user = $stateParams.user;
    $scope.repassword = $stateParams.repassword;
    $scope.resetPwd = function () {
        if ($scope.user === undefined && $scope.repassword === undefined) {
            return;
        } else {
            if ($scope.user.password === undefined) {
                return;
            }
            if ($scope.user.email === undefined) {
                return;
            }
            if ($scope.repassword === undefined) {
                return;
            }
            if ($scope.user.password != $scope.repassword) {
                $alert({
                    title: 'Error:',
                    content: "两次输入的密码不一致",
                    placement: 'top-right',
                    type: 'danger',
                    show: true,
                    duration: 3,
                    animation: 'am-fade-and-slide-top',
                });
                return;
            }
        }
        Auth.resetPwd($scope, $scope.user);
    }


});
