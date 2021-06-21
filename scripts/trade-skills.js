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

		$scope.tradeSkillsArray = JSON.stringify($scope.tradeSkills);
	}


	$scope.tradeskillsStored = [{
		"name": "Enchant Ring - Healing Power",
		"id": "27926",
		"category": "Enchant Ring "
	}, {
		"name": "Enchant Bracer - Spellpower",
		"id": "27917",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Gloves - Major Spellpower",
		"id": "33997",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Spell Strike",
		"id": "33994",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Ring - Spellpower",
		"id": "27924",
		"category": "Enchant Ring "
	}, {
		"name": "Runed Eternium Rod",
		"id": "32667",
		"category": "Miscelaneous"
	}, {
		"name": "Enchant Chest - Exceptional Stats",
		"id": "27960",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Gloves - Major Healing",
		"id": "33999",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Major Strength",
		"id": "33995",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Weapon - Major Healing",
		"id": "34010",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Potency",
		"id": "27972",
		"category": "Enchant Weapon "
	}, {
		"name": "Runed Adamantite Rod",
		"id": "32665",
		"category": "Miscelaneous"
	}, {
		"name": "Brilliant Mana Oil",
		"id": "25130",
		"category": "Miscelaneous"
	}, {
		"name": "Brilliant Wizard Oil",
		"id": "25129",
		"category": "Miscelaneous"
	}, {
		"name": "Enchant 2H Weapon - Agility",
		"id": "27837",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Greater Impact",
		"id": "13937",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Impact",
		"id": "13695",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Lesser Impact",
		"id": "13529",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Lesser Intellect",
		"id": "7793",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Lesser Spirit",
		"id": "13380",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Major Intellect",
		"id": "20036",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Major Spirit",
		"id": "20035",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Minor Impact",
		"id": "7745",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Superior Impact",
		"id": "20030",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant Boots - Agility",
		"id": "13935",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Greater Agility",
		"id": "20023",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Greater Stamina",
		"id": "20020",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Lesser Agility",
		"id": "13637",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Lesser Spirit",
		"id": "13687",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Lesser Stamina",
		"id": "13644",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Minor Agility",
		"id": "7867",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Minor Speed",
		"id": "13890",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Minor Stamina",
		"id": "7863",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Spirit",
		"id": "20024",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Stamina",
		"id": "13836",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Bracer - Assault",
		"id": "34002",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Brawn",
		"id": "27899",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Deflection",
		"id": "13931",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Greater Intellect",
		"id": "20008",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Greater Spirit",
		"id": "13846",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Greater Stamina",
		"id": "13945",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Greater Strength",
		"id": "13939",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Healing Power",
		"id": "23802",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Intellect",
		"id": "13822",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Deflection",
		"id": "13646",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Intellect",
		"id": "13622",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Spirit",
		"id": "7859",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Stamina",
		"id": "13501",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Strength",
		"id": "13536",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Major Intellect",
		"id": "34001",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Mana Regeneration",
		"id": "23801",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Agility",
		"id": "7779",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Deflection",
		"id": "7428",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Health",
		"id": "7418",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Spirit",
		"id": "7766",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Stamina",
		"id": "7457",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Strength",
		"id": "7782",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Spirit",
		"id": "13642",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Stamina",
		"id": "13648",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Stats",
		"id": "27905",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Strength",
		"id": "13661",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Superior Healing",
		"id": "27911",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Superior Spirit",
		"id": "20009",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Superior Stamina",
		"id": "20011",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Superior Strength",
		"id": "20010",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Chest - Exceptional Health",
		"id": "27957",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Greater Health",
		"id": "13640",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Greater Mana",
		"id": "13663",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Greater Stats",
		"id": "20025",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Health",
		"id": "7857",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Lesser Absorption",
		"id": "13538",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Lesser Health",
		"id": "7748",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Lesser Mana",
		"id": "7776",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Lesser Stats",
		"id": "13700",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Major Health",
		"id": "20026",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Major Mana",
		"id": "20028",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Major Spirit",
		"id": "33990",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Mana",
		"id": "13607",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Minor Absorption",
		"id": "7426",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Minor Health",
		"id": "7420",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Minor Mana",
		"id": "7443",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Minor Stats",
		"id": "13626",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Restore Mana Prime",
		"id": "33991",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Stats",
		"id": "13941",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Superior Health",
		"id": "13858",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Superior Mana",
		"id": "13917",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Cloak - Defense",
		"id": "13635",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Dodge",
		"id": "25086",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Fire Resistance",
		"id": "13657",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Agility",
		"id": "34004",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Defense",
		"id": "13746",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Fire Resistance",
		"id": "25081",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Nature Resistance",
		"id": "25082",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Resistance",
		"id": "20014",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Lesser Agility",
		"id": "13882",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Lesser Fire Resistance",
		"id": "7861",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Lesser Protection",
		"id": "13421",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Lesser Shadow Resistance",
		"id": "13522",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Major Armor",
		"id": "27961",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Minor Agility",
		"id": "13419",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Minor Protection",
		"id": "7771",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Minor Resistance",
		"id": "7454",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Resistance",
		"id": "13794",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Spell Penetration",
		"id": "34003",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Stealth",
		"id": "25083",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Superior Defense",
		"id": "20015",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Gloves - Advanced Herbalism",
		"id": "13868",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Advanced Mining",
		"id": "13841",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Agility",
		"id": "13815",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Assault",
		"id": "33996",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Blasting",
		"id": "33993",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Fire Power",
		"id": "25078",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Fishing",
		"id": "13620",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Frost Power",
		"id": "25074",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Greater Agility",
		"id": "20012",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Greater Strength",
		"id": "20013",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Healing Power",
		"id": "25079",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Herbalism",
		"id": "13617",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Mining",
		"id": "13612",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Minor Haste",
		"id": "13948",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Riding Skill",
		"id": "13947",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Shadow Power",
		"id": "25073",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Skinning",
		"id": "13698",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Strength",
		"id": "13887",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Superior Agility",
		"id": "25080",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Threat",
		"id": "25072",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Shield - Frost Resistance",
		"id": "13933",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Greater Spirit",
		"id": "13905",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Greater Stamina",
		"id": "20017",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Intellect",
		"id": "27945",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Lesser Block",
		"id": "13689",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Lesser Protection",
		"id": "13464",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Lesser Spirit",
		"id": "13485",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Lesser Stamina",
		"id": "13631",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Major Stamina",
		"id": "34009",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Minor Stamina",
		"id": "13378",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Resilience",
		"id": "44383",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Spirit",
		"id": "13659",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Stamina",
		"id": "13817",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Superior Spirit",
		"id": "20016",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Tough Shield",
		"id": "27944",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Weapon - Agility",
		"id": "23800",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Crusader",
		"id": "20034",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Demonslaying",
		"id": "13915",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Fiery Weapon",
		"id": "13898",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Greater Striking",
		"id": "13943",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Healing Power",
		"id": "22750",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Icy Chill",
		"id": "20029",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Lesser Beastslayer",
		"id": "13653",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Lesser Elemental Slayer",
		"id": "13655",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Lesser Striking",
		"id": "13503",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Lifestealing",
		"id": "20032",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Mighty Intellect",
		"id": "23804",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Mighty Spirit",
		"id": "23803",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Minor Beastslayer",
		"id": "7786",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Minor Striking",
		"id": "7788",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Spell Power",
		"id": "22749",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Strength",
		"id": "23799",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Striking",
		"id": "13693",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Superior Striking",
		"id": "20031",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Unholy Weapon",
		"id": "20033",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Winter's Might",
		"id": "21931",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchanted Leather",
		"id": "17181",
		"category": "Miscelaneous"
	}, {
		"name": "Enchanted Thorium",
		"id": "17180",
		"category": "Miscelaneous"
	}, {
		"name": "Greater Magic Wand",
		"id": "14807",
		"category": "Miscelaneous"
	}, {
		"name": "Greater Mystic Wand",
		"id": "14810",
		"category": "Miscelaneous"
	}, {
		"name": "Large Prismatic Shard",
		"id": "28022",
		"category": "Miscelaneous"
	}, {
		"name": "Lesser Magic Wand",
		"id": "14293",
		"category": "Miscelaneous"
	}, {
		"name": "Lesser Mana Oil",
		"id": "25127",
		"category": "Miscelaneous"
	}, {
		"name": "Lesser Mystic Wand",
		"id": "14809",
		"category": "Miscelaneous"
	}, {
		"name": "Lesser Wizard Oil",
		"id": "25126",
		"category": "Miscelaneous"
	}, {
		"name": "Minor Mana Oil",
		"id": "25125",
		"category": "Miscelaneous"
	}, {
		"name": "Minor Wizard Oil",
		"id": "25124",
		"category": "Miscelaneous"
	}, {
		"name": "Nexus Transformation",
		"id": "42613",
		"category": "Miscelaneous"
	}, {
		"name": "Prismatic Sphere",
		"id": "28027",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Arcanite Rod",
		"id": "20051",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Copper Rod",
		"id": "7421",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Fel Iron Rod",
		"id": "32664",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Golden Rod",
		"id": "13628",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Silver Rod",
		"id": "7795",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Truesilver Rod",
		"id": "13702",
		"category": "Miscelaneous"
	}, {
		"name": "Small Prismatic Shard",
		"id": "42615",
		"category": "Miscelaneous"
	}, {
		"name": "Smoking Heart of the Mountain",
		"id": "15596",
		"category": "Miscelaneous"
	}, {
		"name": "Superior Mana Oil",
		"id": "28016",
		"category": "Miscelaneous"
	}, {
		"name": "Superior Wizard Oil",
		"id": "28019",
		"category": "Miscelaneous"
	}, {
		"name": "Wizard Oil",
		"id": "25128",
		"category": "Miscelaneous"
	}]

});
