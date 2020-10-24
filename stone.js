class Stone{

constructor(x,y){
        var options={
        isStatic:true,
        restitution:0,
        friction:1
        }
        this.body=Matter.Bodies.circle(x,y,30,options)
        World.add(world,this.body);
        this.radius=30;
        this.x=x;
        this.y=y;
        this.image=loadImage("Plucking mangoes/stone.png");
}
        display(){
        var p=this.body.position;
        imageMode(RADIUS)
  

        image(this.image,p.x,p.y,this.radius*2,this.radius*2);
        
        
        
        }








}