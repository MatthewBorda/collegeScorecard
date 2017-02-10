'use strict';

/**
 * @ngdoc service
 * @name collegeScorecardApp.mapGoogle
 * @description
 * # mapGoogle
 * Factory in the collegeScorecardApp.
 */
//AIzaSyDNVX4jb2QDDKPgxQ38dwIafC-GPEpnh0A 
angular.module('appMaps', ['uiGmapgoogle-maps'])
    .controller('mainCtrl', function($scope) {
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
