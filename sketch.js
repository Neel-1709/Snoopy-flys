var player,player_Flying, player_crash;
var cloud;
var red_Baron;
var bone_power;
var score;
var gameover,gameoverImage;
var restart, restartImage;
var PLAY = 1;
var END = 0;
var gameState;


function preload(){
player_Flying = loadImage("snoopyplane.png");
player_crash = loadImage("snoopy_crashed.png");
bone_power = loadImage("images.png");
red_Baron = loadImage("RedBaron.png");
cloudImage = loadImage("cloud.png");
gameoverImage = loadImage("gameover.png");
restartImage = loadImage("Restart.png");
}

function setup() {
 createCanvas(500,400)

gameover = createSprite(300,200);
gameover.addImage(gameoverImage);
gameover.scale = 0.5;
gameover.visible = false
restart = createSprite(300,150);
restart.addImage(restartImage);
restart.scale = 0.5;
restart.visible = false

cloud = createSprite(400,180,400,20);
cloud.addImage("cloud",cloudImage);

cloud.velocityX = -5;
cloud.scale = 3;

player = createSprite(50,200,20,50);
player.addAnimation("flying", player_Flying);
player.scale = 0.2;

bone_powerGroup = new Group();
red_BaronGroup = new Group();

  score = 0;
}

function draw() {
 background("white");

if(gameState===PLAY){
 
  score = score + Math.round(getFrameRate()/60);
    cloud.velocityX = -5;
    
  
}

if (cloud.x < 50){
  cloud.x = cloud.width/1.5;
}
spawnRedBaron();  
player.y = World.mouseY;
drawSprites();
fill("blue") ;
 textSize(30);
 text("Score: = "+ score,500,50);
 
}


function spawnRedBaron(){
if(World.frameCount % 50 === 0){
  var redBaron = createSprite(500,200);
  redBaron.y = Math.round(random(100,300));
  red_BaronGroup.addImage(redBaron);
  redBaron.velocityX = -5;
  redBaron.scale = 0.2;



}
}