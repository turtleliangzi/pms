"use.strict";

/*
 * Dashboard Service
 * author turtle
 * create_time 2016-08-11
 */


app.factory("Dashboard", function (Restangular, $location, $alert,$state) {
    return {
        getDoingTask: function ($scope, taskStatus) {
            Restangular.one('department/count').get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.doingTask = response;
                }

            })
        },
    }
});
