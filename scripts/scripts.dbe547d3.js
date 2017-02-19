"use strict";angular.module("collegeScorecardApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngMaps","ngTouch","ui.grid","rzModule","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("collegeScorecardApp").controller("MainCtrl",["$scope","search",function(a,b){a.schoolsFound=b.find(),a.findSchools=function(){a.schoolFound=b.find({query:a.school}),a.searchQuery=a.school},a.gridOptions={columnDefs:[{name:"School",cellTemplate:'<div class="ui-grid-cell-contents">{{ COL_Field.schoolsFound.results.school.name}} </div>'}]},a.degree=["Any","Two-Year (Associates)","Four-Year (Bachelor's)"],a.degreeselected=function(b){a.selectedItem=b,alert(a.selectedItem)},a.map={center:{latitude:45,longitude:-73},zoom:8},a.acceptanceSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.SATslider={minValue:0,maxValue:1600,options:{floor:0,ceil:1600,step:1,minRange:100,maxRange:1600,pushRange:!0}},a.ACTslider={minValue:0,maxValue:36,options:{floor:0,ceil:36,step:1,minRange:2,maxRange:36,pushRange:!0}},a.raceSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.genSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.pellSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.costSlider={minValue:0,maxValue:1e5,options:{floor:0,ceil:1e5,step:1e3,minRange:1e3,maxRange:100,pushRange:!0}},a.tuitionSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.priceSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.debtSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.loanSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.earning7Slider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.earning3Slider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.earning1Slider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}}}]),angular.module("collegeScorecardApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("collegeScorecardApp").factory("search",["$resource",function(a){return a("https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=:query&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ",{},{find:{method:"GET",params:{query:"Seattle"},isArray:!1}})}]),angular.module("collegeScorecardApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!--See grunt server:dev or whatever\nIntegrate slider\n--> <div class="searchFields"> <div class="mainSearch"> <h1>Find a School</h1> <p class="lead"> <div ng-init="school=\'Seattle University\'"> <p> <label for="school">School:<input type="text" name="school" ng-model="school"></label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findSchools()">Find Schools</button> </p> </div> </p></div> <div class="degreeProgram"> <div class="dropdown"> <h1>Degree/Program</h1> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Degree <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Program <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> </div> <div class="Location"> <h1>Location</h1> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> State <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Region <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> <div class="input-group"> <p>Enter a Zip code</p> <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1"> <div class="input-group"> <p>Mile radius</p> <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1"> </div> </div> </div> <div class="likeMe"> <h1> Student Profile </h1> <p>Acceptance Rates</p> <div> <rzslider rz-slider-model="acceptanceSlider.minValue" rz-slider-high="acceptanceSlider.maxValue" rz-slider-options="acceptanceSlider.options"></rzslider> </div> <p>Test Scores</p> <p>SAT</p> <rzslider rz-slider-model="SATslider.minValue" rz-slider-high="SATslider.maxValue" rz-slider-options="SATslider.options"></rzslider> <p>ACT</p> <rzslider rz-slider-model="ACTslider.minValue" rz-slider-high="ACTslider.maxValue" rz-slider-options="ACTslider.options"></rzslider> <p>% By Race/Ethnicity</p> <rzslider rz-slider-model="raceSlider.minValue" rz-slider-high="raceSlider.maxValue" rz-slider-options="raceSlider.options"></rzslider> <p>% First Generation</p> <rzslider rz-slider-model="genSlider.minValue" rz-slider-high="genSlider.maxValue" rz-slider-options="genSlider.options"></rzslider> <p>% Pell Grant Recipients</p> <rzslider rz-slider-model="pellSlider.minValue" rz-slider-high="pellSlider.maxValue" rz-slider-options="pellSlider.options"></rzslider> </div> <div class="cost"> <h1>Cost of Attendance</h1> <p>Average Cost of Attendance</p> <rzslider rz-slider-model="costSlider.minValue" rz-slider-high="costSlider.maxValue" rz-slider-options="costSlider.options"></rzslider> <p>Tutiton and Fees</p> <rzslider rz-slider-model="tuitionSlider.minValue" rz-slider-high="tuitionSlider.maxValue" rz-slider-options="tuitionSlider.options"></rzslider> <p>Average Net Price, by Income Level</p> <rzslider rz-slider-model="priceSlider.minValue" rz-slider-high="priceSlider.maxValue" rz-slider-options="priceSlider.options"></rzslider> <p>Debt at Graduation</p> <rzslider rz-slider-model="debtSlider.minValue" rz-slider-high="debtSlider.maxValue" rz-slider-options="debtSlider.options"></rzslider> <p>Estimated monthly loan payments</p> <rzslider rz-slider-model="loanSlider.minValue" rz-slider-high="loanSlider.maxValue" rz-slider-options="loanSlider.options"></rzslider> </div> <div class="outcomes"> <h1>Outcome measures</h1> <p>200 percent completion rates</p> <rzslider rz-slider-model="completionSlider.minValue" rz-slider-high="completionSlider.maxValue" rz-slider-options="loanSlider.options"></rzslider> <p>Post-graduation Earnings (7 years from graduation)</p> <rzslider rz-slider-model="earning7Slider.minValue" rz-slider-high="earning7Slider.maxValue" rz-slider-options="earning7Slider.options"></rzslider> <p>Post-graduation Earnings (3 years from graduation)</p> <rzslider rz-slider-model="earning3Slider.minValue" rz-slider-high="earning3Slider.maxValue" rz-slider-options="earning3Slider.options"></rzslider> <p>Post-graduation Earnings (1 year from graduation)</p> <rzslider rz-slider-model="earning1Slider.minValue" rz-slider-high="earning1Slider.maxValue" rz-slider-options="earning1Slider.options"></rzslider> </div> </div> <!-- col-lg-2 --> <div class="results"> <div ng-if="searchQuery"> <div class="saved grid"> <div> <h1>Grid test unlikely to work defining data</h1> <div id="grid1" ui-grid="gridOptions" class="grid"></div> </div> <dl ng-repeat="schools in schoolFound.results"> <div class="container col-xs-12 col-sm-3 col-md-3 col-lg-2 col-lg-2 schoolResults"> <div class="row schoolHeader"> <h4>{{schools.school.name}}</h4> <p>{{schools.school.city}}, {{schools.school.state}}</p> <div class="schoolMap"> <ui-gmap-google-map center="map.center" zoom="map.zoom"></ui-gmap-google-map> </div> </div> <div class="schoolLink"> <a href="{{schools.school.school_url}}">Link</a> </div> <div class="schoolDetails"> <div class="schoolAcceptance"> <p> Admissions rate: {{schools["2014"].admissions.admission_rate.average.overall}}</p> </div> <div class="schoolTest"> <div class="schoolTestSAT"> <p>SAT: {{schools["2014"].admissions.sat_scores.average.overall}}</p> </div> <div class="schoolTestACT"> <p>ACT: {{schools["2014"].admissions.act_scores.average.overall}}</p> </div> </div> <div class="schoolCost"> <p>Cost Attendance: {{schools["2014"].cost.attendance.academic_year}}</p> <!--           Issue with program costs --> <p>Average Net Cost: {{schools["2014"].cost.avg_net_price.overall}}</p> <p>Discount Rate: ?</p> </div> <div class="schoolDebt"> <p>Debt at Graduation: {{schools["2014"].aid.median_debt.completers.overall}}</p> </div> <div class="schoolCompletions"></div> <p>150% completion rate: {{schools["2014"].completion.completion_rate_4yr_150nt}}</p> <div class="schoolOutcomes"></div> <p>Median Income: {{schools["2012"].earnings["10_yrs_after_entry"].median}}</p> <div>Compare</div> </div> </div> </dl></div> </div> </div>')}]);