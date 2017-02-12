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
      return $resource('https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=:query&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ&_fields=id,school.name', {}, {
        find: {
          method: 'GET',
          params: {
            query: 'Seattle',
           
          },
          isArray: false
        }
      });
  });