"use strict";angular.module("collegeScorecardApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngMaps","ngTouch","ui.grid","rzModule","ngStorage","uiGmapgoogle-maps","angularUtils.directives.dirPagination"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("collegeScorecardApp").controller("MainCtrl",["$scope","search","$localStorage",function(a,b,c){a.schoolsFound=b.find(),a.findSchools=function(){a.schoolFound=b.find({query:a.school}),a.searchQuery=a.school},a.saveSchool=function(a){var b={id:a.id,Name:a.school.name,State:a.school.state,"Median Earnings at 10yrs":a[2012].earnings["10_yrs_after_entry"].median,"Above HS equiv at 10yrs":a[2012].earnings["10_yrs_after_entry"].percent_greater_than_25000,Undergraduates:a[2014].student.size,"Female %":a[2014].student.demographics.women,"White %":a[2014].student.demographics.race_ethnicity.white,"Pell %":a[2014].student.students_with_pell_grant,"First Gen %":a[2014].student.share_firstgeneration,"Retenion %":a[2014].student.retention_rate.overall.full_time,"Admit %":a[2014].admissions.admission_rate.overall,"SAT AVG":a[2014].admissions.sat_scores.overall,"ACT MID":a[2014].admissions.act_scores.midpoint.cumulative,"Median Debt":a[2014].aid.median_debt.completers.overall,"With Loan %":a[2014].aid.students_with_any_loan,"Net Price":a[2014].cost.avg_net_price.overall,"Cost Attendance":a[2014].cost.attendance.academic_year,Tuition:a[2014].cost.tuition.in_state,"Graduated in 4 yrs":a[2007].completion.completion_rate_4yr_100nt,"Graduated in 6 yrs":a[2007].completion.completion_rate_4yr_150nt};if(c.compareSchools){for(var d=!0,e=0;e<c.compareSchools.length;e++)c.compareSchools[e].id==b.id&&(d=!1);1==d?c.compareSchools.push(b):console.log("School already saved")}else c.compareSchools=[b]},a.gridOptions={data:c.compareSchools,enableColumnResizing:!0,columnDefs:[{field:"id",width:0},{field:"Name",width:200},{field:"State",width:100},{field:"Median Earnings at 10yrs",width:100,cellFilter:'currency:"$":0'},{field:"Above HS equiv at 10yrs",width:100},{field:"Undergraduates",width:100},{field:"Female %",width:100},{field:"White %",width:100},{field:"Pell %",width:100},{field:"First Gen %",width:100},{field:"Retenion %",width:100},{field:"Admit %",width:100},{field:"SAT AVG",width:100},{field:"ACT MID",width:100},{field:"Median Debt",width:100,cellFilter:'currency:"$":0'},{field:"With Loan %",width:100,cellFilter:'currency:"$":0'},{field:"Net Price",width:100,cellFilter:'currency:"$":0'},{field:"Cost Attendance",width:100,cellFilter:'currency:"$":0'},{field:"Tuition",width:100,cellFilter:'currency:"$":0'},{field:"Graduated in 4 yrs",width:100},{field:"Graduated in 6 yrs",width:100}]},a.savedSchools=c.compareSchools,a.degree=["Any","Two-Year (Associates)","Four-Year (Bachelor's)"],a.degreeselected=function(b){a.selectedItem=b,alert(a.selectedItem)},a.map={center:{latitude:45,longitude:-73},zoom:8},a.acceptanceSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.SATslider={minValue:0,maxValue:1600,options:{floor:0,ceil:1600,step:1,minRange:100,maxRange:1600,pushRange:!0}},a.ACTslider={minValue:0,maxValue:36,options:{floor:0,ceil:36,step:1,minRange:2,maxRange:36,pushRange:!0}},a.raceSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.genSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.pellSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.costSlider={minValue:0,maxValue:1e5,options:{floor:0,ceil:1e5,step:1e3,minRange:1e3,maxRange:100,pushRange:!0}},a.tuitionSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.priceSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.debtSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.loanSlider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.earning7Slider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.earning3Slider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}},a.earning1Slider={minValue:0,maxValue:100,options:{floor:0,ceil:100,step:1,minRange:10,maxRange:100,pushRange:!0}}}]),angular.module("collegeScorecardApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("collegeScorecardApp").factory("search",["$resource",function(a){return a("https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=:query&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ",{},{find:{method:"GET",params:{query:"Seattle"},isArray:!1}})}]),angular.module("collegeScorecardApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="searchFields"> <div class="container introHead"> <div class="row"> <h1> Find schools </h1> <h2> Save and Compare Schools Now </h2> </div> </div> <!-- School Name     --> <div class="searchGroup"> <div class="mainSearch container"> <div class="row"> <div class="col-xs-11 col-sm-11 col-md-11 lg-col-lg-11"> <h2>Name</h2> </div> <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1"> <button type="submit" class="btn btn-link" ng-click="showName = !showName"> <span class="glyphicon glyphicon-chevron-down"></span></button> </div> </div> </div> <div class="container" ng-show="showName"> <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12"> <p class="lead"> <div ng-init="school=\'Seattle University\'"> <label for="school"><input type="text" name="school" ng-model="school"></label> </div></p> </div> </div> <!--Degree Program      --> <div class="searchGroup"> <div class="degreeProgram container"> <div class="row"> <div class="col-xs-11 col-sm-11 col-md-11 lg-col-lg-11"> <h2>Degree/Program</h2> </div> <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1"> <button type="submit" class="btn btn-link" ng-click="showDegree = !showDegree"> <span class="glyphicon glyphicon-chevron-down"></span></button> </div> </div> </div> <div class="container" ng-show="showDegree"> <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12"> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Degree <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Program <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> </div> </div> </div> <!-- Location     --> <div class="searchGroup"> <div class="location container"> <div class="row"> <div class="col-xs-11 col-sm-11 col-md-11 lg-col-lg-11"> <h2>Location</h2> </div> <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1"> <button type="submit" class="btn btn-link" ng-click="showLocation = !showLocation"> <span class="glyphicon glyphicon-chevron-down"></span></button> </div> </div> </div> <div class="container" ng-show="showLocation"> <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12"> <!-- Search fields          --> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> State <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Region <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> <div class="input-group"> <p>Enter a Zip code</p> <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1"> <div class="input-group"> <p>Mile radius</p> <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1"> </div> </div> </div> </div> </div> <!-- likeMe     --> <div class="searchGroup"> <div class="likeMe container"> <div class="row"> <div class="col-xs-11 col-sm-11 col-md-11 lg-col-lg-11"> <h2>Student Profile</h2> </div> <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1"> <button type="submit" class="btn btn-link" ng-click="showLike = !showLike"> <span class="glyphicon glyphicon-chevron-down"></span></button> </div> </div> </div> <div class="container" ng-show="showLike"> <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12"> <!-- Search fields          --> <p>Acceptance Rates</p> <div> <rzslider rz-slider-model="acceptanceSlider.minValue" rz-slider-high="acceptanceSlider.maxValue" rz-slider-options="acceptanceSlider.options"></rzslider> </div> <p>Test Scores</p> <p>SAT</p> <rzslider rz-slider-model="SATslider.minValue" rz-slider-high="SATslider.maxValue" rz-slider-options="SATslider.options"></rzslider> <p>ACT</p> <rzslider rz-slider-model="ACTslider.minValue" rz-slider-high="ACTslider.maxValue" rz-slider-options="ACTslider.options"></rzslider> <p>% By Race/Ethnicity</p> <rzslider rz-slider-model="raceSlider.minValue" rz-slider-high="raceSlider.maxValue" rz-slider-options="raceSlider.options"></rzslider> <p>% First Generation</p> <rzslider rz-slider-model="genSlider.minValue" rz-slider-high="genSlider.maxValue" rz-slider-options="genSlider.options"></rzslider> <p>% Pell Grant Recipients</p> <rzslider rz-slider-model="pellSlider.minValue" rz-slider-high="pellSlider.maxValue" rz-slider-options="pellSlider.options"></rzslider> </div> </div> </div> <!-- Cost --> <div class="searchGroup"> <div class="cost container"> <div class="row"> <div class="col-xs-11 col-sm-11 col-md-11 lg-col-lg-11"> <h2>Cost of Attendance</h2> </div> <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1"> <button type="submit" class="btn btn-link" ng-click="showCost = !showCost"> <span class="glyphicon glyphicon-chevron-down"></span></button> </div> </div> </div> <div class="container" ng-show="showCost"> <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12"> <!-- Search fields          --> <p>Average Cost of Attendance</p> <rzslider rz-slider-model="costSlider.minValue" rz-slider-high="costSlider.maxValue" rz-slider-options="costSlider.options"></rzslider> <p>Tutiton and Fees</p> <rzslider rz-slider-model="tuitionSlider.minValue" rz-slider-high="tuitionSlider.maxValue" rz-slider-options="tuitionSlider.options"></rzslider> <p>Debt at Graduation</p> <rzslider rz-slider-model="debtSlider.minValue" rz-slider-high="debtSlider.maxValue" rz-slider-options="debtSlider.options"></rzslider> <p>Estimated monthly loan payments</p> <rzslider rz-slider-model="loanSlider.minValue" rz-slider-high="loanSlider.maxValue" rz-slider-options="loanSlider.options"></rzslider> </div> </div> </div> <!-- Outcomes   --> <div class="searchGroup"> <div class="outcomes container"> <div class="row"> <div class="col-xs-11 col-sm-11 col-md-11 lg-col-lg-11"> <h2>Outcome Measures</h2> </div> <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1"> <button type="submit" class="btn btn-link" ng-click="showOutcomes = !showOutcomes"> <span class="glyphicon glyphicon-chevron-down"></span></button> </div> </div> </div> <div class="container" ng-show="showOutcomes"> <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12"> <!-- Search fields          --> <p>200 percent completion rates</p> <rzslider rz-slider-model="completionSlider.minValue" rz-slider-high="completionSlider.maxValue" rz-slider-options="loanSlider.options"></rzslider> <p>Post-graduation Earnings (7 years from graduation)</p> <rzslider rz-slider-model="earning7Slider.minValue" rz-slider-high="earning7Slider.maxValue" rz-slider-options="earning7Slider.options"></rzslider> <p>Post-graduation Earnings (3 years from graduation)</p> <rzslider rz-slider-model="earning3Slider.minValue" rz-slider-high="earning3Slider.maxValue" rz-slider-options="earning3Slider.options"></rzslider> <p>Post-graduation Earnings (1 year from graduation)</p> <rzslider rz-slider-model="earning1Slider.minValue" rz-slider-high="earning1Slider.maxValue" rz-slider-options="earning1Slider.options"></rzslider> </div> </div> </div> <!--Search button  --> <div class="searchButton text-center"> <p><button class="btn btn-lg btn-primary" ng-click="findSchools()">Find Schools</button></p> </div> </div> </div> <div class="results"> <div ng-if="searchQuery"> <div dir-paginate="schools in schoolFound.results | itemsPerPage:3 "> <div class="container col-xs-12 col-sm-4 col-md-4 col-lg-4 col-lg-4 schoolResults"> <div class="row schoolHeader"> <div class="row-fluid schoolHeight"> <h4><b> <a ng-href="https://{{schools.school.school_url}}">{{schools.school.name}} </a></b></h4> </div> <p>{{schools.school.city}}, {{schools.school.state}}</p> <p><b>{{schools["2014"].student.size | number}} <span class="empty" ng-show="!{{schools[\'2014\'].student.size}}">-</span></b> undergraduate students</p> </div> <div class="schoolDetails"> <div class="schoolAcceptance lineAbove"> <p> <b>{{((schools["2014"].admissions.admission_rate.overall) *100).toFixed(0)}}% <span class="empty" ng-show="!schools[\'2014\'].admissions.admission_rate.average.overall">-</span></b> applicants admitted <span class="glyphicon glyphicon-info-sign"></span></p> </div> <div class="schoolTestSAT lineAbove"> <p><b>{{schools["2014"].admissions.sat_scores.average.overall | number}} <span class="empty" ng-show="!schools[\'2014\'].admissions.sat_scores.average.overall">-</span></b> average SAT score</p> </div> <!--ACT only reports midpoint data not average.               --> <!--             <div class="schoolTestACT lineAbove">\n              <p><b>{{schools["2014"].admissions.act_scores.average.overall}}\n                <span class="empty" ng-show="!schools[\'2014\'].admissions.act_scores.average.overall">-</span></b> average ACT score</p>\n            </div> --> <div class="schoolCost lineAbove"> <p><b>{{schools["2014"].cost.attendance.academic_year | currency:"$":0}} <span class="empty" ng-show="!schools[\'2014\'].cost.attendance.academic_year">-</span></b> cost of attendance</p> </div> <div class="schoolPrice lineAbove"> <p><b>{{schools["2014"].cost.avg_net_price.overall | currency:"$":0}} <span class="empty" ng-show="!schools[\'2014\'].cost.avg_net_price.overall">-</span></b> average net price</p> </div> <div class="schoolDebt lineAbove"> <p> <b>{{schools["2014"].aid.median_debt.completers.overall | currency:"$":0}} <span class="empty" ng-show="!schools[\'2014\'].aid.median_debt.completers.overall">-</span></b> debt at graduation </p> </div> <div class="schoolCompletions lineAbove"> <p><b> {{((schools["2014"].completion.completion_rate_4yr_150nt) *100).toFixed(0)}}% <span class="empty" ng-show="!schools[\'2014\'].completion.completion_rate_4yr_150nt">-</span></b> 150% completion rate </p> </div> <div class="schoolOutcomes lineAbove"> <p><b>{{schools["2012"].earnings["10_yrs_after_entry"].median | currency:"$":0}} <span class="empty" ng-show="!schools[\'2012\'].earnings[\'10_yrs_after_entry\'].median">-</span></b> median income</p> </div> <div> <p><button class="btn btn-sm btn-primary" ng-click="saveSchool(schools)">Compare</button></p> </div> </div> </div> </div> <div class="container clearfix"> <div class="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-lg-12"> <dir-pagination-controls max-size="3" direction-links="true" boundary-links="true"> </dir-pagination-controls> </div> </div> </div> </div> <div> <h1>Definitions</h1> </div> <div class="saved grid"> <div> <h1>Compare saved schools</h1> <!--       <div id="grid1" ui-grid="{ data: savedSchools }" class="grid"></div> --> <div id="grid1" ui-grid="gridOptions" class="grid"></div> </div> </div>')}]);