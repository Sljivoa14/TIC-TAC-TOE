// get refrence and connect all
const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
const statusTxt = document.getElementById('status');
const resetBtn = document.getElementById('reset');

//create a 2D array to represent the game board 
let canvasBoard =[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

//set the canvas size and cellSize
/*
canvasBoard.width = 300;
canvasBoard.height = 300;*/
const cellSize = 100;

//set the current player to X and gameOver to false bc the game didnt end and will be used later
let currentPlayer = "X";
let gameOver = false;

//evntListeneers for click and reset button
canvas.addEventListener('click', handleClick);
resetBtn.addEventListener('click', resetGame);

//function draw works in the following way: it clears the canvas, sets the line width and stroke style, then loops through each cell in the 3x3 grid to draw the grid lines and any X or O marks that have been placed. It uses the canvas context to draw rectangles for the grid and text for the player marks.
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#332";

    for(let row = 0; row < 3; row++){
        for(let col = 0; col < 3; col++){
            const x = col * cellSize;
            const y = row * cellSize;
            ctx.strokeRect(x, y, cellSize, cellSize);
            
            const val = canvasBoard[row][col];
            if( val !== ""){
                ctx.font = "70px arial";
                ctx.textAlign = "center";        
                ctx.fillStyle = '#000';
                ctx.textBaseline = 'middle';    
                ctx.fillText(val, x + cellSize/2, y + cellSize/2);
            }
        }
    }
}

function handleClick(event){
    if(gameOver){
        return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left)/ cellSize);
    const y = Math.floor((event.clientY - rect.top) / cellSize);

    // FIXED: Check if click is within bounds
    if (x < 0 || x > 2 || y < 0 || y > 2) {
        return;
    }

    if(canvasBoard[y][x] !== ""){
        return;
    }

    canvasBoard[y][x] =currentPlayer;
    draw();

    const winner = checkWinner();
    if (winner) {
        statusTxt.textContent = `Player ${winner} wins!`;
        gameOver = true;
        return;
    }

    if (isBoardFull()) {
        statusTxt.textContent = "It's a tie!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusTxt.textContent = `Player ${currentPlayer}'s turn`;


}

function checkWinner(){
    const diffCombos = [
        //rows
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        //columns
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        //diagonals
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
    for (const combo of diffCombos){
        const [a, b, c] = combo;
        if (
            canvasBoard[a[0]][a[1]] === "" &&
            canvasBoard[b[0]][b[1]] === currentPlayer &&
            canvasBoard[c[0]][c[1]] === currentPlayer
        ) {

            /*const valA = canvasBoard[a[0]][a[1]];
            const valB = canvasBoard[b[0]][b[1]];
            const valC = canvasBoard[c[0]][c[1]];
        
        if (valA !== "" && valA === valB && valA === valC) {
            return valA;  // Return the winner (X or O)
        }*/
            return canvasBoard[a[0]][a[1]];  // Return the winner (X or O)
        }
    }
    return null; // no winner

}

function isBoardFull(){
    // FIXED: Check all cells in the 2D array
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j ++){
            if(canvasBoard[i][j]===""){
                return false;
            }
        }
    }
    return true;
}
function resetGame(){
    canvasBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    currentPlayer = "X";
    gameOver = false;
    statusTxt.textContent = `its ${currentPlayer}'s turn`;
    draw();
}

//initialize game
statusTxt.textContent = `its ${currentPlayer}'s turn`;
draw();

//will add more