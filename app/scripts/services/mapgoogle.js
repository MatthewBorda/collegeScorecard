'use strict';

/**
 * @ngdoc service
 * @name collegeScorecardApp.mapGoogle
 * @description
 * # mapGoogle
 * Factory in the collegeScorecardApp.
 */
angular.module('collegeScorecardApp',['uiGmapgoogle-maps'])
  .factory('mapGoogle', function ($scope) {
    // Service logic
    // ...

$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
