var app = angular.module('bookFaceApp');

app.directive("post", function(){
	return {
		restrict: "E",
		template: "<div class='post'><img src={{post.image}}><p>{{post.caption}}</p><ratings></ratings></div>",
		replace: false
	};
});