var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 20, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor(80,80,80)
  


  speed = random(221,321);
  weight = random(30,52);

}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;
  
  hascollided();

  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10){
        wall.shapeColor = color(255,0,0);
        bullet.velocityX = 0;
    }

    if(damage<10){
        wall.shapeColor = color(0,255,0);
        bullet.velocityX = 0;
    }

        }

  drawSprites();
}



function hascollided(bullet,wall){

    bulletRightEdge=bullet.x +bullet.width;
    wallLeftEdge=wall.x;
    
    if(bulletRightEdge>=wallLeftEdge){
    return true;

    
    }
    
    return false;

    
}