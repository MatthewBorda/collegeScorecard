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


  $scope.acceptanceSlider = {
    minValue: 0,
    maxValue: 100,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        minRange: 10,
        maxRange: 100,
        pushRange: true
    }
};
  $scope.SATslider = {
    minValue: 0,
    maxValue: 1600,
    options: {
        floor: 0,
        ceil: 1600,
        step: 1,
        minRange: 100,
        maxRange: 1600,
        pushRange: true
    }
};
  $scope.ACTslider = {
    minValue: 0,
    maxValue: 36,
    options: {
        floor: 0,
        ceil: 36,
        step: 1,
        minRange: 2,
        maxRange: 36,
        pushRange: true
    }
};
  $scope.raceSlider = {
    minValue: 0,
    maxValue: 100,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        minRange: 10,
        maxRange: 100,
        pushRange: true
    }
};
  $scope.genSlider = {
    minValue: 0,
    maxValue: 100,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        minRange: 10,
        maxRange: 100,
        pushRange: true
    }
};
  $scope.pellSlider = {
    minValue: 0,
    maxValue: 100,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        minRange: 10,
        maxRange: 100,
        pushRange: true
    }
};
  $scope.costSlider  = {
    minValue: 0,
    maxValue: 100000,
    options: {
        showTicksValues: true,
        floor: 0,
        ceil: 100000,
        step: 1000,
        minRange: 1000,
        maxRange: 100,
        pushRange: true
    }
};
  
  $scope.tuitionSlider = 100;
  $scope.priceSlider = 100;
  $scope.debtSlider = 100;
  $scope.loanSlider = {
    minValue: 0,
    maxValue: 100,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        minRange: 10,
        maxRange: 100,
        pushRange: true
    }
};

  $scope.earning7Slider = 100;
  $scope.earning3Slider = 100;
  $scope.earning1Slider = 100;

  });

