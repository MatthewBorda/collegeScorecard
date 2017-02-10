'use strict';

/**
 * @ngdoc function
 * @name collegeScorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeScorecardApp
 */
angular.module('collegeScorecardApp', ['uiGmapgoogle-maps'])
  .controller('MainCtrl', function ($scope, search, map) {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   search, marker
  $scope.search = search.query();
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  });
