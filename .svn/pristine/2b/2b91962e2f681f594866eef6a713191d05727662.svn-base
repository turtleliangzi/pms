'use strict';

/**
 * Controller of the demand
 */

app.controller('DemandProjectCtrl', function($scope, $stateParams, Project, userPermission, Restangular, alertMsg) {
    $scope.bgs = Array('success','info','danger','primary','success','info','danger','primary','success','info','danger','primary','success','info','danger','primary','success','info','danger','primary');
    Restangular.one('user/permission').get().then(function (response) {
        var bool = alertMsg.alert(response, '');
        if (bool) {
            $scope.userPermission = response.data;
            if ($scope.userPermission.permission.all == true || $scope.userPermission.permission.check_all_projects == true) { 
                Project.getAllProject($scope);
            } else {
                Project.myProject($scope);
            }
        }
    })

});

app.controller('DemandCtrl', function($scope, $stateParams, Demand, Project, userPermission) {
    userPermission.getUserPermission($scope);
    $scope.project_id = $stateParams.project_id;
    $scope.kind = $stateParams.kind;
    if ($scope.kind === undefined) {
        $scope.kind = 1;
    }

    Project.getOne($scope, $scope.project_id);
    
    $scope.demand = $stateParams.demand;
    $scope.addDemand = function () {
        if ($scope.demand === undefined) {
            return false;
        } else {
            if ($scope.demand.demand_title === undefined) {
                return  false;
            }
            if ($scope.demand.demand_desc === undefined) {
                return false;
            }
        }
        $scope.demand.project = $scope.project_id;
        Demand.addDemand($scope, $scope.demand);
    }

    Demand.getDemandAll($scope, $scope.project_id, $scope.kind);

})
