var object1, object2;

function setup() {
  createCanvas(1200,800);
  object1 = createSprite(400, 100, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(400, 800,80,30);
  object2.shapeColor = "green";
  object2.debug = true;

  object2.velocityY = -5;
  object1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(object1,object2)  
  
  drawSprites();
}
function bounceOff(object3,object4){
  if (object4.x - object3.x < object3.width/2 + object4.width/2
    && object3.x - object4.x < object3.width/2 + object4.width/2) {
  object4.velocityX = object4.velocityX * (-1);
  object3.velocityX = object3.velocityX * (-1);
}
if (object4.y - object3.y < object3.height/2 + object4.height/2
  && object3.y - object4.y < object3.height/2 + object4.height/2){
  object4.velocityY = object4.velocityY * (-1);
  object3.velocityY = object3.velocityY * (-1);
}
}