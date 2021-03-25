
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "blue";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "blue";

  gameObject1 = createSprite(600, 400, 100, 100);
  gameObject1.shapeColor = "magenta";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect, movingRect)){
    movingRect.shapeColor = "magenta";
    fixedRect.shapeColor = "magenta";
  }
  
  else if(isTouching(gameObject, movingRect)) {
    movingRect.shapeColor = "blue";
  
    gameObject1.shapeColor = "blue";
  }

  else{
    movingRect.shapeColor = 'white';
    fixedRect.shapeColor = 'blue';
    gameObject1.shapeColor = 'magenta';
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



