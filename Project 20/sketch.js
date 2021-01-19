var Tom,TomImg,TomImg2,TomWalk;
var Jerry,JerryImg,JerryImg2,JerryCheat;

function preload() {
    //load the images here
    backImg = loadImage("garden.png");
    TomImg = loadImage("tomOne.png");
    TomImg2 = loadAnimation("tomFour.png");
    TomWalk = loadAnimation("tomTwo.png","tomThree.png");
    JerryImg = loadImage("jerryOne.png");
    JerryImg2 = loadAnimation("jerryFour.png");
    JerryCheat = loadAnimation("jerryTwo.png","jerryThree.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
    Tom = createSprite(width-100,height/2,100,100);
    Tom.addImage(TomImg);
    Tom.addAnimation("Running",TomWalk);
    Tom.addAnimation("pause",TomImg2);
    Tom.scale = 0.1;
    //Tom.debug = true;
    Tom.setCollider("rectangle",0,0,1000,1000);
    
    Jerry = createSprite(50,height/2,100,100);
    Jerry.addImage(JerryImg);
    Jerry.addAnimation("cheat",JerryCheat);
    Jerry.addAnimation("wait" ,JerryImg2);
    Jerry.scale = 0.1;
    //Jerry.debug = true;
    Jerry.setCollider("rectangle",0,0,900,1000)

}

function draw() {
    console.log(Tom.x)
    background(backImg);
    //Write condition here to evalute if tom and jerry collide
    if(Jerry.x>Tom.x/2){
        Tom.changeAnimation("pause", TomImg2);
        Jerry.changeAnimation("wait",JerryImg2);
        Tom.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      Tom.velocityX = -5;
      Tom.changeAnimation("Running",TomWalk);
      Jerry.changeAnimation("cheat",JerryCheat);

  }

}



