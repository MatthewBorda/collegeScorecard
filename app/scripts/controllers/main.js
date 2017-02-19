'use strict';

/**
 * @ngdoc function
 * @name collegeScorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeScorecardApp
 , ['ui.grid']*/
angular.module('collegeScorecardApp')
  .controller('MainCtrl', function($scope, search) {
    $scope.schoolsFound = search.find()

    $scope.findSchools = function() {
      $scope.schoolFound = search.find({
        query: $scope.school
      });
      $scope.searchQuery = $scope.school;

    }
  var schoolData = [];
for(var key in $scope.schoolsFound){
 if( !$scope.schoolsFound.hasOwnProperty(key)|| // skip prototype extensions
   !$scope.schoolsFound[key].hasOwnProperty("accountNo") //skip non account objects
 ) continue; 
 schoolData.push($scope.schoolsFound[key]);
  }
    $scope.myData = schoolData;
//Filters 
  $scope.degree = ['Any', "Two-Year (Associates)", "Four-Year (Bachelor's)"];
    $scope.degreeselected = function(item) {
      $scope.selectedItem = item;
      alert($scope.selectedItem);
    }
    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };

//grid controls

//   $scope.myData = [
//     {
//         "firstName": "Cox",
//         "lastName": "Carney",
//         "company": "Enormo",
//         "employed": true
//     },
//     {
//         "firstName": "Lorraine",
//         "lastName": "Wise",
//         "company": "Comveyer",
//         "employed": false
//     },
//     {
//         "firstName": "Nancy",
//         "lastName": "Waters",
//         "company": "Fuelton",
//         "employed": false
//     }
// ];
//
// Slider controls
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
    $scope.costSlider = {
      minValue: 0,
      maxValue: 100000,
      options: {
      
        floor: 0,
        ceil: 100000,
        step: 1000,
        minRange: 1000,
        maxRange: 100,
        pushRange: true
      }
    };

    $scope.tuitionSlider = {
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

    $scope.priceSlider = {
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

    $scope.debtSlider = {
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

    $scope.earning7Slider = {
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

    $scope.earning3Slider = {
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

    $scope.earning1Slider = {
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


  });