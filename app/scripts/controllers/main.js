'use strict';

/**
 * @ngdoc function
 * @name collegeScorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeScorecardApp
 */
angular.module('collegeScorecardApp')
  .controller('MainCtrl', function ($scope, search) {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   search, marker
$scope.search = search.query();
//   ['uiGmapgoogle-maps']
//   $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
