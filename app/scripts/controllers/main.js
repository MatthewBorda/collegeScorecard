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
  $scope.search = search.query();
  });
