"use.strict";

/*
 * Demand Service
 */


app.factory("Demand", function (Restangular, $location, $alert, alertMsg) {
    return {
        addDemand: function ($scope, demand) {
            var demandRest = Restangular.all('demand/add');
            demandRest.post(demand).then(function (response) {
                alertMsg.alert(response, '');
                $("#add").modal('hide');
            })
        },
        getDemandAll: function ($scope, project_id, kind) {
            Restangular.one('demand/all/'+project_id, kind).get().then(function (response) {
                var bool = alertMsg.alert(response, '');
                if (bool) {
                    $scope.demands = response.data;
                }
            })
        },
    }
});

