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
      return $resource('https://api.data.gov/ed/collegescorecard/v1/schools.json?2014.student.size__range=minClass..maxClass&2014.student.demographics.women__range=minWomen..maxWomen&2014.student.demographics.race_ethnicity.white__range=minWhite..maxWhite&2014.student.students_with_pell_grant__range=minPell..maxPell&2014.student.share_firstgeneration__range=minFirst..maxFirst&2014.student.retention_rate.overall.full_time__range=minFull..maxFull&2014.admissions.admission_rate.overall__range=minAdmit..maxAdmit&2014.admissions.sat_scores.average.overall__range=minSAT..maxSAT&2014.aid.median_debt_suppressed.completers.overall__range=minDebt..maxDebt&2014.aid.students_with_any_loan__range=minLoan..maxLoan&2014.cost.avg_net_price.overall__range=minPrice..maxPrice&2014.cost.tuition.in_state__range=minTuition..maxTuition&2014.cost.attendance.academic_year__range=minCost..maxCost&2007.completion.completion_rate_4yr_150nt__range=minComp..maxComp&2012.earnings10_yrs_after_entry.median__range=minEarn..maxEarn&2012.earnings10_yrs_after_entry.percent_greater_than_25000__range=minHS..maxHS&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ&_per_page=100', {}, {
       // https://api.data.gov/ed/collegescorecard/v1/schools.json?2014.student.size__range=:minClass..:maxClass&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ
 
        //https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=:query&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ
        //https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ&2014.student.size__range=:minSize..:maxSize
        //https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ&2014.student.size__range=0..60000&2014.student.demographics.women__range=0..1&2014.student.demographics.race_ethnicity.white__range=0..1&2014.student.students_with_pell_grant__range=0..1&2014.student.share_firstgeneration__range=0..1&2014.student.retention_rate.overall.full_time__range=0..1&2014.admissions.admission_rate.overall__range=0..1&2014.admissions.sat_scores.average.overall__range=0..1600&2014.aid.median_debt_suppressed.completers.overall__range=0..1000000&2014.aid.students_with_any_loan__range=0..1&2014.cost.avg_net_price.overall__range=0..100000&2014.cost.tuition.in_state__range=0..100000&2014.cost.attendance.academic_year__range=0..100000&2007.completion.completion_rate_4yr_150nt__range=0..1&_per_page=50
        //['2012'].earnings['10_yrs_after_entry'].median,
        //['2012'].earnings['10_yrs_after_entry'].percent_greater_than_25000,
        find: {
          method: 'GET',
          params: {
//             query: 'Seattle',
            minClass: 0,
            maxClass: 60000,
            minWomen:0,
            maxWomen:1,
            minWhite:0,
            maxWhite:1,
            minPell:0,
            maxPell:1,
            minFirst:0,
            maxFirst:1,
            minFull:0,
            maxFull:1,
            minAdmit:0,
            maxAdmit:1,
            minSAT:0,
            maxSAT:1600,
            minDebt:0,
            maxDebt:1000000,
            minLoan:0,
            maxLoan:1,
            minPrice:0,
            maxPrice:100000,
            minTuition:0,
            maxTuition:100000,
            minCost:0,
            maxCost:100000,
            minComp:0,
            maxComp:1,
            minEarn:0,
            maxEarn:100000,
            minHS:0,
            maxHS:1,
          },
           isArray: false
        }
      });
  });

