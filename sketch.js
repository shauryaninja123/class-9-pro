var box
var boximage
function preload() {
boximage=loadImage("person.png")
}
function setup() {
  createCanvas(500,500);
  box=createSprite(250,250,30,30);
  box.addImage(boximage);
  box.scale=0.1;
}


function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
 box.position.x=box.position.x+5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x=box.position.x-5;
     }
     if (keyIsDown(UP_ARROW)) {
      box.position.y=box.position.y-5;
       }
       if (keyIsDown(DOWN_ARROW)) {
        box.position.y=box.position.y+5;
         }
  drawSprites();

}




