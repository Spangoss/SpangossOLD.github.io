var app = angular.module('tradeSkills', []);
app.controller('tradeSkillsCntrl', function ($scope) {

	$scope.submitSkills = function () {
		var inputArray = $scope.tradeSkillsInput.split('\n');
		$scope.tradeSkills = [];
		for (var i = 0; i < inputArray.length; i++) {
			var skill = {
				name: inputArray[i].substr(0, inputArray[i].indexOf('(')),
				id: inputArray[i].split('=').pop().split(')')[0],
				category: inputArray[i].substr(0, inputArray[i].indexOf('-'))
			};
			$scope.tradeSkills.push(skill);
		}
	}

});
