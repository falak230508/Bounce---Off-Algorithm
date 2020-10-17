function setup() {
  createCanvas(1000,1000);
box = createSprite(400, 200, 50, 50);
box.shapeColor = "pink";

rectangle = createSprite(400,100,50,80);
rectangle.shapeColor = "purple";
rectangle.velocityY=5;

square = createSprite(400,800,80,30);
square.shapeColor = "red";
square.velocityY = -5;
}

function draw() {
  background("cyan");
  


 if(square.x-rectangle.x < rectangle.width/2 + square.width/2
   && rectangle.x-square.x < rectangle.width/2 + square.width/2)
   {square.velocityX =  square.velocityX * (-1)
    rectangle.velocityX = rectangle.velocityX *(-1)
   }
    if (square.y-rectangle.y < rectangle.height/2 + square.height/2 
  && rectangle.y-square.y < rectangle.height/2 + square.height/2){
    square.velocityY =  square.velocityY * (-1)
      rectangle.velocityY = rectangle.velocityY *(-1)
   }
   
  drawSprites();
}