"use strict";angular.module("collegeScorecardApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngMaps","ngTouch","ui.grid","rzModule","ngStorage","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("collegeScorecardApp").controller("MainCtrl",["$scope","search","$localStorage","$filter",function(a,b,c,d){a.search=b.find(),this.updateSchool=function(a){this.filteredSchools=d("schoolFilter")(b.results.school.name)},this.filteredSchools=b.results.school.name,a.saveSchool=function(a){var b={name:a.schools.school.name,id:a.schools.id};if(c.savedSchools){for(var d=!0,e=0;e<c.savedSchools.length;e++)c.savedSchools[e].id==a.schools.id&&(d=!1);1==d?c.savedSchools.push(a):console.log("School already saved")}else c.savedSchools=[b]},a.gridOptions={columnDefs:[{name:"name"},{name:"id"}],data:c},a.degree=["Any","Two-Year (Associates)","Four-Year (Bachelor's)"],a.degreeselected=function(b){a.selectedItem=b,alert(a.selectedItem)},a.map={center:{latitude:45,longitude:-73},zoom:8},a.acceptanceSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.SATslider={minValue:0,maxValue:1600,options:{floor:0,ceil:1600,step:1,minRange:100,maxRange:1600,pushRange:!0}},a.ACTslider={minValue:0,maxValue:36,options:{floor:0,ceil:36,step:1,minRange:2,maxRange:36,pushRange:!0}},a.raceSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.genSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.pellSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.costSlider={minValue:0,maxValue:1e5,options:{floor:0,ceil:1e5,step:1e3,minRange:1e3,maxRange:100,pushRange:!0}},a.tuitionSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.priceSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.debtSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.loanSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.earning7Slider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.earning3Slider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.earning1Slider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}}}]),angular.module("collegeScorecardApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("collegeScorecardApp").factory("search",["$resource",function(a){return a("https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ",{},{find:{method:"GET",isArray:!1}})}]),angular.module("collegeScorecardApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!--See grunt server:dev or whatever\nIntegrate slider\n--> <div> <!--   <div class="searchFields">\n    <div class="mainSearch">\n      <h1>Find a School</h1>\n      <p class="lead">\n        <div ng-init="school=\'Seattle University\'">\n          <p>\n            <label for="school">School:<input type="text" name="school" ng-model="school"></label>\n          </p>\n          <p>\n            <button class="btn btn-lg btn-primary" ng-click="findSchools()">Find Schools</button>\n          </p>\n        </div>\n    </div>\n    <div class=\'degreeProgram\'>\n      <div class="dropdown">\n        <h1>Degree/Program</h1>\n        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n            Degree\n          <span class="caret"></span>\n      </button>\n        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\n          <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li>\n        </ul>\n      </div>\n      <div class="dropdown">\n        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n            Program\n          <span class="caret"></span>\n      </button>\n        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\n          <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\'Location\'>\n      <h1>Location</h1>\n      <div class="dropdown">\n\n        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n            State\n          <span class="caret"></span>\n      </button>\n        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\n          <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li>\n        </ul>\n      </div>\n      <div class="dropdown">\n        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n            Region\n          <span class="caret"></span>\n      </button>\n        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\n          <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li>\n        </ul>\n      </div>\n      <div class="input-group">\n        <p>Enter a Zip code</p>\n        <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">\n        <div class="input-group">\n          <p>Mile radius</p>\n          <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">\n        </div>\n      </div>\n    </div>\n    <div class=\'likeMe\'>\n      <h1> Student Profile\n    \n  </h1>\n      <p>Acceptance Rates</p>\n      <div>\n        <rzslider rz-slider-model="acceptanceSlider.minValue" rz-slider-high="acceptanceSlider.maxValue" rz-slider-options="acceptanceSlider.options"></rzslider>\n\n      </div>\n      <p>Test Scores</p>\n      <p>SAT</p>\n      <rzslider rz-slider-model="SATslider.minValue" rz-slider-high="SATslider.maxValue" rz-slider-options="SATslider.options"></rzslider>\n      <p>ACT</p>\n      <rzslider rz-slider-model="ACTslider.minValue" rz-slider-high="ACTslider.maxValue" rz-slider-options="ACTslider.options"></rzslider>\n      <p>% By Race/Ethnicity</p>\n      <rzslider rz-slider-model="raceSlider.minValue" rz-slider-high="raceSlider.maxValue" rz-slider-options="raceSlider.options"></rzslider>\n      <p>% First Generation</p>\n      <rzslider rz-slider-model="genSlider.minValue" rz-slider-high="genSlider.maxValue" rz-slider-options="genSlider.options"></rzslider>\n      <p>% Pell Grant Recipients</p>\n      <rzslider rz-slider-model="pellSlider.minValue" rz-slider-high="pellSlider.maxValue" rz-slider-options="pellSlider.options"></rzslider>\n\n\n    </div>\n    <div class=\'cost\'>\n      <h1>Cost of Attendance</h1>\n      <p>Average Cost of Attendance</p>\n      <rzslider rz-slider-model="costSlider.minValue" rz-slider-high="costSlider.maxValue" rz-slider-options="costSlider.options"></rzslider>\n\n      <p>Tutiton and Fees</p>\n      <rzslider rz-slider-model="tuitionSlider.minValue" rz-slider-high="tuitionSlider.maxValue" rz-slider-options="tuitionSlider.options"></rzslider>\n\n      <p>Average Net Price, by Income Level</p>\n      <rzslider rz-slider-model="priceSlider.minValue" rz-slider-high="priceSlider.maxValue" rz-slider-options="priceSlider.options"></rzslider>\n      <p>Debt at Graduation</p>\n      <rzslider rz-slider-model="debtSlider.minValue" rz-slider-high="debtSlider.maxValue" rz-slider-options="debtSlider.options"></rzslider>\n      <p>Estimated monthly loan payments</p>\n      <rzslider rz-slider-model="loanSlider.minValue" rz-slider-high="loanSlider.maxValue" rz-slider-options="loanSlider.options"></rzslider>\n\n\n    </div>\n\n    <div class=\'outcomes\'>\n      <h1>Outcome measures</h1>\n\n      <p>200 percent completion rates</p>\n      <rzslider rz-slider-model="completionSlider.minValue" rz-slider-high="completionSlider.maxValue" rz-slider-options="loanSlider.options"></rzslider>\n      <p>Post-graduation Earnings (7 years from graduation)</p>\n      <rzslider rz-slider-model="earning7Slider.minValue" rz-slider-high="earning7Slider.maxValue" rz-slider-options="earning7Slider.options"></rzslider>\n      <p>Post-graduation Earnings (3 years from graduation)</p>\n      <rzslider rz-slider-model="earning3Slider.minValue" rz-slider-high="earning3Slider.maxValue" rz-slider-options="earning3Slider.options"></rzslider>\n      <p>Post-graduation Earnings (1 year from graduation)</p>\n      <rzslider rz-slider-model="earning1Slider.minValue" rz-slider-high="earning1Slider.maxValue" rz-slider-options="earning1Slider.options"></rzslider>\n\n\n    </div>\n  </div> --> <div> <h1> Test to return all </h1> <p> Metadata.total {{metadata.total}} </p> <p> Search {{search.metadata.total}} </p> <div> <input type="text" placeholder="Type to filter" ng-model="schoolName" ng-change="search.updateSchool(schoolFilter);"> </div> <div> <ul> <li ng-repeat="schools in search.results | schoolFilter"> {{schools.school.name}} </li> </ul> </div> <!--    <dl ng-repeat="schools in schoolFound.results">\n     <p>{{schools.school.name}}<p>\n  </div> --> <!-- col-lg-2 --> <!--   <div class="results">\n    <div ng-if="searchQuery">\n\n      <dl ng-repeat="schools in schoolFound.results">\n        <div class="container col-xs-12 col-sm-3 col-md-3 col-lg-2 col-lg-2 schoolResults">\n\n          <div class="row schoolHeader">\n            <h4>{{schools.school.name}}</h4>\n            <p>{{schools.school.city}}, {{schools.school.state}}</p>\n\n            <div class="schoolMap">\n              <ui-gmap-google-map center=\'map.center\' zoom=\'map.zoom\'></ui-gmap-google-map>\n            </div>\n          </div>\n          <div class="schoolLink">\n            <a href=" {{schools.school.school_url}}">Link</a>\n          </div>\n\n          <div class="schoolDetails">\n            <div class="schoolAcceptance">\n              <p> Admissions rate: {{schools["2014"].admissions.admission_rate.average.overall}}</p>\n            </div>\n            <div class="schoolTest">\n              <div class="schoolTestSAT">\n                <p>SAT: {{schools["2014"].admissions.sat_scores.average.overall}}</p>\n              </div>\n              <div class="schoolTestACT">\n                <p>ACT: {{schools["2014"].admissions.act_scores.average.overall}}</p>\n              </div>\n            </div>\n            <div class="schoolCost">\n              <p>Cost Attendance: {{schools["2014"].cost.attendance.academic_year}}</p>\n              <!--           Issue with program costs --> <!--           <p>Average Net Cost: {{schools["2014"].cost.avg_net_price.overall}}</p>\n              <p>Discount Rate: ?</p>\n            </div>\n            <div class="schoolDebt">\n              <p>Debt at Graduation: {{schools["2014"].aid.median_debt.completers.overall}}</p>\n            </div>\n\n            <div class="schoolCompletions"></div>\n            <p>150% completion rate: {{schools["2014"].completion.completion_rate_4yr_150nt}}\n            </p>\n            <div class="schoolOutcomes"></div>\n            <p>Median Income: {{schools["2012"].earnings["10_yrs_after_entry"].median}}\n            </p>\n\n            <div>\n              <p><button class="btn btn-sm btn-primary" ng-click="saveSchool(schoolFound)">Compare\n</button></p>\n            </div>\n\n\n\n\n          </div>\n\n\n        </div>\n    </div>\n\n\n\n  </div> --> <!-- \n\n  <div class="saved grid">\n    <div>\n      <H1>Local storage</H1>\n      <div id="grid1" ui-grid="gridOptions" class="grid"></div>\n    </div>\n  </div>\n</div> --></div></div>')}]);