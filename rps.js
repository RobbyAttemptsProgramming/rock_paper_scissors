/*
 * Created by Robert Hamby, 2019
 * Part of TheOdinProject's rock paper scissors exercise within Web Development 101
 */

function getComputerSelection() {
	const plays = ["rock", "paper", "scissors"];
	const maxRoll = 3;
	const minRoll = 0;

	randomIndex = Math.floor(Math.random() * (maxRoll - minRoll));

	return plays[randomIndex];
}

function getPlayerSelection() {
	input = prompt("Please choose rock, paper, or scissors");

	return input.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
	let outcome = ""

	if (playerSelection === computerSelection) {
		outcome = "tie";
	}
	else if (playerSelection === "rock") {
		if (computerSelection === "paper") {
			outcome = "lose";		
		}
		else {
			outcome = "win";
		}
	}	
	else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			outcome = "win";
		}
		else {
			outcome = "lose";
		}
	}
	else {
		if (computerSelection === "rock") {
			outcome = "lose";
		}
		else {
			outcome = "win";
		}
	}

	return outcome;
}

function printRoundDescription(outcome, playerSelection, computerSelection) {
	let description = "";

	switch (outcome) {
		case "win": 
			description += "You win! " + capitalize(playerSelection) + " beats " + computerSelection + "!";
			break;
		case "lose":
			description += "You lose! " + capitalize(computerSelection) + " beats " + playerSelection + "!";
			break;
		case "tie":
			description += "It's a tie! " + capitalize(playerSelection) + " and " + computerSelection + " are the same!";
			break;
	}

	return description;
}

function printScore(player, computer, ties) {
	return "Current Score\nYou: " + player + "\nComputer: " + computer + "\nTies: " + ties;
}

function capitalize(word) {
	let capitalized = word[0].toUpperCase() + word.substring(1, word.length)

	return capitalized;
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	let ties = 0;

	for (let i = 0; i < 5; i++) {
		const playerSelection = getPlayerSelection();
		const computerSelection = getComputerSelection();

		let outcome = playRound(playerSelection, computerSelection);

		switch(outcome) {
			case "win":
				playerScore++;
				break;
			case "lose":
				computerScore++;
				break;
			case "tie":
				ties++;
				break;
		}

		console.log(printRoundDescription(outcome, playerSelection, computerSelection))
		console.log(printScore(playerScore, computerScore, ties))
	}
}

// Starts the game() function once the HTML on the page has loaded
// This just allows the h2 instruction to be seen before prompt() fires off
window.onload = function(){
	game();
}
