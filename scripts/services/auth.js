"use.strict";

/*
 * Auth Service
 * @signIn function
 * @signUp function
 */


app.factory("Auth", function (Restangular, $location, $alert,$state) {
    return {
        signIn: function ($scope, user) {
            var auth = Restangular.all('auth/login');
            auth.post(user).then(function(response) {
                if (response.token !== undefined && response.status === undefined) {
                    window.localStorage.setItem("token", response.token);
                    // $location.path('/');
                    // $state.go("app.dashboard", {}, {reload:true});
                    window.location.href='/';
                } else {
                    $alert({
                        title: 'Error:',
                        content: response.error,
                        placement: 'top-right',
                        type: 'danger',
                        show: true,
                        duration: 3,
                        animation: 'am-fade-and-slide-top',
                    })
                }
            })
        },
        signUp: function ($scope, user) {
            var auth = Restangular.all('auth/register');
            auth.post(user).then(function (response) {
                if (response.token !== undefined) {
                    window.localStorage.setItem('token', response.token);
                    // $location.path('/');
                    window.location.href='/';
                } else {
                    $alert({
                        title: 'Error:',
                        content: response.error,
                        placement: 'top-right',
                        type: 'danger',
                        show: true,
                        duration: 3,
                        animation: 'am-fade-and-slide-top',
                    })
                }
            })
        },

        resetPwd: function ($scope, user) {
            var auth = Restangular.all('/auth/resetPassword');
            auth.post(user).then(function (response) {
                if (response.token !== undefined) {
                    window.localStorage.setItem('token', response.token);
                    // $location.path('/');
                    window.location.href='/#/signin';
                } else {
                    $alert({
                        title: 'Error:',
                        content: response.error,
                        placement: 'top-right',
                        type: 'danger',
                        show: true,
                        duration: 3,
                        animation: 'am-fade-and-slide-top',
                    })
                }
            })
        }
    }
});