
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeImage=loadImage("Pluckingmangoes/tree.png")
	boyImage=loadImage("Pluckingmangoes/boy.png")
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree=createSprite(775,368); 
	tree.addImage(treeImage);
	 tree.scale=0.42;
	  boy=createSprite(160,550);
	   boy.addImage(boyImage); 
	   boy.scale=0.125;

	   stone=new Stone(100,460,23);
		mango1=new Mango(600,290,34); 
		mango2=new Mango(855,325,35);
		 mango3=new Mango(670,260,35);
		  mango4=new Mango(730,200,35); 
		  mango5=new Mango(710,320,36); 
		  mango6=new Mango(780,250,35);
		   mango7=new Mango(825,170,33);
			mango8=new Mango(880,260,35); 
			mango9=new Mango(940,220,35);
			 mango10=new Mango(980,305,35);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keycode === 32){
		matter.body.setPosition(stone.body,{x : 235,y:420})
		slingshot.attach(stone.body);
	}
}

function detectollision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position
	stomeBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance <=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}
