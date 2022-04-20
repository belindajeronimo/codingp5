let playerX = 200;
let playerY = 200

function setup() {
  createCanvas(400, 400)
}
function draw() {
  background('orange');
  circle(playerX,playerY,50)
  noStroke()  
  if(keyIsDown(LEFT_ARROW))
    playerX=playerX -10;
  if(keyIsDown(RIGHT_ARROW))
    playerX=playerX +10;
  if(keyIsDown(UP_ARROW))
    playerY=playerY-10;
  if(keyIsDown(DOWN_ARROW))
    playerY=playerY +10;
  
  console.log('hi belinda')
}