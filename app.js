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

app.controller('PostController', function($scope) {
	$scope.posts = [
	    {
	      image:"http://dc435.4shared.com/img/jMdBfbDe/s3/1334fc01420/cute-cat", 
	      caption: "cute cat"},
	    {
	      image:"http://easthillsanimalclinic.com/wp-content/gallery/home-page-photos/happy-cat-01.jpg",
	      caption:"cuter cat"
	    },
	    {
	      image:"http://www.forumspile.com/Understand-Cat_(Melon).jpg", 
	      caption:"cutest cat"
	    }
  	];
	$scope.addPost = function() {
		console.log("test");
		$scope.posts.push({image: $scope.url, caption: $scope.caption});
	}
});

app.controller('ChatController', function() {
	console.log("blarp");
});

app.controller('WhoopsController', function() {

});

