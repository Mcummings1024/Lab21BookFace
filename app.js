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
	$scope.posts = postService.getPosts();
	$scope.post = {
		image: "",
		caption: ""
	};

	var templatePost = angular.copy($scope.post);

	$scope.addPost = function() {
		postService.addPost($scope.post);
		$scope.resetForm();
	}
	$scope.resetForm = function() {
		$scope.post = angular.copy(templatePost);
		$scope.postForm.$setPristine();
	}
});

app.controller('ChatController', function($scope, postService) {
	$scope.users = postService.getUsers();

});

app.controller('WhoopsController', function() {

});

