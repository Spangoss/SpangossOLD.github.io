var app = angular.module('tradeSkills', []);
app.controller('tradeSkillsCntrl', function ($scope) {

	$scope.submitSkills = function () {
		var inputArray = $scope.tradeSkillsInput.split('\n');
		$scope.tradeSkills = [];
		var categories = [];
		for (var i = 0; i < inputArray.length; i++) {
			var category = inputArray[i].substr(0, inputArray[i].indexOf('-'));
			if (category == '') {
				category = 'Miscelaneous';
			}
			var skill = {
				name: inputArray[i].substr(0, inputArray[i].indexOf('(')),
				id: inputArray[i].split('=').pop().split(')')[0],
				category: category
			};
			$scope.tradeSkills.push(skill);
			categories.push(skill.category);
		}

		$scope.categories = [...new Set(categories)];
	}

});
