const canvas = document.getElementById('canvas');
const ctx = canvas.getConext('2d');
const statusTxt = document.getElementById('status');
const resetBtn = document.getElementById('reset');

let canvasBoard =[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

canvasBoard.width = 300;
canvasBoard.height = 300;
const cellSize = 100;

let currentPlayer = "X";
let gameOver = false;
canvas.addEventListener('click', handleClick);
resetBtn.addEventListener('click', resetGame);

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#332";

    for(let row = 0; row < 3; row++){
        for(let col = 0; col < 3; col++){
            const x = row * cellSize;
            const y = col * cellSize;
            ctx.strokeRect(row, col, cellSize, cellSize);
            
            const val = canvasBoard[row][col];
            if( val !== ""){
                ctx.font = "70px arial";
                ctx.textAlign = "centar";        
                ctx.fillStyle = '#000';
                ctx.textBaseline = 'middle';    
                ctx.fillText(canvasBoard[i][j], x + 30, y +70)};
        }
    }
}

function handleClick(event){
    if(gameOver){
        return;
    }

    const x = Math.floor(event.offsetX / cellSize);
    const y = Math.floor(event.offsetY / cellSize);

    const winner = checkWinner();
    if (winner) {
        statusText.textContent = `Player ${winner} wins!`;
        gameOver = true;
        return;
    }

    if (isBoardFull()) {
        statusText.textContent = "It's a tie!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`;


}

function checkWinner(){
    const diffCombos = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
    for (const combo of diffCombos){

    }

}

function isBoardFull(){
    return canvasBoard.every(row => row.every(cell => cell !== ''));
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
statusTxt.textContent = `its ${currentPlayer}'s turn`;
draw();