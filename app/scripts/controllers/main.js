'use strict';

/**
 * @ngdoc function
 * @name collegeScorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeScorecardApp
 , ['ui.grid']*/
angular.module('collegeScorecardApp')
  .controller('MainCtrl', function ($scope, search) {
$scope.schoolsFound = search.find()

$scope.findSchools = function() {
  $scope.schoolFound = search.find({
  query: $scope.school
    });
  $scope.searchQuery =  $scope.school; 
  }

 $scope.degree = ['Any', "Two-Year (Associates)", "Four-Year (Bachelor's)"];
    $scope.degreeselected = function (item) {
      $scope.selectedItem = item;
        alert($scope.selectedItem);
    }
 $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  $scope.acceptanceSlider = 100;
  $scope.SATslider = 1600;
  $scope.ACTslider = 32;
  $scope.raceSlider = 100;
  $scope.genSlider = 100;
  $scope.pellSlider = 100;
  $scope.costSlider = 50000;
  $scope.tuitionSlider = 100;
  $scope.priceSlider = 100;
  $scope.debtSlider = 100;
  $scope.loanSlider = 100;
  $scope.completionSlider = 100;
  $scope.earning7Slider = 100;
  $scope.earning3Slider = 100;
  $scope.earning1Slider = 100;

  });

