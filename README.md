
# TIC-TAC-TOE
a tic tac toe game using HTML, CSS and JS

-------------------------------------------------------------
## JavaScript
canvas and ctx

1. ctx & canvasBoard
canvas is the drawing area.
ctx is the tool used to draw lines and text.
canvasBoard

2. canvasBoard
This is the game board in code.
It is a 3x3 array with empty strings "" for empty cells.
currentPlayer

3. let currentPlayer = "X";
Starts as 'X'.
After each valid move, it switches to 'O' and back.
draw()

4. Draw();
Draws the 3x3 grid.
Draws X or O in the correct cell.

5. handleClick()
Runs when you click the board.
Calculates which cell you clicked.
Places the current player's symbol if the cell is empty.
Checks for win or tie.
Switches turn.
checkWinner()

6. checkWinner();
Checks all winning combinations:
- 3 rows
- 3 columns
- 2 diagonals
Returns 'X', 'O', or null if no one has won.
isBoardFull()

7. isBoardFull();
Detects when every cell is filled.
If full and no winner, it becomes a tie.
resetGame()

8. resetGame();
Clears the board.
Sets the turn back to X.
Updates the screen.