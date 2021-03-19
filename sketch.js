const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,ground,hammer,rubber,iron;
var sand1,sand2,sand3,sand4,sand5,sand6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone=new Stone(400,650);
	ground=new Ground(400,height,800,30);
	hammer=new Hammer(350,600);
	rubber=new Rubber(400,600);
	sand1=new Sand(250,600);
	sand2=new Sand(270,600);
	sand3=new Sand(290,600);
	sand4=new Sand(310,600);
	sand5=new Sand(320,600);
	sand6=new Sand(350,600);
	iron=new Iron(200,600);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('#ADD8E6');
   
  stone.display();
  ground.display();
  hammer.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();
  drawSprites();
 
}



