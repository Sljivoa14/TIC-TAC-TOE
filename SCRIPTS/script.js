const canvas = document.getElementById('canvas');
const ctx = canvas.getConext('2d');

const canvasEmpty = [
    "", "", "",
    "", "", "",
    "", "", ""

]

const cellSize = 100;

let currentPlayer = "X";
canvas.addEventListener('click', handleClick);

function handleClick(event){
    const x = Math.floor(event.offsetX / cellSize);
    const y = Math.floor(event.offsetY / cellSize);

    
}