var bg,bg1;

function preload(){
bg=loadImage("snow1.jpg");
bg1=loadImage("snow2.jpg");


}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bg);  
  drawSprites();
}
