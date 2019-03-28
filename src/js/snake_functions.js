var snake;
var scl = 20;
var food;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);
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
function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW://prawo
          if (snake.dir(1, 0) !==snake.dir(-1, 0)) {
            snake.dir(1, 0)
        }
        break;
        case UP_ARROW: //gora
            if (snake.dir(0, 1) == snake.dir(0, -1)) {
                snake.dir(0, -1);
            // } else {
            //     snake.dir(0, 1);
            }
            break;
          case RIGHT_ARROW://prawo
          if (snake.dir(-1, 0) !==snake.dir(1, 0)) {
            snake.dir(-1, 0)
        }
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
