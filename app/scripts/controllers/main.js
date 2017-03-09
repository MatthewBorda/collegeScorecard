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
        'Female %': schools['2014'].student.demographics.women *100, 
        'White %': schools['2014'].student.demographics.race_ethnicity.white*100,
        'Pell %': schools['2014'].student.students_with_pell_grant*100,
        'First Gen %': schools['2014'].student.share_firstgeneration*100,
        'Retenion %': schools['2014'].student.retention_rate.overall.full_time*100,
        //Admissions
        'Admit %': schools['2014'].admissions.admission_rate.overall*100,
        'SAT AVG': schools['2014'].admissions.sat_scores.average.overall,
        'ACT MID': schools['2014'].admissions.act_scores.midpoint.cumulative,
        //Repayment
        
        //Aid
        'Median Debt': schools['2014'].aid.median_debt.completers.overall,
        'With Loan %': schools['2014'].aid.students_with_any_loan*100,
        //Cost
        'Net Price': schools['2014'].cost.avg_net_price.overall,
        'Cost Attendance': schools['2014'].cost.attendance.academic_year,
        'Tuition': schools['2014'].cost.tuition.in_state,
        //Completion
          //4 year
          'Graduated in 4 yrs': schools['2007'].completion.completion_rate_4yr_100nt*100,
          //6 year
          'Graduated in 6 yrs': schools['2007'].completion.completion_rate_4yr_150nt*100
        
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
  
  $scope.gridOptions = { data:  $localStorage.compareSchools, 
                        enableColumnResizing: true,
                        columnDefs: [
                         {field: 'id', width:0 },
                           { name: 'Remove', cellTemplate:'<button class="btn primary" ng-click="grid.appScope.removeSchool()">Remove</button>', width:75 },
                        {field: 'Name', width:200 },
                        //School
                        {field: 'State', width:100 },
                        {field: 'Undergraduates', width:125, cellFilter: 'number: 0'  },
                          //Ideal: minority school fields collapsed
                        //Earnings
                        {field: 'Median Earnings at 10yrs', width:100, cellFilter: 'currency:"$":0' },
                        {field: 'Above HS equiv at 10yrs', displayName: 'Above HS equiv at 10yrs', width:100 },
                        //Academics
                          //Ideal: Top 3 largest programs             
                        //Student
                        {field: 'Female %', width:100, cellFilter: 'number: 0'  },
                        {field: 'White %', width:100, cellFilter: 'number: 0' },
                        {field: 'Pell %', width:100, cellFilter: 'number: 0' },
                        {field: 'First Gen %', width:100, cellFilter: 'number: 0' },
                        {field: 'Retenion %', width:100, cellFilter: 'number: 0' },
                        //Admissions
                        {field: 'Admit %', width:100, cellFilter: 'number: 0' },
                        {field: 'SAT AVG', width:100, displayName: 'Average SAT Score', cellFilter: 'number: 0' },
                        {field: 'ACT MID', width:100,displayName: 'ACT midpoint', cellFilter: 'number: 0' },
                        //Repayment
                        //Aid
                        {field: 'Median Debt', width:100, cellFilter: 'currency:"$":0'  },
                        {field: 'With Loan %', width:100, cellFilter: 'number: 0'  },
                        //Cost
                        {field: 'Net Price', width:100, cellFilter: 'currency:"$":0'  },
                        {field: 'Cost Attendance', width:100, cellFilter: 'currency:"$":0'  },
                        {field: 'Tuition', width:100, cellFilter: 'currency:"$":0'  },
                        //Completion
                          //4 year
                          {field: 'Graduated in 4 yrs', width:100, cellFilter: 'number: 0' },
                          //6 year100
                          {field: 'Graduated in 6 yrs', width:100, cellFilter: 'number: 0' }
                                   ]};
   $scope.removeSchool = function(){
                   alert("Remove from storage");
                };

    $scope.savedSchools = $localStorage.compareSchools;
//     $scope.gridOptions.columnDefs = [];
//    $scope.gridOptions.data = $localStorage.compareSchools;
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
  $scope.classSlider = {
      minValue: 0,
      maxValue: 60000,
      options: {
        floor: 0,
        ceil: 60000,
        step: 1000,
        minRange: 1000,
        maxRange: 60000,
        pushRange: true
      }
    };
  $scope.borrowedSlider = {
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
  $scope.hsSlider = {
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
  $scope.retainedSlider = {
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
  $scope.femaleSlider = {
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
 $scope.netSlider = {
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
