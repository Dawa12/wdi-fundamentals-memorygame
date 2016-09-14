console.log("JS file is connected to HTML! Woo!")

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if (cardOne === cardTwo) {
//   window.alert("You found a match!");
// } else if (cardThree === cardFour) {
//   alert("You found a match!")
// } else {
//   alert ("Sorry, try again.")
// }

var createBoard = function()
{
  var gameBoard = document.getElementById("game-board");

  for (var i=0; i < 4; i++) {
    var newCard = document.createElement("div");
    newCard.className = "card";
    gameBoard.appendChild(newCard);
  }
}

createBoard();














