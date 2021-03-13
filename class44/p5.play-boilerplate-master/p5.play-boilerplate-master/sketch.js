//declaring values
var playerImage,netImage,puckImage;
var player, net ,puck;
var pucks;

var gamestate="play";
var score=0;
function preload(){
  //preloading images
playerImage=loadImage("hockey person.png");
netImage = loadImage("hockey net.png");
puckImage = loadImage("hockey puck.png");
}

function setup() {
  //creating canvas
  createCanvas(400,700);
  //creating player
  player=createSprite(200,550,10,10);
  player.addImage(playerImage)
  player.scale = 0.3
  //creating net
  net=createSprite(200,600,10,10);
  net.addImage(netImage);
  net.scale = 0.85;
  edges=createEdgeSprites();
  // player.debug=true;
  player.setCollider("circle",0,0,280)
   pucks=new Group();
}

function draw() {
  background("grey"); 
  if(gamestate==="play"){
    fill("black")
    textSize(15)
    text("Score:"+score,10,25)
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-10;
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+10;
  }
  console.log(pucks.length)
  for (var i=0;i<pucks.length;i++){
    if(player.isTouching(pucks.get(i))){
      score=score+20;
      console.log("hi")
      pucks.get(i).destroy();

    }
    console.log("hello");
    if(net.isTouching(pucks.get(i))){
      gamestate="end";
     
      
    }
  
  }
  
  if(score==600){
    fill("lightgreen")
    textSize(50);
    text("YOU WIN",80,350)
  }
  player.collide(edges[0])
  player.collide(edges[1])
  createPucks();
}
    drawSprites();
  

if(gamestate==="end"){
  // pucks.setVelocityYEach(0);
  // pucks.destroyEach();
 
}


}

function createPucks(){
  if(frameCount%50===0){
    puck=createSprite(Math.round(random(50,350)),50,10,10)
    puck.addImage(puckImage);
    puck.scale = 0.03
    puck.velocityY=7+(4*score/50);
    pucks.add(puck);
  }

}