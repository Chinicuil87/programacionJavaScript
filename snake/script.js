const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

const boardSize = 10;
const gameSpeed = 100;
const squareTypes ={
    empySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};

const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
};

let snake;
let score;
let direction;
let boardSqueares;
let empySquare;
let moveInterval;

const setGame = () =>{
    snake= ['00', '01', '02', '03'];
    score= snake.length;
    direction = 'ArrowRight';
}

const startGame = () => {
    setGame()
}

startButton.addEventListener('click', startGame);

