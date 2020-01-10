// handleTurn(), getWinner(), render(), reset() to see who win, Win logic,
// 3 (rows) + 3 (columns) + 2 (diagonals) = 8 possible ways to win
let turn = "X";
let board = null;
let win = null;
let winGame = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//find all 9 boards div children using querySelectorAll and use Array.from() to create squares array
const squares = Array.from(document.querySelectorAll("#board div"));
const messages = document.querySelector("h2");

//  handleTurn() function and call getWinner() and assign its output to the win variable
function handleTurn(event) {
  // find index of square in squares array to match event.target
  let indexSquare = squares.findIndex(function(square) {
    return square === event.target;
  });
  //render that turn on board
  board[indexSquare] = turn;
  turn = turn === "X" ? "O" : "X";
  event.target.textContent = turn;
  win = getWinner();
  render();
  document.querySelector("#board").style.backgroundColor = "lightblue";
}
document.querySelector("#board").addEventListener("click", handleTurn);

//use getWinner function to loop through winGame and check if player win on the board
function getWinner() {
  let winner = null;
  // loop through winGame, if 3 select match then win
  winGame.forEach(function(element) {
    //handle X or O match row or column or diagonal in any WinGame element then win the game
    if (
      board[element[0]] &&
      board[element[0]] === board[element[1]] &&
      board[element[0]] === board[element[2]]
    )
      return (winner = board[element[0]]);
  });
  // includes() whether array includes a certain value among its entries,return true n false.
  if (winner) {
    return winner;
  }
  //add board.includes('') to return null, otherwise at the beginning it show no body win before we get someone win
  else if (board.includes("")) {
    return null;
  } else {
    return "noWinning";
  }
  render();
}

// render h2 messages
function render() {
  //without this we can not reset
  board.forEach(function(marks, index) {
    //set the text content of the square of the same position to the marks on the board.
    squares[index].textContent = marks;
  });
  // Conditional chains, like if,else if, else if, else
  messages.textContent =
    win === "noWinning"
      ? "No body win,please play again."
      : win
      ? `${win} wins the game!`
      : `It's ${turn}'s turn!`;
}
//reset function to point each position in the JS array will correspond to a square on the HTML board
function reset() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn.textContent = turn;
  render();
}
reset();

document.querySelector("#reset-button").addEventListener("click", reset);
