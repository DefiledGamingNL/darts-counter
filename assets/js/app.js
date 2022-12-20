$(document).ready(function () {
	if (myConfig.hasGameStarted) {
		startFrom.disabled = true;
		amountToWin.disabled = true;
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
amountToWin.addEventListener("change", function () {
	if (mySettings.gameSetup.amountToWin === 0) {
		mySettings.gameSetup.amountToWin = this.value;
		bestOfTitle.textContent = mySettings.gameSetup.amountToWin;
	} else {
		alert("Graag het spel eerst resetten!");
	}
});

startFrom.addEventListener("change", function () {
	if (mySettings.gameSetup.startFrom === 0) {
		mySettings.gameSetup.startFrom = this.value;
		p1Display.textContent = mySettings.gameSetup.startFrom;
		p2Display.textContent = mySettings.gameSetup.startFrom;
	} else {
		alert("Graag het spel eerst resetten!");
	}
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

function reset() {
	mySettings.scoreP1 = 0;
	mySettings.scoreP2 = 0;
	mySettings.hasGameStarted = false;
	mySettings.gameSetup.amountToWin = 0;
	mySettings.gameSetup.startFrom = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	bestOfTitle.textContent = "Best of ???";
}
