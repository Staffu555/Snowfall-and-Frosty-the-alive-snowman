var snowman,bg;
var snow;
var snowmanImg1,snowmanImg2, snowImg1,snowImg2,invisibleGround;

function preload(){
   bg = loadImage("snow3.jpg")
  snowmanImg1 = loadImage("snowman2.png")
  snowmanImg2 = loadImage("snowman2 copy.png")
  snowImg1 = loadImage("snow4.webp");
  snowImg2 = loadImage("snow5.webp");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  invisibleGround = createSprite(windowWidth - windowWidth/2,windowHeight-50,windowWidth*2,10)
  invisibleGround.visible = false;
  snowman = createSprite(windowWidth-650,windowHeight-400);
  snowman.addImage(snowmanImg1);
  
  snowman.scale = 0.48;

}

function draw() {
  edges = createEdgeSprites();
  background(bg);  
  snowman.velocityY =5;
  snowman.collide(invisibleGround)
  if (keyCode== 39){
    snowman.x = snowman.x +30;
  }
  if (keyCode == 37){
    snowman.x = snowman.x-30;
  }
  snowspawn();
  snowman.collide(edges);
  //if (snowman.isTouching(RIGHT_EDGE)){
   // snowman.addImage(snowmanImg2);
  //}
  //if (snowman.isTouching(LEFT_EDGE)){
   // snowman.addImage(snowmanImg1);
  //}
  drawSprites();
}
 

function snowspawn(){
  if (frameCount % 8 === 0){
    var snow = createSprite(random(1,windowWidth),5,10,10);
    snow.scale =0.2;
    snow.lifetime = 800;
    snow.velocityY = 8;
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: snow.addImage(snowImg1);
              break;
      case 2: snow.addImage(snowImg2);
              break;
      default: break;
    }
  }
}