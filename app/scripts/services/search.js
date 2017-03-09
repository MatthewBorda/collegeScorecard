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
       //https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ&2014.student.size__range=0..60000&2014.student.demographics.women__range=0..1&2014.student.demographics.race_ethnicity.white__range=0..1&2014.student.students_with_pell_grant__range=0..1&2014.student.share_firstgeneration__range=0..1&2014.student.retention_rate.overall.full_time__range=0..1&2014.admissions.admission_rate.overall__range=0..1&2014.admissions.sat_scores.average.overall__range=0..1600&2014.aid.median_debt_suppressed.completers.overall__range=0..1000000&2014.aid.students_with_any_loan__range=0..1&2014.cost.avg_net_price.overall__range=0..100000&2014.cost.tuition.in_state__range=0..100000&2014.cost.attendance.academic_year__range=0..100000&2007.completion.completion_rate_4yr_150nt__range=0..1&_per_page=50
        //['2012'].earnings['10_yrs_after_entry'].median,
        find: {
          method: 'GET',
          params: {
            query: 'Seattle',
            
          },
           isArray: false
        }
      });
  });

