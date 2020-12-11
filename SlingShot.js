class SlingShot{

constructor(bodyA,bodyB){

var slingoptions={

bodyA:bodyA,
bodyB:bodyB,
stiffness:1,
length:50

}

this.SlingShot = Constraint.create(slingoptions)
World.add(world,this.SlingShot)



}

display(){
var posA = this.SlingShot.bodyA.position
var posB = this.SlingShot.bodyB.position
line(posA.x,posA.y,posB.x,posB.y)






}



}