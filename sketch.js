var tower;
var towerImage;
var doors;
var doorImage;
var doorGroup;
var climber;
var climberImage;
var climberGroup;
var ghost;
var ghostImage;
var edge;
var invisibleBlock;
var invisibleBlockGroup;
var GameState="play";


function preload(){
towerImage=loadImage("tower.png");
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
ghostImage=loadImage("ghost-standing.png")
doorGroup=new Group();
climberGroup=new Group();
invisibleBlockGroup=new Group();
  

}

function setup(){
createCanvas(600,600);
  edge=createEdgeSprites();
  tower=createSprite(300,300,600,600);
 tower.addImage(towerImage);
  tower.velocityY = 2;
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale=0.3;
}

function draw(){
 background(255)
  
    
 
  if(GameState === "play"){
  if(tower.y>600){
    tower.y=300;
  }
    if(keyDown("right")){
    ghost.x=ghost.x+4;
  }
    if(keyDown("left")){
    ghost.x=ghost.x-4;
  }
  
  if(keyDown("space")){
    ghost.velocityY=-7;
  }
ghost.velocityY=ghost.velocityY+0.8  
  ghost.collide(edge[3]);
  ghost.collide(climberGroup);
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  
  if(invisibleBlockGroup.isTouching(ghost)){
   ghost.destroy();
  GameState = "end";
  
  }
  spawnDoors();
  drawSprites();
  }

  else
    if(GameState ==="end"){
      textSize(35);
      text("Game Over",250,250);

      
    }
 


}

function spawnDoors(){
  if(frameCount%240===0){
    doors=createSprite(200,50,40,20);
    doors.addImage(doorImage);
    doors.velocityY=2;
    doors.lifetime = 620;
    doors.x=Math.round(random(100,500));
    doorGroup.add(doors);
    doors.depth=ghost.depth;
    ghost.depth=ghost.depth+1;
    
    
    climber=createSprite(200,115,40,10);
    climber.addImage(climberImage);
    climber.velocityY=2;
    climber.lifetime = 620;
    climber.x=doors.x;
    climberGroup.add(climber);
        
    invisibleBlock=createSprite(200,125,40,10);
    invisibleBlock.width=climber.width;
    invisibleBlock.visible = false;
    invisibleBlock.velocityY=2;
    invisibleBlock.lifetime = 620;
    invisibleBlock.x= doors.x
    invisibleBlockGroup.add(invisibleBlock);
    
    
  }
}
  
  
  
  
