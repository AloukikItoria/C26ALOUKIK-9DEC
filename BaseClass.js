class BaseClass{

constructor(x,y,width,height, angle){

var option = {

restitution:0.8,
friction:0.7,
density:1

}

this.body = Bodies.rectangle(x,y,width,height,option)
this.width = width
this.height = height
this.image=loadImage("sprites/base.png");
World.add(world,this.body)




}


display(){
push();
imageMode(CENTER)
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
image(this.image,0,0,this.width,this.height)
pop();

}











}