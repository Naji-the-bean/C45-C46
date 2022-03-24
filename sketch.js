var sanic
var base1, base2, base3;

var bg
var PLAY = 1;
var END = 0;
var gameState = PLAY

function preload(){
    bg = loadImage("images/background.png")
    baseImg = loadImage("images/base.png")
    sanicStanding = loadAnimation("./images/sanic_stand.png", "images/sanic_standing2.png")
    sanicJumping = loadAnimation("./images/sanic1.png", "images/sanic2.png")
}


function setup(){
    createCanvas(windowWidth, windowHeight)

    entry = createSprite(100, windowHeight/2 +106, 300, 100);
    entry.addImage("base", baseImg);
    entry.scale = 0.06;

    exit = createSprite(750, windowHeight/2 +106, 300, 100);
    exit.addImage("base", baseImg);
    exit.scale = 0.06;

    base1 = createSprite(windowWidth/2 -150, windowHeight/2 + 100, 300, 100);
    base1.addImage("base", baseImg);
    base1.scale = 0.04;
    base1.velocityY = -5

    base2 = createSprite(windowWidth/2 , windowHeight/2 + 100, 300, 100);
    base2.addImage("base", baseImg);
    base2.scale = 0.04;
    base2.velocityY = -5.1

  
    base3 = createSprite(windowWidth/2+150 , windowHeight/2 + 100, 300, 100);
    base3.addImage("base", baseImg);
    base3.scale = 0.04008;
    base3.velocityY = -3

    sanic = createSprite(100, windowHeight/2 +10, 50,50)
    sanic.addAnimation("standing", sanicStanding)
    sanic.addAnimation("jumping", sanicJumping)
    sanic.scale = 0.234
}


function draw(){
    background(bg)

    if(gameState === PLAY){
        if(sanic.collide(base1) || sanic.collide(base2) || sanic.collide(base3)|| sanic.collide(entry) ){
            sanic.changeAnimation("standing")
        }
        if(sanic.collide(exit)){
            gameState = END
        }
    
         // making him jump 

    if(keyDown("space")){
        sanic.velocityY = -5
        sanic.changeAnimation("jumping")
    }

    sanic.velocityY = sanic.velocityY + 0.3

    if(keyDown(RIGHT_ARROW)){
        sanic.x = sanic.x + 4
    }

    if(keyDown(LEFT_ARROW)){
        sanic.x = sanic.x - 4
    }

    /*if(sanic.y < 10){
        sanic.x = 100 
        sanic.y = windowHeight/2 +10
    }*/

    if(sanic.y > windowHeight - 50.0000005){
        sanic.remove()
        textSize(30)
        text("you lose, joe dies!", windowWidth/2 - 100, windowHeight/2)
    }


    if(base1.y < 50||base1.y > windowHeight - 50){
        base1.velocityY = -(base1.velocityY);
    }

    if(base2.y < 100 || base2.y > windowHeight - 100){
        base2.velocityY = -(base2.velocityY)
    }
   
    if(base3.y < 100 || base3.y > windowHeight - 100){
        base3.velocityY = -(base3.velocityY)
    }

    }
    else if(gameState === END){
        sanic.changeAnimation("standing")
        textSize(30)
        text("you won sanic,!", windowWidth/2 - 100, windowHeight/2)
        sanic.velocityY = 0
    }

    
    
 
    
   


    drawSprites()
}