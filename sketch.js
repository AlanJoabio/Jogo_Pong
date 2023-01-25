// Random Ball Placement
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0

// Canvas
function setup() {

  alert('-> Utilizar o Mouse para Controlar e mudar a posição da Bola '+
        '->Obrigado!');
  createCanvas(600, 400);
  
}



function draw() {

  // Background/Fundo
  background(0);

  // Paddle/Remo/ A linha que fica acompanhando o ponteiro da mouse
  fill('#fff');
  rect(mouseX, 375, 90, 15);

  //Functions
  move();
  display();
  bounce();
  //resetBall();
  paddle();

  //Score
  fill('#fff');
  textSize(24);
  text("Pontuação: " + score, 10, 25);
}
// Funcão da Bola/Ball
function move() {
  xBall += xSpeed;//Speed é Velocidade em portugues.
  yBall += ySpeed;
}

// codição da Movimento da Bola
function bounce() {

  if (xBall < 10 ||
    xBall > 600 - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 ||
    yBall > 600 - 10) {
    ySpeed *= -1;
  }
}


// Reseva da Bola
//function resetBall() {
//  if (yBall >= 400 ||
//    yBall > 400 - 10) {
//    ySpeed = 4;
// }

//}

function display() {
  fill('#fff');
  ellipse(xBall, yBall, 20, 20);
}

// Codição de rebater e delizar o remo
function paddle() {
  if ((xBall > mouseX &&
      xBall < mouseX + 90) &&
    (yBall + 10 >= 375)) {
    xSpeed *= -1;
    ySpeed *= -1;
    score++;

  }
}