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
    $scope.saveSchool = function(schools) {
      var schoolData = {
         //Ideal: Year updated automatically
        'id': schools.id,
        'Name': schools.school.name,
        //School
        'State': schools.school.state,
          //Ideal: minority school fields collapsed
        //Earnings
        'Median Earnings at 10yrs': schools['2012'].earnings['10_yrs_after_entry'].median,
        'Above HS equiv at 10yrs': schools['2012'].earnings['10_yrs_after_entry'].percent_greater_than_25000,
        //Academics
          //Ideal: Top 3 largest programs             
        //Student
        'Undergraduates': schools['2014'].student.size,
        'Female %': schools['2014'].student.demographics.women, 
        'White %': schools['2014'].student.demographics.race_ethnicity.white,
        'Pell %': schools['2014'].student.students_with_pell_grant,
        'First Gen %': schools['2014'].student.share_firstgeneration,
        'Retenion %': schools['2014'].student.retention_rate.overall.full_time,
        //Admissions
        'Admit %': schools['2014'].admissions.admission_rate.overall,
        'SAT AVG': schools['2014'].admissions.sat_scores.overall,
        'ACT MID': schools['2014'].admissions.act_scores.midpoint.cumulative,
        //Repayment
        
        //Aid
        'Median Debt': schools['2014'].aid.median_debt.completers.overall,
        'With Loan %': schools['2014'].aid.students_with_any_loan,
        //Cost
        'Net Price': schools['2014'].cost.avg_net_price.overall,
        'Cost Attendance': schools['2014'].cost.attendance.academic_year,
        'Tuition': schools['2014'].cost.tuition.in_state,
        //Completion
          //4 year
          'Graduated in 4 yrs': schools['2007'].completion.completion_rate_4yr_100nt,
          //6 year
          'Graduated in 6 yrs': schools['2007'].completion.completion_rate_4yr_150nt,
        
      };
      if (!$localStorage.compareSchools) {
        $localStorage.compareSchools = [schoolData];
      } else {
        var save = true; 
        for (var i = 0; i < $localStorage.compareSchools.length; i++) {
          if ($localStorage.compareSchools[i].id == schoolData.id) {
            save = false;
          }
        }
        if (save == true) {
          $localStorage.compareSchools.push(schoolData);
        } else {
          console.log('School already saved');
        }
      }
    };
    //   Local storage
    $scope.savedSchools = $localStorage.compareSchools;
    $scope.gridOptions.columnDefs = [];
   $scope.gridOptions.data = $localStorage.compareSchools;
//        $scope.gridOptions = {
    //       columnDefs: [
    //         //       { name: 'School', cellTemplate: '<div class="ui-grid-cell-contents">{{ COL_FIELD.results.schools.name}} </div>' },
    //         //         { name: 'School', cellTemplate: '<div class="ui-grid-cell-contents">{{ COL_FIELD.schoolFound.results.school.name}} </div>' },
    //         {name: 'name'}, 
    //         {name: 'id'}

    //       ],
//         data: $localStorage.compareSchools
//        };
  
//   Data filters
  
    //Search filters 
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

// .directive('bsTooltip', function(){
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs){
//             $(element).hover(function(){
//                 // on mouseenter
//                 $(element).tooltip('show');
//             }, function(){
//                 // on mouseleave
//                 $(element).tooltip('hide');
//             });
//         }
//     };
// });
  });
