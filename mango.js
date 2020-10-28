class Mango{

constructor (x,y){
var options={
isStatic:true,
restitution:0,
friction:1

}
this.body=Matter.Bodies.circle(x,y,this.radius,options);
World.add(world,this.body);
this.radius=30;
this.x=x;
this.y=y;
this.image=loadImage("Plucking mangoes/mango.png");
}
display(){
var p=this.body.position;
push()
		translate(p.x,p.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()


}













}
