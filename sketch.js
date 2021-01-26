var bullet, wall, check;
var speed, weight, deform, thickness, see;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  thickness = random(22, 83);
  wall = createSprite(1500, 200, thickness, height/2);
  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));
  see = wall.x - (wall.width/2 + 25);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  check = 0;
}
function draw() {
  background("black");
  fill("White")
  text("Speed: " + speed, 400, 20);
  text("Weight: " + weight, 400, 30);
  text("Thickness: " + thickness, 400, 40);
  if(bullet.x + bullet.width/2 > wall.x - wall.width/2 || check === 1){
    deformation(see);
    check = 1;
  }
  drawSprites();
}