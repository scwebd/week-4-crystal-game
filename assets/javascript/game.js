$(document).ready(function() {

	// VARIABLES
	// ---------------------------------------- //
	var gems = {
		blue: {
			name: "Blue",
			value: 0 
		},
		green: {
			name: "Green",
			value: 0 
		},
		red: {
			name: "Red",
			value: 0 
		},
		yellow: {
			name: "Yellow",
			value: 0 
		}		
	}
	var targetScore = 0;
	var currentScore = 0;
	var wins = 0;
	var losses = 0;


	// FUNCTIONS
	// ---------------------------------------- //
	function resetGame() {
		targetScore = setRandom(19, 120);
		currentScore = 0;
		gems.blue.value = setRandom(1, 12);
		gems.green.value = setRandom(1, 12);
		gems.red.value = setRandom(1, 12);
		gems.yellow.value = setRandom(1, 12);

		$("#targetScore").text(targetScore);
		$("#currentScore").text(currentScore);
		$("#wins").text(wins);
		$("#losses").text(losses);
	}

	function setRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;	
	}

	function addToValue(clickedGem) {
		currentScore += clickedGem.value;
		$("#currentScore").text(currentScore);
		checkWin();
	}

	function checkWin() {
		if (currentScore == targetScore) {
			wins++;
			$("#wins").text(wins);
			alert("You win!");
			resetGame();
		} else if (currentScore > targetScore) {
			losses++;
			$("#losses").text(losses);
			alert("You suck!");
			resetGame();
		}
	}

	// WIRING IT UP
	// ---------------------------------------- //
	resetGame();

	$("#blue").on("click", function() {
		addToValue(gems.blue);
	});

	$("#green").on("click", function() {
		addToValue(gems.green);
	});

	$("#red").on("click", function() {
		addToValue(gems.red);
	});

	$("#yellow").on("click", function() {
		addToValue(gems.yellow);
	});
});