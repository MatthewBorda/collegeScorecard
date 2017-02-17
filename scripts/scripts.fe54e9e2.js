"use strict";angular.module("collegeScorecardApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngMaps","ngTouch","ui.grid","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("collegeScorecardApp").controller("MainCtrl",["$scope","search",function(a,b){a.schoolsFound=b.find(),a.findSchools=function(){a.schoolFound=b.find({query:a.school}),a.searchQuery=a.school},a.degree=["Any","Two-Year (Associates)","Four-Year (Bachelor's)"],a.degreeselected=function(b){a.selectedItem=b,alert(a.selectedItem)}}]),angular.module("collegeScorecardApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("collegeScorecardApp").factory("search",["$resource",function(a){return a("https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=:query&api_key=xqfqZmKUIPqNYDG8WVRvF3079XzgGgXtyJSloKzQ",{},{find:{method:"GET",params:{query:"Seattle"},isArray:!1}})}]),angular.module("collegeScorecardApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!--See grunt server:dev or whatever\nIntegrate slider\n--> <div class="searchFields"> <div class="mainSearch"> <h1>Find a School</h1> <p class="lead"> <div ng-init="school=\'Seattle University\'"> <p> <label for="school">School:<input type="text" name="school" ng-model="school"></label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findSchools()">Find Schools</button> </p> </div> </p></div> <div class="degreeProgram"> <div class="dropdown"> <h1>Degree/Program</h1> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Degree <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Program <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> </div> <div class="Location"> <h1>Location</h1> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> State <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Region <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li ng-repeat="a in degree"><a ng-click="degreeselected()">{{a}}</a></li> </ul> </div> <div class="input-group"> <p>Enter a Zip code</p> <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1"> <div class="input-group"> <p>Mile radius</p> <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1"> </div> </div> </div> <div class="likeMe"> <h1> Student Profile </h1> <p>Acceptance Rates</p> <p>Test Scores</p> <p>SAT</p> <p>SAT</p> <p>% By Race/Ethnicity</p> <p>% First Generation</p> <p>% Pell Grant Recipients</p> </div> <div class="cost"> <h1>Cost of Attendance</h1> <p>Average Cost of Attendance</p> <p>Tutiton and Fees</p> <p>Average Net Price, by Income Level</p> <p>Debt at Graduation</p> <p>Estimated monthly loan payments</p> </div> <div class="outcomes"> <h1>Outcome measures</h1> <p>Completions rates for First Time-Full-Time Freshmen</p> <p>200 percent completion rates</p> <p>Post-graduation Earnings (7 years from graduation)</p> <p>Post-graduation Earnings (3 years from graduation)</p> <p>Post-graduation Earnings (1 year from graduation)</p> <p>Share of Former Students Earning Over $25,000</p> </div> </div> <div class="results"> <div ng-if="searchQuery"> <dl ng-repeat="schools in schoolFound.results"> <div class="card" style="width: 20rem"> <h4 class="card-title">{{schools.school.name}}</h4> <div class="card-footer"> <a href="{{schools.school.school_url}}">Link</a> </div> </div> <!--      <dt>E: {{name}}</dt> --> <dt>F: {{schools.school.name}}</dt> <dt>G: {{schools.id}}</dt> <!-- <H1>MAP</H1>\n    <map ng-transclude class=\'google-map\' center=\'map.center\'> \n  <marker position=\'marker.position\'></marker>\n</map> --> </dl></div>  <table> <tr> <th>Schools:</th> <th ng-repeat="schools in schoolFound.results">{{schools.school.name}}</th> </tr> <tr ng-repeat="key in keys"> <td>ID:</td> <td ng-repeat="schools in schoolFound.results">{{schools.id}}</td> </tr> <tr ng-repeat="key in keys"> <td>URL:</td> <td ng-repeat="schools in schoolFound.results">{{schools.id}}</td> </tr> </table> <table> <tr> <th>Schools:</th> <th ng-repeat="schools in schoolFound.results">{{schools.school.name}}</th> </tr> <tr ng-repeat="schools in schoolFound.results"> <td>ID:</td> <td>{{schools.id}}</td> </tr> <tr> <td>URL:</td> <td ng-repeat="schools in schoolFound.results">{{schools.school_url}}</td> </tr> </table> <!--     <div class="demo-card">\n      <div class="card">\n        <div class="card-header">\n          This is a card header\n        </div>\n        <img class="card-img-top" src="http://placekitten.com/500/200">\n        <div class="card-block">\n          <h4 class="card-title">University Name</h4>\n          <h6 class="card-subtitle text-muted">Support card subtitle</h6>\n          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n          <ul class="list-group list-group-flush">\n            <li class="list-group-item">Cras justo odio</li>\n            <li class="list-group-item">Dapibus ac facilisis in</li>\n            <li class="list-group-item">Vestibulum at eros</li>\n          </ul>\n        </div>\n        <div class="card-block">\n          <a href="#" class="card-link">Card link</a>\n          <a href="#" class="card-link">School link</a>\n        </div>\n        <div class="card-block">\n          <a href="#" class="btn btn-primary">Save</a>\n        </div>\n        <div class="card-block">\n          <a href="#" class="btn btn-primary">Get more info</a>\n        </div>\n\n        <div class="card-footer text-muted">\n          This is a card footer\n        </div>\n      </div>\n    </div> --> </div> <!-- \n  <div class="saved grid">\n     <div>\n  <H1>Grid test unlikely to work </H1>\n<div id="grid1" ui-grid="{ data: schoolsFound.results.school.name }" class="grid"></div>  \n</div>\n      <div>\n  <H1>Grid test unlikely to work 2 </H1>\n<div id="grid1" ui-grid="{ data: schoolsFind.results.school.name }" class="grid"></div>  \n</div> --> ')}]);