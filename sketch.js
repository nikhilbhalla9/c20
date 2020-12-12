var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect=createSprite(400,300,60,60)
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 ){
      fixedrect.shapeColor="pink";
      movingrect.shapeColor="pink";
    }
    else{
      fixedrect.shapeColor="grey";
      movingrect.shapeColor="grey";   
    }
  drawSprites();
}