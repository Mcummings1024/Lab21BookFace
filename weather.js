var app = angular.module('bookFaceApp');

app.directive("weather", function(){
	return {
		restrict: "E",
		template: "<div><p>Location: {{weatherApp.current_observation.display_location.city}}</p><p>Current Temp: {{weatherApp.current_observation.temp_f}}</p></div>",
		replace: true
	};
});