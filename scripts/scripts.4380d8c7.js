"use strict";angular.module("collegeScorecardApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngMaps","ngTouch","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("collegeScorecardApp",["uiGmapgoogle-maps"]).controller("MainCtrl",["$scope","search","map",function(a,b,c){a.search=b.query(),a.map={center:{latitude:45,longitude:-73},zoom:8}}]),angular.module("collegeScorecardApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("collegeScorecardApp").factory("search",["$resource",function(a){return a("https://api.data.gov/ed/collegescorecard/v1/schools?school.name=:schoolName&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ",{},{query:{method:"GET",params:{schoolName:"Seattle"},isArray:!1}})}]),angular.module("collegeScorecardApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!--See grunt server:dev or whatever\nIntegrate slider\n--> <div> <p> API Functions (SLOWLY) {{search.results[0].school.name}} </p> </div> <div class="searchFields"> <div id="accordion"> <div class="panel"> <!--glyphicon glyphicon-chevron-down        --> <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse1"> Filter 1 </a> <div id="collapse1"> Content for filter 1 </div> </div> <div class="panel"> <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse2"> Like (or not) me </a> <div id="collapse2" class="collapse in"> <p>Acceptance Rates</p> <p>Test Scores</p> <p>% By Race/Ethnicity</p> <p>% First Generation</p> <p>% Pell Grant Recipients</p> </div> <div class="panel"> <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse2"> Cost of Attendance </a> <div id="collapse2" class="collapse in"> <p>Average Cost of Attendance</p> <p>Tutiton and Fees</p> <p>Average Net Price, by Income Level</p> <p>Debt at Graduation</p> <p>Estimated monthly loan payments</p> </div> </div> <div class="panel"> <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse2"> Completions and Post-Graduation Outcomes </a> <div id="collapse2" class="collapse in"> <p>Completions rates for First Time-Full-Time Freshmen</p> <p>200 percent completion rates</p> <p>Post-graduation Earnings (7 years from graduation)</p> <p>Post-graduation Earnings (3 years from graduation)</p> <p>Post-graduation Earnings (1 year from graduation)</p> <p>Share of Former Students Earning Over $25,000</p> </div> </div> </div> </div> <div class="map"> <h1>MAP </h1> <ui-gmap-google-map center="map.center" zoom="map.zoom"></ui-gmap-google-map> <h1>MAP 2</h1> <map ng-transclude class="google-map" center="map.center"> <marker position="marker.position"></marker> </map> </div> <div class="results"> </div> <div class="saved grid"> </div></div>')}]);