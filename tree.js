class Tree{
    constructor(x, y, width, height, ) {
        var options = {
            isStatic:true,
            restitution:0.8,
            friction:1.0,
        density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
      }

display(){
var p = this.body.position;
imageMode(CENTER);
image(this.image,p.x,p.y,this.width,this.height);


}










}