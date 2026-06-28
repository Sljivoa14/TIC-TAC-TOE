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
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            const x = i * cellSize;
            const y = j * cellSize;
            ctx.strokeRect(x, y, cellSize, cellSize);

            if( canvasBoard[i][j] === ""){
                ctx.font = "70px arial";
                ctx.textAlign = "centar";            
                ctx.fillText(canvasBoard[i][j], x + 30, y +70)};
        }
    }
}

function handleClick(event){
    const x = Math.floor(event.offsetX / cellSize);
    const y = Math.floor(event.offsetY / cellSize);


}

function checkWinner(){

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