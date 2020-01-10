# Tic Tac Toe

https://cmxgloria.github.io/TIC-TAC-TOE/

How to Play
Development
Problems
Challenges
Lessons

## how to play my game

The objective is to get 3 of the same symbole in a row. Each player plays as either "x" or "o", and the first player to get 3 in a row wins the match.X's always plays first.If X doesn't win, X can keep playing first next round, otherwise, O plays first next time.

## Development
use the HTML, CSS and JavaScript

### html
created 9 divs with class name square for 9 boards

### css
use display flex and flex-wrap to design the 9 blocks, define 3 square(height and width)*3 +2*board(2 sides heights) = flex wrap's total height&width

### javaScript
mainly define 4 functions, handleTurn function, getWinner function , render function and reset function
define some variable I need

handleTurn function 
call getWinner() and assign its output to the win variable
find index of square in squares array to match event.target
render X and O to take turn

getWinner function 
loop through winGame and check if player win on the board
if 3 select match and handle X or O match row or column or diagonal in any WinGame element then win the game

render function
render the message when you are doing handleTurn() or getWinner()

reset function
point each position in the JS array will correspond to a square on the HTML board and reset the game


## Problem and challenge
css: how to make 3 rows and 3 columns in one container, use display-flex and felx-wrap
JavaScript: how to render X or O on the board, find the same event.target for each board when I click
how to handle the winner, loop through winGame and use && operator to make sure 3 of the same symbole in a row,column or diagona match at the same time then win the game

## Lessons
understand more flex and flex-wrap css
learned basic struture of the whole project, break into different functions to handle different event
understand more the connection in between the function
understand more about how to use document querySelector and event.target in JavaScript
learned new thing about Array.from method and conditional chains

