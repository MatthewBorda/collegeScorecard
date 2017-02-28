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
      // 

      // Public API here
      return $resource('https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=:query&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ', {}, {
        find: {
          method: 'GET',
          params: {
            query: 'Seattle',
            
          },
           isArray: false
        }
      });
  });

// 'https:api.data.gov/ed/collegescorecard/v1/schools.json?api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ&school.name=Harvard&school.state=MA&school.region_id=1&school.zip=2138&school.institutional_characteristics.level=1,2,3&2014.admissions.admission_rate.overall__range=0..1&2014.admissions.sat_scores.average.overall__range=0..1600&2014.admissions.act_scores.midpoint.cumulative__range=1..36&2014.student.students_with_pell_grant__range=0..1&2014.student.share_firstgeneration__range=0..1&2014.student.demographics.race_ethnicity.white__range=0..1&2014.cost.avg_net_price.overall__range=0..1000000&2014.cost.tuition.in_state__range=0..1000000&2014.aid.median_debt_suppressed.completers.overall__range=0..1000000&2014.aid.median_debt_suppressed.completers.monthly_payments__range=0..1000000'