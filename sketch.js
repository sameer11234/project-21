var wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(233,321);
  weight=random(30,42);
  thickness=random(22,83)
  car=createSprite(50,200,50,50);
  wall=CreateSprite(1200,200,thickness,height/2);
  wall.Shapecolor(80,80,80);
  car.velocityX = speed;

}

function draw() {
  background(255,255,255);
  drawSprites();
}

if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation<180)
  {
    car.Shapecolor=(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car.Shapecolor=(230,230,0);
  }
  if(deformation<100)
  {
    car.Shapecolor=(0,255,0);
  }

}
display();

function hasCollided(bullet,wall){
 bulletRightEdge+bullet.x +bullet.witdh;
 wallLeftEdge+wall.x;
 if(bulletRightEdge>+wallLeftEdge)
 {
   return true;
 } 
  return false;
}
if(hasCollided(bullet, wall)){
  bullet.velocityX=0;
  var damage=0.5 * speed* speed/(thickness *thickness *thickness);
  if(damage>10)
  {
    wall.Shapecolor=color(255,0,0);
  } 
  if(damage<10)
  {
    wall.Shapecolor=color(0,255,0);
  }
}
