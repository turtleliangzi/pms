"use.strict";

/*
 * common service
 */

app.factory("alertMsg", function ($alert, $location) {
    return {
        alert: function (response, href) {
            href = href || '';
            if (response.error !== undefined) {
                if (response.status === 400 || response.status === 401) {
                    $location.path("/signin");
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
                return false;
            } else if (response.status === 200 || response.data !== undefined){
                if (response.data !== undefined) {
                    return true;
                } else {
                    $alert({
                        title: 'Success:',
                        content: response.success,
                        placement: 'top-right',
                        type: 'success',
                        show: true,
                        duration: 3,
                        animation: 'am-fade-and-slide-top',
                    })
                    if (href !== '') {
                        $location.path(href);
                    }
                    return false;
                }
            }

        }
    }   


});
app.factory("userPermission", function (Restangular, alertMsg) {
    return {
        getUserPermission: function ($scope) {
            Restangular.one('user/permission').get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.userPermission = response.data;
                }
            })
        }
    }
});
