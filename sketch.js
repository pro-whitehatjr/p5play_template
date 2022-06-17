var box;
function setup() {
  createCanvas(400,400);
 box=createSprite(200,200,30,30) 
}

function draw() 
{
  
  background(30);
if (keyDown("LEFT_ARROW")){
box.x -=1   
}
if (keyDown("RIGHT_ARROW")) {
 box.x +=1 
}
if (keyDown("UP_ARROW")) {
box.y -=1  
}
if (keyDown("DOWN_ARROW")) {
box.y +=1  
} 
drawSprites() 
}




