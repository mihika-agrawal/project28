
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stone,boy,boyImage;
var tree,launcher;
var mango1,mango2,mango3,mango4,mango5;
var ground;
function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(400,680,800,20);
	boy= createSprite(130,610,20,40);
	boy.addImage(boyImage); 
	boy.scale=0.1;
	tree = new Tree(600,400,300,550);
	stone= new Stone(85,560);
	stone.scale=0.5
	launcher= new Launcher(stone.body,{x:85,y:560})
	mango1 = new Mango(500,300,20);
	mango2= new Mango(660,340,20);
	mango3 = new Mango(670,230,30);
	mango4 = new Mango(540,220,20);
	mango5 = new Mango(590,325,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  textSize(25);
  text("Press Space to get a second Chance to Play!!",100 ,50);
  
  drawSprites();
 ground.display();
 tree.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();

 launcher.display();

detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
 detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	
function mouseReleased(){
	 launcher.fly();
	}

function detectCollision(lstone,lmango){
mangop= lmango.body.position;
stonep= lstone.body.position;
var distance=dist(stonep.x,stonep.y,mangop.x,mangop.y)
if(distance <= lmango.r+lstone.r){
 
	Matter.Body.setStatic(lmango.body,false);

}


}

function keyPressed(){
if (keyCode===32){
Matter.Body.setPosition(stone.body,{x:85,y:560});
launcher.attach(stone.body);

}


}