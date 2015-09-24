var app = angular.module('bookFaceApp');

app.directive("post", function(){
	return {
		restrict: "E",
		templateUrl: "post.html",
		replace: false
	};
});