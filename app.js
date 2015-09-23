var app = angular.module('bookFaceApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'PostController',
		templateUrl: 'postView.html'
	});
	$routeProvider.when('/chatView',
	{
		controller: 'ChatController',
		templateUrl: 'chatView'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/404',
		controller: 'WhoopsController',
		templateUrl: '404' 
	});
  });

app.controller('PostController', function($scope, postService) {
	$scope.posts = postService.posts;
	$scope.addPost = function() {
		console.log("test");
		postService.addPost({image: $scope.url, caption: $scope.caption});
	}
});

app.controller('ChatController', function() {
	console.log("blarp");
});

app.controller('WhoopsController', function() {

});

