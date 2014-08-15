
var mainpath = '';

angular.module('myApp', [
	'ui.router',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers',
	'ngCookies',
	'ui.bootstrap'
]).config(['$stateProvider' , '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/view1");

	$stateProvider.state('view1', {
		url: "/view1",
		template: "Start view"
	})
	.state('view2', {
		url: "/view2",
		templateUrl: mainpath + "partials/partial2.html"
	});
}])
;
