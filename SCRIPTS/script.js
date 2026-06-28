const canvas = document.getElementById('canvas');
const ctx = canvas.getConext('2d');
const statusTxt = document.getElementById('status');
const resetBtn = document.getElementById('reset');

let canvasBoard =[
    ["", "", ""],
    ["", "", ""]
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


}

function checkWinner(){
    const diffCombos = [
        
    ]

}
function resetGame(){
    canvasBoard = [
    "", "", "",
    "", "", "",
    "", "", ""

]
currentPlayer = "X";
draw();
}

draw();