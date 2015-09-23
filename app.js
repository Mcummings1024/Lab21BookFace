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

app.controller('ShellController', function($scope, $http) {
	$scope.weatherApp =32;
	$scope.test = "hello";
	$http.get('http://api.wunderground.com/api/ce6edafbce457588/conditions/q/MI/Detroit.json')
		.success(function(data) {
			console.log(data); 
			$scope.weatherApp = data;
			console.log($scope.weatherApp);
			console.log(data.current_observation.temp_f);
		})
		.error(function(data, status) {
			console.log("There was an error or something: Code " + status);
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
	$scope.msgs = postService.getMsgs();
	$scope.addMsg = function() {
		postService.addMsg($scope.msg);
		$scope.resetForm();
	}
	$scope.resetForm = function() {
		$scope.msg = "";
		$scope.msgForm.$setPristine();
	}
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