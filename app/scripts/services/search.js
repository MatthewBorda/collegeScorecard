'use strict';

/**
 * @ngdoc service
 * @name collegeScorecardApp.search
 * @description
 * # search
 * Factory in the collegeScorecardApp.
 */
angular.module('collegeScorecardApp')
  .factory('search', function($resource) {
      // Service logic
      // ...

      // Public API here
      return $resource('https://api.data.gov/ed/collegescorecard/v1/schools?school.name=:schoolName&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ', {}, {
        find: {
          method: 'GET',
          params: {
            SchoolName: 'Seattle',
           
          },
          isArray: false
        }
      });
  });