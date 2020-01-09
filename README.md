## Tic Tac Toe
play my game

https://cmxgloria.github.io/TIC-TAC-TOE/

## html
created 9 divs with class name square for t9 boards

## css
use display flex and flex-wrap to design the 9 blocks, define 3 square(height and width)*3 +2*board(2 sides heights) = flex wrap's total height&width

## javaScript
mainly define 4 functions, handleTurn function, getWinner function , render function and init function
define some variable we needs

handleTurn function 
call getWinner() and assign its output to the win variable
find index of square in squares array to match event.target
render X and O to take turn

getWinner function 
loop through winGame and check if player win on the board
if 3 select match and handle X or O match row or column or diagonal in any WinGame element then win the game

render function
render the message when you are doing handleTurn() or getWinner()

init function
point each position in the JS array will correspond to a square on the HTML board and reset the game
