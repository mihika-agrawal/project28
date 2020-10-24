
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
	mango1 = new Mango(500,400);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
 ground.display();
 tree.display();
 stone.display();
 mango1.display();
 launcher.display();
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
var distance=dist(stonep.x,stonep.y,mangop.x,mango,y)
if(distance<= lmango.radius+lstone.radius){
Matter.Body.setStatic(lmango.body,false);

}


}

function keyPressed(){
if (keyCode===32){
Matter.Body.setPosition(stone.body,{x:85,y:560});
launcher.attach(stone.body);

}


}