$(document).ready(function () {
	if (mySettings.hasGameStarted) {
		startFrom.disabled = true;
		amountToWin.disabled = true;
	}
	if (pName.value === "") {
		addPlayerButton.disabled = true;
	}
});

// BUTTONS
const btn501 = document.querySelector("#button501");
const btn301 = document.querySelector("#button301");
const resetBtn = document.querySelector("#resetButton");
const addPlayerButton = document.querySelector("#addPlayerButton");

// DISPLAY BOXES
const startFrom = document.querySelector("#startFrom");
const amountToWin = document.querySelector("#amountToWin");
const bestOfTitle = document.querySelector("#bestOfTitle");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

// CONTAINERS
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
let pName = document.querySelector("#playerNameOne");
let pNameTwo = document.querySelector("#playerNameTwo");
let playerName;
// GAME SETTINGS OBJECT
let mySettings = {
	scoreP1: 0,
	scoreP2: 0,
	hasGameStarted: false,
	gameSetup: {
		startFrom: 0,
		amountToWin: 0,
	},
};

// EVENT LISTENERS

addPlayerButton.addEventListener("click", addAPlayer);

amountToWin.addEventListener("change", amountToWinFunc);

startFrom.addEventListener("change", startFromFunc);

pName.addEventListener("change", function () {
	playerName = this.value;
	console.log(playerName);
	addPlayerButton.disabled = false;
});

resetBtn.addEventListener("click", reset);

// FUNCTIONS
function startGame() {
	if (mySettings.hasGameStarted) {
		alert("Game has already started!");
	} else if (mySettings.gameSetup.startFrom !== 0 && mySettings.gameSetup.amountToWin !== 0) {
		alert("This game is already running");
	} else {
		p1Display.innerHTML = mySettings.gameSetup.startFrom;
		p2Display.innerHTML = mySettings.gameSetup.startFrom;
	}
}

function addAPlayer() {
	if (pName.value !== "") {
		p1Score.setAttribute("placeholder", playerName);
		pName.value = "";
		addPlayerButton.disabled = true;
		console.log(playerName);
	} else {
		alert("Voer eerst een naam in!");
	}
}

function reset() {
	mySettings.scoreP1 = 0;
	mySettings.scoreP2 = 0;
	mySettings.hasGameStarted = false;
	mySettings.gameSetup.amountToWin = 0;
	mySettings.gameSetup.startFrom = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	bestOfTitle.textContent = "Best of ?";
}

function amountToWinFunc() {
	if (mySettings.gameSetup.amountToWin === 0) {
		mySettings.gameSetup.amountToWin = this.value;
		bestOfTitle.textContent = mySettings.gameSetup.amountToWin;
	} else {
		alert("Graag het spel eerst resetten!");
	}
}

function startFromFunc() {
	if (mySettings.gameSetup.startFrom === 0) {
		mySettings.gameSetup.startFrom = this.value;
		p1Display.textContent = mySettings.gameSetup.startFrom;
		p2Display.textContent = mySettings.gameSetup.startFrom;
	} else {
		alert("Graag het spel eerst resetten!");
	}
}
