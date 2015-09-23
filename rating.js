var app = angular.module('bookFaceApp');

app.directive("ratings", function(){
	return {
		restrict: "E",
		templateUrl: 'rating.html',
		replace: true
	};
});