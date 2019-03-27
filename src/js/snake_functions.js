var snake;
var scl =20;
var food;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    frameRate(10);
    food =createVector()
}

function draw() {
    background(51);
    snake.update();
    snake.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    }
}


