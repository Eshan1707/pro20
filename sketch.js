function setup() {
  createCanvas(1000,400);
 car= createSprite(40, 200, 50, 50);
 wall=createSprite(900,200,60,200)
 speed=random(55,96)
 weight=random(400,1500)
 car.velocityX=speed
}


function draw() {
  background(255,255,255);  
  if(wall.x-car.x<55){
   car.velocityX=0
   car.x=wall.x-50
   def=.5*weight*speed*speed/22509
   if(def>180){
     car.shapeColor="red"
   } 
   if(def<180&&def>100){
     car.shapeColor="yellow"
   }
   if(def<100){
     car.shapeColor="green"
   }
  }
  drawSprites();
}