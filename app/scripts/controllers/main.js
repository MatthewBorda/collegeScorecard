'use strict';

/**
 * @ngdoc function
 * @name collegeScorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeScorecardApp
 , ['ui.grid']*/

//LOCAL STORAGE ROUTE 
angular.module('collegeScorecardApp')
  .controller('MainCtrl', function($scope, search, $localStorage) {
    $scope.schoolsFound = search.find()

    $scope.findSchools = function() {
        $scope.schoolFound = search.find({
          query: $scope.school
        });
        $scope.searchQuery = $scope.school;
      }

    //   Local storage

  $scope.saveSchool = function(schoolResults) {
      var schoolData = {
        'id':$scope.schoolFound.results.school.id 
// schoolResults.results.school.id
// $scope.schoolFound.results.school.id,
      };
      if (!$localStorage.savedSchools) {
        $localStorage.savedSchools = [schoolResults];
      } else {

        var save = true; // Initialize the save decision variable.
        for (var i = 0; i < $localStorage.savedSchools.length; i++) {
          if ($localStorage.savedSchools[i].id == schoolData.id) {
            save = false;
          }
        }
        if (save == true) {
          $localStorage.savedSchools.push(schoolResults);
        } else {
          console.log('School already saved');
        }
      }
    };
  
  
//     $scope.gridOptions = {
//       columnDefs: [
//         //       { name: 'School', cellTemplate: '<div class="ui-grid-cell-contents">{{ COL_FIELD.results.schools.name}} </div>' },
//         //         { name: 'School', cellTemplate: '<div class="ui-grid-cell-contents">{{ COL_FIELD.schoolFound.results.school.name}} </div>' },
//         {name: 'name'}, 
//         {name: 'id'}

//       ],
//       data: $localStorage
//     };
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