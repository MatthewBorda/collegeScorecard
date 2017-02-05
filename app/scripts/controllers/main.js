'use strict';

/**
 * @ngdoc function
 * @name collegeScorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeScorecardApp
 */
angular.module('collegeScorecardApp',['rzModule'])
  .controller('MainCtrl', function ($scope, search, priceSlider) {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
  $scope.search = search.query();
  $scope.priceSlider = 150;
  });
