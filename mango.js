class Mango{

constructor (x,y,r){
var options={
isStatic:true,
restitution:0,
friction:1

}
this.body=Matter.Bodies.circle(x,y,r,options);
this.r=r;
this.x=x;
this.y=y;
this.image=loadImage("Plucking mangoes/mango.png");
World.add(world,this.body);
}
display(){
var p=this.body.position;
push()
		translate(p.x, p.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()




}













}