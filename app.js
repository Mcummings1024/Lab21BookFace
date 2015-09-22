var app = angular.module('bookFaceApp', ['ngRoute']);

app.config(function($scope) {
	$routeProvider.when('/',
	{
		controller: 'PostController',
		templateUrl: 'postView'
	});
	$routeProvider.when('/formatView',
	{
		controller: 'FormatController',
		templateUrl: 'chatView'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/404',
		controller: 'WhoopsController',
		templateUrl: '404' 
	});
});

app.controller = ('NavController', function() {

});

app.controller = ('PostController', function() {

});

app.controller = ('ChatController', function() {

});

app.controller = ('WhoopsController', function() {
	
});

