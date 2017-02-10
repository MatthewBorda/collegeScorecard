'use strict';

/**
 * @ngdoc service
 * @name collegeScorecardApp.mapGoogle
 * @description
 * # mapGoogle
 * Factory in the collegeScorecardApp.
 */
angular.module('collegeScorecardApp',['ngMap'])
.controller('mapgoogle', function(NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
});

