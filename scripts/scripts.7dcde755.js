"use strict";angular.module("collegeScorecardApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngMaps","ngTouch","ui.grid","rzModule","ngStorage","uiGmapgoogle-maps","angularUtils.directives.dirPagination"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("collegeScorecardApp").controller("MainCtrl",["$scope","search","$localStorage",function(a,b,c){a.schoolsFound=b.find(),a.findSchools=function(){a.schoolFound=b.find({minClass:a.classSlider.minValue,maxClass:a.classSlider.maxValue,minWomen:a.femaleSlider.minValue,maxWomen:a.femaleSlider.maxValue,minWhite:a.raceSlider.minValue,maxWhite:a.raceSlider.maxValue,minPell:a.pellSlider.minValue,maxPell:a.pellSlider.maxValue,minFirst:a.genSlider.minValue,maxFirst:a.genSlider.maxValue,minFull:a.retainedSlider.minValue,maxFull:a.retainedSlider.maxValue,minAdmit:a.acceptanceSlider.minValue,maxAdmit:a.acceptanceSlider.maxValue,minSAT:a.SATslider.minValue,maxSAT:a.SATslider.maxValue,minDebt:a.debtSlider.minValue,maxDebt:a.debtSlider.maxValue,minLoan:a.borrowedSlider.minValue,maxLoan:a.borrowedSlider.maxValue,minPrice:a.netSlider.minValue,maxPrice:a.netSlider.maxValue,minTuition:a.tuitionSlider.minValue,maxTuition:a.tuitionSlider.maxValue,minCost:a.costSlider.minValue,maxCost:a.costSlider.maxValue,minComp:a.completionSlider,maxComp:a.completionSlider,minEarn:a.earning7Slider,maxEarn:a.earning7Slider,minHS:a.hsSlider,maxHS:a.hsSlider})},a.saveSchool=function(a){var b={id:a.id,Name:a.school.name,State:a.school.state,"Median Earnings at 10yrs":a[2012].earnings["10_yrs_after_entry"].median,"Above HS equiv at 10yrs":a[2012].earnings["10_yrs_after_entry"].percent_greater_than_25000,Undergraduates:a[2014].student.size,"Female %":100*a[2014].student.demographics.women,"White %":100*a[2014].student.demographics.race_ethnicity.white,"Pell %":100*a[2014].student.students_with_pell_grant,"First Gen %":100*a[2014].student.share_firstgeneration,"Retenion %":100*a[2014].student.retention_rate.overall.full_time,"Admit %":100*a[2014].admissions.admission_rate.overall,"SAT AVG":a[2014].admissions.sat_scores.average.overall,"ACT MID":a[2014].admissions.act_scores.midpoint.cumulative,"Median Debt":a[2014].aid.median_debt.completers.overall,"With Loan %":100*a[2014].aid.students_with_any_loan,"Net Price":a[2014].cost.avg_net_price.overall,"Cost Attendance":a[2014].cost.attendance.academic_year,Tuition:a[2014].cost.tuition.in_state,"Graduated in 4 yrs":100*a[2007].completion.completion_rate_4yr_100nt,"Graduated in 6 yrs":100*a[2007].completion.completion_rate_4yr_150nt};if(c.compareSchools){for(var d=!0,e=0;e<c.compareSchools.length;e++)c.compareSchools[e].id==b.id&&(d=!1);1==d?c.compareSchools.push(b):console.log("School already saved")}else c.compareSchools=[b]},a.gridOptions={data:c.compareSchools,enableColumnResizing:!0,columnDefs:[{field:"id",width:0},{name:"Remove",cellTemplate:'<button class="btn primary" ng-click="grid.appScope.removeSchool()">Remove</button>',width:75},{field:"Name",width:200},{field:"State",width:100},{field:"Undergraduates",width:125,cellFilter:"number: 0"},{field:"Median Earnings at 10yrs",width:100,cellFilter:'currency:"$":0'},{field:"Above HS equiv at 10yrs",displayName:"Above HS equiv at 10yrs",width:100},{field:"Female %",width:100,cellFilter:"number: 0"},{field:"White %",width:100,cellFilter:"number: 0"},{field:"Pell %",width:100,cellFilter:"number: 0"},{field:"First Gen %",width:100,cellFilter:"number: 0"},{field:"Retenion %",width:100,cellFilter:"number: 0"},{field:"Admit %",width:100,cellFilter:"number: 0"},{field:"SAT AVG",width:100,displayName:"Average SAT Score",cellFilter:"number: 0"},{field:"ACT MID",width:100,displayName:"ACT midpoint",cellFilter:"number: 0"},{field:"Median Debt",width:100,cellFilter:'currency:"$":0'},{field:"With Loan %",width:100,cellFilter:"number: 0"},{field:"Net Price",width:100,cellFilter:'currency:"$":0'},{field:"Cost Attendance",width:100,cellFilter:'currency:"$":0'},{field:"Tuition",width:100,cellFilter:'currency:"$":0'},{field:"Graduated in 4 yrs",width:100,cellFilter:"number: 0"},{field:"Graduated in 6 yrs",width:100,cellFilter:"number: 0"}]},a.removeSchool=function(){alert("Remove from storage")},a.savedSchools=c.compareSchools,a.classSlider={minValue:0,maxValue:6e4,options:{floor:0,ceil:6e4,step:1e3,minRange:1e3,maxRange:6e4,pushRange:!0}},a.borrowedSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.hsSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.retainedSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.femaleSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.acceptanceSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.SATslider={minValue:0,maxValue:1600,options:{floor:0,ceil:1600,step:1,minRange:100,maxRange:1600,pushRange:!0}},a.raceSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.genSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.pellSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.costSlider={minValue:0,maxValue:1e5,options:{floor:0,ceil:1e5,step:1e3,minRange:1e3,maxRange:100,pushRange:!0}},a.netSlider={minValue:0,maxValue:1e5,options:{floor:0,ceil:1e5,step:1e3,minRange:1e3,maxRange:100,pushRange:!0}},a.tuitionSlider={minValue:0,maxValue:1e5,options:{floor:0,ceil:1e5,step:1e3,minRange:1e3,maxRange:100,pushRange:!0}},a.priceSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.debtSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.loanSlider={minValue:0,maxValue:1,options:{floor:0,ceil:1,step:.1,minRange:.1,maxRange:1,pushRange:!0}},a.earning7Slider={minValue:0,maxValue:1e5,options:{floor:0,ceil:1e5,step:1e3,minRange:1e3,maxRange:100,pushRange:!0}},a.earning3Slider={minValue:0,maxValue:1e5,options:{floor:0,ceil:1e5,step:1e3,minRange:1e3,maxRange:100,pushRange:!0}},a.earning1Slider={minValue:0,maxValue:1e5,options:{floor:0,ceil:1e5,step:1e3,minRange:1e3,maxRange:100,pushRange:!0}}}]),angular.module("collegeScorecardApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("collegeScorecardApp").factory("search",["$resource",function(a){return a("https://api.data.gov/ed/collegescorecard/v1/schools.json?2014.student.size__range=minClass..maxClass&2014.student.demographics.women__range=minWomen..maxWomen&2014.student.demographics.race_ethnicity.white__range=minWhite..maxWhite&2014.student.students_with_pell_grant__range=minPell..maxPell&2014.student.share_firstgeneration__range=minFirst..maxFirst&2014.student.retention_rate.overall.full_time__range=minFull..maxFull&2014.admissions.admission_rate.overall__range=minAdmit..maxAdmit&2014.admissions.sat_scores.average.overall__range=minSAT..maxSAT&2014.aid.median_debt_suppressed.completers.overall__range=minDebt..maxDebt&2014.aid.students_with_any_loan__range=minLoan..maxLoan&2014.cost.avg_net_price.overall__range=minPrice..maxPrice&2014.cost.tuition.in_state__range=minTuition..maxTuition&2014.cost.attendance.academic_year__range=minCost..maxCost&2007.completion.completion_rate_4yr_150nt__range=minComp..maxComp&2012.earnings10_yrs_after_entry.median__range=minEarn..maxEarn&2012.earnings10_yrs_after_entry.percent_greater_than_25000__range=minHS..maxHS&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ&_per_page=100",{},{find:{method:"GET",params:{minClass:0,maxClass:6e4,minWomen:0,maxWomen:1,minWhite:0,maxWhite:1,minPell:0,maxPell:1,minFirst:0,maxFirst:1,minFull:0,maxFull:1,minAdmit:0,maxAdmit:1,minSAT:0,maxSAT:1600,minDebt:0,maxDebt:1e6,minLoan:0,maxLoan:1,minPrice:0,maxPrice:1e5,minTuition:0,maxTuition:1e5,minCost:0,maxCost:1e5,minComp:0,maxComp:1,minEarn:0,maxEarn:1e5,minHS:0,maxHS:1},isArray:!1}})}]),angular.module("collegeScorecardApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="searchFields"> <div class="container introHead"> <div class="row"> <h1> Find schools </h1> <h2> Save and Compare Schools Now </h2> </div> </div> <!-- School Name     --> <div class="searchGroup"> <!--     <div class="mainSearch container">\n    <div class="row">\n      <div class="col-xs-1 col-sm-10 col-md-10 col-lg-10">\n        <h2>Name</h2>\n      </div>\n      <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1">\n        <button type="submit" class="btn btn-link" ng-click="showName = !showName">\n          <span class="glyphicon glyphicon-chevron-down"></span></button>\n      </div>\n    </div>\n  </div>\n    <div class="container" ng-show="showName">\n    <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12">\n      <p class="lead">\n        <div ng-init="school=\'Seattle University\'">\n          <label for="school"><input type="text" name="school" ng-model="school"></label>\n      </p>\n      </div>\n    </div>\n --> <!-- likeMe     --> <div class="searchGroup"> <div class="likeMe container"> <div class="row"> <div class="col-xs-1 col-sm-10 col-md-10 col-lg-10"> <h2>Student Profile</h2> </div> <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1"> <button type="submit" class="btn btn-link" ng-click="showLike = !showLike"> <span class="glyphicon glyphicon-chevron-down"></span></button> </div> </div> </div> <div class="container" ng-show="showLike"> <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12"> <!-- Search fields          --> <p>Undergraduate Size</p> <div> <rzslider rz-slider-model="classSlider.minValue" rz-slider-high="classSlider.maxValue" rz-slider-options="classSlider.options"></rzslider> </div> <p>Acceptance Rates</p> <div> <rzslider rz-slider-model="acceptanceSlider.minValue" rz-slider-high="acceptanceSlider.maxValue" rz-slider-options="acceptanceSlider.options"></rzslider> </div> <p>Test Scores</p> <p>SAT</p> <rzslider rz-slider-model="SATslider.minValue" rz-slider-high="SATslider.maxValue" rz-slider-options="SATslider.options"></rzslider> <p>% By White</p> <rzslider rz-slider-model="raceSlider.minValue" rz-slider-high="raceSlider.maxValue" rz-slider-options="raceSlider.options"></rzslider> <p>% First Generation</p> <rzslider rz-slider-model="genSlider.minValue" rz-slider-high="genSlider.maxValue" rz-slider-options="genSlider.options"></rzslider> <p>% Pell Grant Recipients</p> <rzslider rz-slider-model="pellSlider.minValue" rz-slider-high="pellSlider.maxValue" rz-slider-options="pellSlider.options"></rzslider> <p>% Female</p> <rzslider rz-slider-model="femaleSlider.minValue" rz-slider-high="femaleSlider.maxValue" rz-slider-options="femaleSlider.options"></rzslider> <p>% Retained after first term</p> <rzslider rz-slider-model="retainedSlider.minValue" rz-slider-high="retainedSlider.maxValue" rz-slider-options="retainedSlider.options"></rzslider> </div> </div> </div> <!-- Cost --> <div class="searchGroup"> <div class="cost container"> <div class="row"> <div class="col-xs-1 col-sm-10 col-md-10 col-lg-10"> <h2>Cost of Attendance</h2> </div> <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1"> <button type="submit" class="btn btn-link" ng-click="showCost = !showCost"> <span class="glyphicon glyphicon-chevron-down"></span></button> </div> </div> </div> <div class="container" ng-show="showCost"> <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12"> <!-- Search fields          --> <p>Average Net Price of Attendance</p> <rzslider rz-slider-model="netSlider.minValue" rz-slider-high="netSlider.maxValue" rz-slider-options="netSlider.options"></rzslider> <p>Tutiton (in State)</p> <rzslider rz-slider-model="tuitionSlider.minValue" rz-slider-high="tuitionSlider.maxValue" rz-slider-options="tuitionSlider.options"></rzslider> <p>Cost of Attendance</p> <rzslider rz-slider-model="costSlider.minValue" rz-slider-high="costSlider.maxValue" rz-slider-options="costSlider.options"></rzslider> <p>% with loans</p> <rzslider rz-slider-model="borrowedSlider.minValue" rz-slider-high="borrowedSlider.maxValue" rz-slider-options="borrowedSlider.options"></rzslider> <p>Debt at Graduation</p> <rzslider rz-slider-model="debtSlider.minValue" rz-slider-high="debtSlider.maxValue" rz-slider-options="debtSlider.options"></rzslider> <p>Estimated monthly loan payments</p> <rzslider rz-slider-model="loanSlider.minValue" rz-slider-high="loanSlider.maxValue" rz-slider-options="loanSlider.options"></rzslider> </div> </div> </div> <!-- Outcomes   --> <div class="searchGroup"> <div class="outcomes container"> <div class="row"> <div class="col-xs-1 col-sm-10 col-md-10 col-lg-10"> <h2>Outcome Measures</h2> </div> <div class="col-xs-1 col-sm-1 col-md-1 lg-col-lg-1"> <button type="submit" class="btn btn-link" ng-click="showOutcomes = !showOutcomes"> <span class="glyphicon glyphicon-chevron-down"></span></button> </div> </div> </div> <div class="container" ng-show="showOutcomes"> <div class="col-xs-12 col-sm-12 col-md-12 lg-col-lg-12"> <!-- Search fields          --> <p>150% Normal Time Completion Rates</p> <rzslider rz-slider-model="completionSlider.minValue" rz-slider-high="completionSlider.maxValue" rz-slider-options="completionSlider.options"></rzslider> <p>Post-graduation Earnings 10 years from graduation</p> <rzslider rz-slider-model="earning7Slider.minValue" rz-slider-high="earning7Slider.maxValue" rz-slider-options="earning7Slider.options"></rzslider> <p>% of Graduates Earning More than High School Graduates </p> <rzslider rz-slider-model="hsSlider.minValue" rz-slider-high="hsSlider.maxValue" rz-slider-options="hsSlider.options"></rzslider> </div> </div> </div> <!--Search button  --> <div class="searchButton text-center"> <p><button class="btn btn-lg btn-primary" ng-click="findSchools()">Find Schools</button></p> </div> </div> </div> <div class="results"> <!--     <div ng-if="searchQuery"> --> <div dir-paginate="metadata in schoolFound.metadata | itemsPerPage:1 "> <p ng-show="metadata.total = 0">No schools found. Revise your filters try again</p> <p ng-show="metadata.total = 100">{{schools.total}} results. Consider revising your filter. The first 100 results are below</p> </div>. <div dir-paginate="schools in schoolFound.results | itemsPerPage:3 "> <div class="container col-xs-12 col-sm-4 col-md-4 col-lg-4 col-lg-4 schoolResults"> <div class="row schoolHeader"> <div class="row-fluid schoolHeight"> <h4><b> <a ng-href="https://{{schools.school.school_url}}">{{schools.school.name}} </a></b></h4> </div> <p>{{schools.school.city}}, {{schools.school.state}}</p> <p><b>{{schools["2014"].student.size | number}} <span class="empty" ng-show="!{{schools[\'2014\'].student.size}}">-</span></b> undergraduate students</p> </div> <div class="schoolDetails"> <div class="schoolAcceptance lineAbove"> <p> <b>{{((schools["2014"].admissions.admission_rate.overall) *100).toFixed(0)}}% <span class="empty" ng-show="!schools[\'2014\'].admissions.admission_rate.average.overall">-</span></b> applicants admitted </p> </div> <div class="schoolTestSAT lineAbove"> <p><b>{{schools["2014"].admissions.sat_scores.average.overall | number}} <span class="empty" ng-show="!schools[\'2014\'].admissions.sat_scores.average.overall">-</span></b> average SAT score</p> </div> <div class="schoolCost lineAbove"> <p><b>{{schools["2014"].cost.attendance.academic_year | currency:"$":0}} <span class="empty" ng-show="!schools[\'2014\'].cost.attendance.academic_year">-</span></b> cost of attendance</p> </div> <div class="schoolPrice lineAbove"> <p><b>{{schools["2014"].cost.avg_net_price.overall | currency:"$":0}} <span class="empty" ng-show="!schools[\'2014\'].cost.avg_net_price.overall">-</span></b> average net price</p> </div> <div class="schoolDebt lineAbove"> <p> <b>{{schools["2014"].aid.median_debt.completers.overall | currency:"$":0}} <span class="empty" ng-show="!schools[\'2014\'].aid.median_debt.completers.overall">-</span></b> debt at graduation </p> </div> <div class="schoolCompletions lineAbove"> <p><b> {{((schools["2014"].completion.completion_rate_4yr_150nt) *100).toFixed(0)}}% <span class="empty" ng-show="!schools[\'2014\'].completion.completion_rate_4yr_150nt">-</span></b> 150% completion rate  </p> </div> <div class="schoolOutcomes lineAbove"> <p><b>{{schools["2012"].earnings["10_yrs_after_entry"].median | currency:"$":0}} <span class="empty" ng-show="!schools[\'2012\'].earnings[\'10_yrs_after_entry\'].median">-</span></b> median income</p> </div> <div> <p><button class="btn btn-sm btn-primary" ng-click="saveSchool(schools)">Compare</button></p> </div> </div> </div> </div> <div class="container clearfix"> <div class="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-lg-12"> <dir-pagination-controls max-size="3" direction-links="true" boundary-links="true"> </dir-pagination-controls> </div> </div> </div> <div> <h1>Definitions</h1> </div> <div class="saved grid"> <div> <h1>Compare saved schools</h1> <div id="grid1" ui-grid="gridOptions" class="grid"></div> </div> </div>')}]);