var app = angular.module('tradeSkills', []);
app.controller('c', function ($scope) {

	var c = this;

	$scope.goToSkill = function (id) {
		alert('https://tbc.wowhead.com/item=27437/' + id);
	}




	$scope.tradeSkillInput;

	var tradeSkillArray = [];

	$scope.tradeSkills = [{
		name: "Enchant Ring - Healing Power",
		id: 27926,
		category: 'Enchant Ring'
	}, {
		name: "Enchant Bracer - Spellpower",
		id: 27917,
		category: 'Enchant Bracer'
	}, {
		name: "Enchant Gloves - Major Spellpower",
		id: 33997,
		category: 'Enchant Gloves'
	}, {
		name: "Enchant Gloves - Major Thingies",
		id: 111111,
		category: 'Enchant Gloves'
	}];



	/*for (var i = 0; i < tradeSkills.length; i++) {
		var skillObj = {
			skillObj.name = '',
			skillObj.id = '',
			skillObj.category = ''
		}

		tradeskills.push(skillObj);


	} */



});
