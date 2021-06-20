var app = angular.module('tradeSkills', []);
app.controller('tradeSkillsCntrl', function ($scope) {


	$scope.submitSkills = function () {
		alert('Hello');
		var inputArray = $scope.tradeSkillsInput.split('\n');
		$scope.data.skillsArray = [];

		for (var i = 0; i < inputArray.length; i++) {
			var skill = {
				name: inputArray[i].substr(0, inputArray[i].indexOf('(')),
				id: inputArray[i].split('=').pop().split(')')[0],
				category: inputArray[i].substr(0, inputArray[i].indexOf('-'))
			};
			$scope.data.skillsArray.push(skill);
		}
	}


});
