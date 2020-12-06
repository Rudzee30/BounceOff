var fixedRect, movingRect;
var go1, go2, go3, go4;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor="Blue";
  fixedRect.velocityX = 5;
  movingRect= createSprite(400,200,80,30);
  movingRect.shapeColor="Red";
  movingRect.velocityX = -5;

  go1 = createSprite(100, 100, 50, 50);
  go1.shapeColor = "green";
  go2 = createSprite(200, 100, 50, 50);
  go2.shapeColor = "green";
  go3 = createSprite(300, 500, 50, 50);
  go3.shapeColor = "green";
  go3.velocityX = 4;
  go4 = createSprite(400, 500, 50, 50);
  go4.shapeColor = "green";
  go4.velocityX = -4;
}

function draw() {
  background("Black");

  bounceOff(movingRect, fixedRect);
  bounceOff(go3, go4);

  //console.log(fixedRect.y - movingRect.y );
  //console.log(fixedRect.height/2 +movingRect.height/2);
  drawSprites();
}

//horizontal distance between 2 rectangles when they touch
// movingRect.x - fixedRect.x < fixedRect.width/2 +movingRect.width/2

function bounceOff(object1, object2){
  if(object1.x - object2.x < object2.width/2 +object1.width/2
    && object2.x - object1.x  < object2.width/2 +object1.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
  }

  if( object1.y - object2.y < object2.height/2 +object1.height/2
    && object2.y - object1.y  < object2.height/2 +object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }
  
}