
'use strict';

var app = angular.module("travelApp");

app.service('activityService', function($http) {
    this.curActiv = [];
    this.currentActivitiesList = [];
    this.numActivities=0;

    this.getAll = () => {
        $http.get('/activities').then(res => {
            this.allAs = res.data;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getById = (id) => {
        $http.get(`/activities/activity/${id}`).then(res => {
            this.curActiv = res.data;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.create = (newActivity) => {
        $http.post('/activities', newActivity).then(res => {
            console.log("success");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getDestinations = () => {
        $http.get('/activities/destinations').then(res => {
            console.log(res);
            this.destinations = res.data;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.update = (editActivity) => {
        $http.put(`/activities/${editActivity.id}`, editActivity).then(res => {
            console.log("success");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getByDestination = (detination) => {
        $http.get(`activities/destination/${destination}`).then(res => {
            this.currentActivitiesList = res.data;
            this.numActivities = res.data.length;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.deleteActivity = function(activity) {
        $http.delete(`/activities/${activity.id}`).then(res => {
            console.log("Successfully deleted");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

});
