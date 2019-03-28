var snake;
var scl = 20;
var food;

var snake = document.querySelector('#defaultCanvas0');
var cont = document.getElementsByClassName('container');
$(cont).append(canvas);
function setup() {
    createCanvas(800, 500);
    snake = new Snake();
    frameRate(8);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(200);
    snake.dead();
    snake.update();
    snake.show();

    if (snake.eat(food)) {
        pickLocation();
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

// function keyblock(keye, dire) {
//     this.keye = keye;
//     this.dire = dire;
//     if ((this.dire = true)) {
//         this.keye;
//     }
// }

// function keyPressed() {
//     if (keyCode === UP_ARROW) {
//         snake.dir(0, -1);

//         // if (snake.dir(0, -1)) {
//         //     DOWN_ARROW = false;;
//     } else if (keyCode === DOWN_ARROW) {
//          snake.dir(0, 1)
//             // DOWN_ARROW = false;
//         }
//      else if (keyCode === RIGHT_ARROW) {
//         if (snake.dir(1, 0)) {
//             DOWN_ARROW = true;
//         } else {
//             snake.dir(1, 0);
//             DOWN_ARROW = true;
//         }
//     } else if (keyCode === RIGHT_ARROW) {
//         DOWN_ARROW = true;
//     } else if (keyCode === LEFT_ARROW) {
//         snake.dir(-1, 0);
//     }
// }
const goingUp = (this.y = 1);
const goingDown = (this.y = -1);
const goingRight = (this.x = 1);
const goingLeft = (this.x = -1);
function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW: //prawo
            if (LEFT_ARROW) {
                snake.dir(-1, 0);
            }
            // else {
            //     RIGHT_ARROW = false;
            // }
            //
            break;
        case UP_ARROW: //gora
            // RIGHT_ARROW=true
            if (snake.dir(0, 1) !== snake.dir(0, -1)) {
                snake.dir(0, -1);
                // } else {
                //     snake.dir(0, 1);
            }

            break;

        case RIGHT_ARROW: //prawo
            if (snake.dir(-1, 0) === snake.dir(1, 0)) {
                snake.dir(1, 0);
            }
            // } else {
            //     snake.dir(-1, 0);
            // }
            break;
        case DOWN_ARROW: //dol
            if (snake.dir(0, -1) == snake.dir(0, 1)) {
                snake.dir(0, 1);
            }
            // else {
            //     snake.dir(0, 1);
            // }
            break;
    }
}

// function changeDirection(event) {
//     const LEFT_KEY = 37;
//     const RIGHT_KEY = 39;
//     const UP_KEY = 38;
//     const DOWN_KEY = 40;

//     const keyPressed = event.keyCode;
//     const goingUp = dy === -10;
//     const goingDown = dy === 10;
//     const goingRight = dx === 10;
//     const goingLeft = dx === -10;

//     if (keyPressed === LEFT_KEY && !goingRight) {
//       dx = -10;
//       dy = 0;
//     }

//     if (keyPressed === UP_KEY && !goingDown) {
//       dx = 0;
//       dy = -10;
//     }

//     if (keyPressed === RIGHT_KEY && !goingLeft) {
//       dx = 10;
//       dy = 0;
//     }

//     if (keyPressed === DOWN_KEY && !goingUp) {
//       dx = 0;
//       dy = 10;
//     }
//   }
