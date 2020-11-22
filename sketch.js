
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bin1;
var ground;
var wastepos;

function preload()
{
	
}

function setup() {
	createCanvas(700,500);

  engine = Engine.create();
  world = engine.world;
	

  

  //Create the Bodies Here.
  bin1 = new Bin (200,200,10,100);  
  
    
 
	Engine.run(engine);
  
}


function draw() {
  background("black");
  rectMode(CENTER);

  keyP();
  
  
  ellipseMode(RADIUS);
  ellipse(100,455,20,20);

 
  drawSprites();  

  Engine.update(engine);
  }

function keyP(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(wastepos.body,wastepos.body.position,{x:85,y:-85});
   }
}

