'use strict';

/**
 * @ngdoc service
 * @name collegeScorecardApp.mapGoogle
 * @description
 * # mapGoogle
 * Factory in the collegeScorecardApp.
 */
angular.module('collegeScorecardApp',['google-maps'])
	function ExampleController ($scope) {
		angular.extend($scope, {
			centerProperty: {
				lat: 45,
				lng: -73
			},
			zoomProperty: 8,
			markersProperty: [ {
					latitude: 45,
					longitude: -74
				}],
			clickedLatitudeProperty: null,	
			clickedLongitudeProperty: null,
		});
  }

//   .factory('mapGoogle', function ($scope) {
//     // Service logic
//   	angular.extend($scope, {
// 			centerProperty: {
// 				lat: 45,
// 				lng: -73
// 			},
// 			zoomProperty: 8,
// 			markersProperty: [ {
// 					latitude: 45,
// 					longitude: -74
// 				}],
// 			clickedLatitudeProperty: null,	
// 			clickedLongitudeProperty: null,
// 		});
// }

// $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
