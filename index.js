// // console.log("Test...");

// let currentTurn = "X";

// let xScore = 0,
// 	tScore = 0,
// 	oScore = 0;

// let gameOver = false;

// let wins = [
// 	[0, 1, 2],
// 	[0, 3, 6],
// 	[0, 4, 8],
// 	[1, 4, 7],
// 	[2, 4, 6],
// 	[2, 5, 8],
// 	[3, 4, 5],
// 	[6, 7, 8],
// ];

// let filledBoxes = 0;

// const changeTurn = () => {
// 	return currentTurn === "X" ? "O" : "X";
// };

// // Functions to check the winner
// const checkWinner = () => {
// 	let boxSymbol = document.getElementsByClassName("box-symbol");

// 	wins.forEach((e) => {
// 		if (
// 			boxSymbol[e[0]].innerText === boxSymbol[e[1]].innerText &&
// 			boxSymbol[e[1]].innerText === boxSymbol[e[2]].innerText &&
// 			boxSymbol[e[0]].innerText !== "" &&
// 			gameOver === false
// 		) {
// 			if (boxSymbol[e[0]].innerText === "X") {
// 				xScore++;
// 			} else if (boxSymbol[e[0]].innerText === "O") {
// 				oScore++;
// 			} else if (filledBoxes === 9) tScore++;
// 			gameOver = true;
// 		}
// 		document.querySelector(".x-score").innerText = xScore;
// 		document.querySelector(".t-score").innerText = tScore;
// 		document.querySelector(".o-score").innerText = oScore;
// 	});
// };

// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach((element) => {
// 	let boxSymbol = element.querySelector(".box-symbol");
// 	element.addEventListener("click", () => {
// 		if (boxSymbol.innerText === "") {
// 			boxSymbol.innerText = currentTurn;
// 			currentTurn = changeTurn();
// 			filledBoxes++;
// 		}
// 		checkWinner();
// 		if (!gameOver) {
// 			document.querySelector(".game-turn").innerText = currentTurn;
// 		}
// 	});
// });

let currentTurn = "X";
let gameOver = false;

let wins = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 4, 6],
	[2, 5, 8],
	[3, 4, 5],
	[6, 7, 8],
];

let xScore = 0;
let oScore = 0;

const changeTurn = () => {
	return currentTurn === "X" ? "O" : "X";
};

const checkWin = () => {
	let boxes = document.getElementsByClassName("box-symbol");
	wins.forEach((combination) => {
		if (
			boxes[combination[0]].innerText === boxes[combination[1]].innerText &&
			boxes[combination[1]].innerText === boxes[combination[2]].innerText &&
			boxes[combination[0]].innerText !== ""
		) {
			gameOver = true;

			// for (var i = 0; i < 3; i++) {
			// 	boxes[combination[i]].parentNode.style.cssText =
			// 		"\
			// 	transform: scale(1.1); \
			// 	transition: 1s; \
			// 	border: 2px solid red; \
			// 	";

			// 	if (boxes[combination[i]].innerText === "X") {
			// 		boxes[combination[i]].parentNode.style.backgroundColor = "#00b2c6";
			// 	} else {
			// 		boxes[combination[i]].parentNode.style.backgroundColor = "#ff581a";
			// 	}
			// }

			if (boxes[combination[0]].innerText === "X") {
				xScore++;
			} else if (boxes[combination[0]].innerText === "O") {
				oScore++;
			}
		}

		document.querySelector(".x-score").innerText = xScore;
		document.querySelector(".o-score").innerText = oScore;
	});
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
	let boxSymbol = element.querySelector(".box-symbol");
	element.addEventListener("click", () => {
		if (boxSymbol.innerText === "" && gameOver === false) {
			boxSymbol.innerText = currentTurn;
			currentTurn = changeTurn();

			checkWin();

			let turnDisplay = document.querySelector(".game-turn");
			turnDisplay.innerText = currentTurn;
		}
	});
});

let ResetButton = document.querySelector(".reset");
ResetButton.addEventListener("click", () => {
	let symbolBox = document.getElementsByClassName("box-symbol");
	Array.from(symbolBox).forEach((Symbol) => {
		Symbol.innerText = "";
	});

	let turnDisplay = document.querySelector(".game-turn");
	turnDisplay.innerText = "X";

	gameOver = false;
});
