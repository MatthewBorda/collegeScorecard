"use strict";angular.module("collegeScorecardApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngMaps","ngTouch","ui.grid","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("collegeScorecardApp").controller("MainCtrl",["$scope","search",function(a,b){a.schoolsFound=b.find(),a.findSchools=function(){a.schoolFound=b.find({query:a.school}),a.searchQuery=a.school}}]),angular.module("collegeScorecardApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("collegeScorecardApp").factory("search",["$resource",function(a){return a("https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=:query&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ",{},{find:{method:"GET",params:{query:"Seattle"},isArray:!1}})}]),angular.module("collegeScorecardApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!--See grunt server:dev or whatever\nIntegrate slider\n--> <h1>Find a School</h1> <p class="lead"> <div ng-init="school=\'Seattle University\'"> <p> <label for="school">School: <input type="text" name="school" ng-model="school"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findSchools()">Find Schools</button> </p> <p>{{results.school.name}}</p> </div> <div ng-if="searchQuery"> <div> <h1>Grid test unlikely to work </h1> <div id="grid1" ui-grid="{ data: schoolsFound }" class="grid"></div> </div> <div> <h1>Grid test unlikely to work 2 </h1> <div id="grid1" ui-grid="{data: schoolsFind}" class="grid"></div> </div> <dl ng-repeat="schools in schoolFound.results"> <!--      <dt>E: {{name}}</dt> --> <dt>F: {{schools.school.name}}</dt> <dt>G: {{schools.id}}</dt> </dl> <table> <tr> <th>Schools:</th> <th ng-repeat="schools in schoolFound.results">{{schools.school.name}}</th> </tr> <tr ng-repeat="key in keys"> <td>ID:</td> <td ng-repeat="schools in schoolFound.results">{{schools.id}}</td> </tr> <tr ng-repeat="key in keys"> <td>URL:</td> <td ng-repeat="schools in schoolFound.results">{{schools.id}}</td> </tr> </table> <table> <tr> <th>Schools:</th> <th ng-repeat="schools in schoolFound.results">{{schools.school.name}}</th> </tr> <tr ng-repeat="schools in schoolFound.results"> <td>ID:</td> <td>{{schools.id}}</td> </tr> <tr> <td>URL:</td> <td ng-repeat="schools in schoolFound.results">{{schools.school_url}}</td> </tr> </table> </div> <div class="searchFields"> <div id="accordion"> <div class="panel"> <!--glyphicon glyphicon-chevron-down        --> <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse1"> Filter 1 </a> <div id="collapse1"> Content for filter 1 </div> </div> <div class="panel"> <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse2"> Like (or not) me </a> <div id="collapse2" class="collapse in"> <p>Acceptance Rates</p> <p>Test Scores</p> <p>% By Race/Ethnicity</p> <p>% First Generation</p> <p>% Pell Grant Recipients</p> </div> <div class="panel"> <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse3"> Cost of Attendance </a> <div id="collapse3" class="collapse in"> <p>Average Cost of Attendance</p> <p>Tutiton and Fees</p> <p>Average Net Price, by Income Level</p> <p>Debt at Graduation</p> <p>Estimated monthly loan payments</p> </div> </div> <div class="panel"> <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse4"> Completions and Post-Graduation Outcomes </a> <div id="collapse4" class="collapse in"> <p>Completions rates for First Time-Full-Time Freshmen</p> <p>200 percent completion rates</p> <p>Post-graduation Earnings (7 years from graduation)</p> <p>Post-graduation Earnings (3 years from graduation)</p> <p>Post-graduation Earnings (1 year from graduation)</p> <p>Share of Former Students Earning Over $25,000</p> </div> </div> </div> </div> <div class="map"> <h1>MAP</h1> <map ng-transclude class="google-map" center="map.center"> <marker position="marker.position"></marker> </map> </div> <div class="results"> <!--     <div class="demo-card">\n      <div class="card">\n        <div class="card-header">\n          This is a card header\n        </div>\n        <img class="card-img-top" src="http://placekitten.com/500/200">\n        <div class="card-block">\n          <h4 class="card-title">University Name</h4>\n          <h6 class="card-subtitle text-muted">Support card subtitle</h6>\n          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n          <ul class="list-group list-group-flush">\n            <li class="list-group-item">Cras justo odio</li>\n            <li class="list-group-item">Dapibus ac facilisis in</li>\n            <li class="list-group-item">Vestibulum at eros</li>\n          </ul>\n        </div>\n        <div class="card-block">\n          <a href="#" class="card-link">Card link</a>\n          <a href="#" class="card-link">School link</a>\n        </div>\n        <div class="card-block">\n          <a href="#" class="btn btn-primary">Save</a>\n        </div>\n        <div class="card-block">\n          <a href="#" class="btn btn-primary">Get more info</a>\n        </div>\n\n        <div class="card-footer text-muted">\n          This is a card footer\n        </div>\n      </div>\n    </div> --> </div> <div class="saved grid"> </div></div></p>')}]);