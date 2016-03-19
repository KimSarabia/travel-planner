'use strict';

var app = angular.module("travelApp");

app.controller("mainCtrl", function($scope, $state, activityService) {
    $scope.activityShow = false;
    $scope.revNote = false;
    console.log("controller works");

    activityService.getDestinations();

    $scope.getActivities = function($this) {
        console.log($this.item);
        $scope.activityShow = true;
        activityService.getByDestination($this.item.destination);
    };

    //////UPDATE
    $scope.editActiv = function($this) {
        console.log($this.item);
        activityService.getByDestination($this.item.destination);
    };

    $scope.revealNote = function(val) {
        $scope.revNote= true;
    }

    $scope.returnToHome = function() {
        $scope.activityShow = false;
        $scope.revNote= false;
    }

    $scope.nextNote = function(val) {
        var curIndex = $scope.activitiesList.indexOf(val);
        console.log(val);
        if (curIndex + 1 < $scope.numActivities) {
            $scope.revNote= false;
            $scope.activ = $scope.activitiesList[curIndex + 1];
        } else {

            console.log("No more activities");
            $scope.activityShow = false;
            $scope.revNote= false;
        }

    }

    $scope.$watch(function() {
        return activityService.destinations;
    }, function(curVal, preVal) {
        $scope.destinations = curVal;
    });

    $scope.$watch(function() {
        return activityService.currentActivitiesList;
    }, function(curVal, preVal) {

        $scope.numActivities = activityService.numActivities;
        $scope.activitiesList = curVal;
        $scope.activ = curVal[0];
    });


});

app.controller("adminCtrl", function($scope, $state, activityService) {
    console.log("adminCtrl works");
    angular.element('#destination').trigger('change');
    angular.element('#activity').trigger('change');
    angular.element('#detail').trigger('change');
    angular.element('#note').trigger('change');
    activityService.getAll();
    $scope.modShow = false;
    $scope.allShow = true;

    $scope.$watch(function() {
        return activityService.allAs;
    }, function(curVal, preVal) {
        console.log(curVal);
        $scope.allActivs = curVal;
    });

    $scope.deleteA = function(input) {
        console.log(input.activ);
        activityService.deleteActivity(input.activ);
        activityService.getAll();
    }

    $scope.modifyA = function(input) {
        $scope.modShow = true;
        $scope.allShow = false;
        console.log(input);
        $scope.update = input.activ;

    }

    $scope.updateA = function(input) {
        console.log(input);
        console.log(input.update.id);
        activityService.update(input.update);
        activityService.getAll();
    }

    $scope.quitUpdate = function() {
        $scope.addShow = false;
        $scope.modShow = false;
        $scope.allShow = true;
    }

    $scope.addNewActiv = function() {
        $scope.addShow = true;
        $scope.modShow = false;
        $scope.allShow = false;
        console.log($scope.newA);
    }

    $scope.addNewA = function(input) {
        activityService.create(input);
        activityService.getAll();
    }

    $scope.quitAdd = function() {
        $scope.addShow = false;
        $scope.modShow = false;
        $scope.allShow = true;
        $scope.newA = {};
    }

});

app.controller("instCtrl", function($scope, $state, activityService) {
    console.log("instCtrl works");

});

app.controller("playCtrl", function($scope, $state, activityService) {
    console.log("playCtrl works");

});
