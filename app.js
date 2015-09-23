var app = angular.module('bookFaceApp', ['ngRoute','ngAnimate', 'ui.bootstrap']);

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
	console.log($scope.posts);
	$scope.addPost = function() {
		postService.addPost({image: $scope.url, caption: $scope.caption});
	}
});

app.controller('ChatController', function() {
	console.log("blarp");
});

app.controller('WhoopsController', function() {

});

app.controller('RatingCtrl', function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];

});