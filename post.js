var app = angular.module('bookFaceApp');

app.directive("post", function(){
	return {
		restrict: "E",
		template: "<img src={{post.image}}><p>{{post.caption}}</p>",
		replace: false
	};
});