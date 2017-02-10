'use strict';

/**
 * @ngdoc function
 * @name collegeScorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeScorecardApp
 */
angular.module('collegeScorecardApp', ['ngMap'])
  .controller('MainCtrl', function (NgMap) {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   search, marker
//   $scope.search = search.query();
//   ['uiGmapgoogle-maps']
//   $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
  });
