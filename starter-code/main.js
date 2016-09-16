console.log("JS file is connected to HTML! Woo!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var gameBoard = document.getElementById("game-board");

var createBoard = function() 
{
  for (var i=0; i < cards.length; i++)
  {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.setAttribute("data-card", cards[i]);
    newCard.addEventListener("click", isTwoCards);
    
    gameBoard.appendChild(newCard);
    gameBoard.appendChild(newCard);
  }
}

var isTwoCards = function()
{
  cardsInPlay.push(this.getAttribute("data-card"));
  console.log(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='assets/king.jpg'>";
  } else {
    this.innerHTML = "<img src='assets/queen.jpg'>";
  }

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);

    cardsInPlay = [];
  }
}

var isMatch = function(cards) 
{ 
  // check if two cards are a match
  if (cards[0] === cards[1]) {
    alert("Cards are a match!");
  } else {
    alert("Cards do not match!");
  }
  // resetBoard();
}

// var board = document.getElementsByClassName('board')

// var resetBoard = function()
// {
//   for (var i=0; i < board.length; i++)
//   {
//     board[i].innerHTML = ""
//   }
// }

createBoard();
