class Chain{
    constructor(object1,object2){
        var options ={
         bodyA:object1,
         bodyB:object2,
         length:10,
         stiffness:0.04
        }
       this.chain = Constraint.create(options);
       World.add(world,this.chain); 
    }
    display(){
        var A = this.chain.bodyA.position;
        var B = this.chain.bodyB.position;
        strokeWeight(4);
        fill("black");
        line(A.x,A.y,B.x,B.y);
    }
}