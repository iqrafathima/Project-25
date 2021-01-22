
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var engine,world,paper,ground

function preload(){
    DustbinImg = loadImage("spreite/trashcangreen.png/trashcan");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    
	engine = Engine.create();
	world = engine.world;


	ground = new Ground();
    crumpledPaper = new Paper();

    dustbin = createSprite(964,520,20,20);
    dustbin.addImage(binImg);
    dustbin.scale = 0.45;

    dustbin1 = new Dustbin(900,505,10,100);
    dustbin2 = new Dustbin(950,565,130,10);
    dustbin3 = new Dustbin(1000,505,10,120);


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(230);
 
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();


drawSprites();
}

function keyPressed(){
   if (keyCode === UP_ARROW){
	Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position);
   }


}