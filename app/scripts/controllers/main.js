'use strict';

/**
 * @ngdoc function
 * @name collegeScorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeScorecardApp
 */
angular.module('collegeScorecardApp',['ngMaps'])
  .controller('MainCtrl', function ($scope, search, map, marker) {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
  $scope.search = search.query();
  $scope.map = {
    center: [40.7, -74]
  }
  $scope.marker = {
    position: [40.7, -74]
  }
  });
