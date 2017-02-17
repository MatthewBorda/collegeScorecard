'use strict';

/**
 * @ngdoc function
 * @name collegeScorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeScorecardApp
 */
angular.module('collegeScorecardApp', 'ui.grid')
  .controller('MainCtrl', function ($scope, search) {
$scope.schoolsFound = search.find()

$scope.findSchools = function() {
  $scope.schoolFound = search.find({
  query: $scope.school
    });
  $scope.searchQuery =  $scope.school; 
  }
$scope.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
];
 
//  $scope.keys = ["id","school_url"];
//     $scope.labels = {
//         ID: "ID",
//       school_url:"school_url"
//     };
//   ['uiGmapgoogle-maps']
//   $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });

