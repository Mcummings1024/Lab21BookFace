var app = angular.module('bookFaceApp');

app.directive("weather", function(){
	return {
		restrict: "E",
		template: "<div><img class='icon' src='{{weatherApp.current_observation.icon_url}}'><p>Location: {{weatherApp.current_observation.display_location.city}}</p><p>Current Temp: {{weatherApp.current_observation.temp_f}}</p></div>",
		replace: true
	};
});