'use strict';

/**
 * @ngdoc overview
 * @name collegeScorecardApp
 * @description
 * # collegeScorecardApp
 *
 * Main module of the application.
 */
angular
  .module('collegeScorecardApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaps',
    'ngTouch',
    ['ui.grid'],
//     'ngstorage',
    'uiGmapgoogle-maps'
//     'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
