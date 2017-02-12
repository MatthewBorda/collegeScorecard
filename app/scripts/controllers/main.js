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
$scope.schoolsFound = search.find()

$scope.findSchools = function() {
  $scope.schoolFound = search.find({
  query: $scope.school
    });
  $scope.searchQuery =  $scope.school; 
  }
 $scope.keys = ["id"];
    $scope.labels = {
        ID: "ID"
    };
//   ['uiGmapgoogle-maps']
//   $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });

