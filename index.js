
// IF PAGE IS REFRESHED >> CALL rollDice() FUNCTION
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice() {

// Dice Roll RNG
var randomNumber1 = Math.floor(Math.random()*6)+1; // Player 1
var randomNumber2 = Math.floor(Math.random()*6)+1; // Player 2

// Changing Image After Dice Roll RNG Results
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); // Player 1
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); // Player 2

// PLAYER 1 vs PLAYER 2 : RESULTS
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏳️ Player 1 Wins! 🏳️";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🏴 Player 2 Wins! 🏴";
} else {
    document.querySelector("h1").innerHTML = "🎌 Draw! 🎌";
}

}
