class SlingShot {
    constructor(bodyA, pointB){
 var option
 var o1 = {
    bodyA: bird.body,       
    pointB:pointB,
    stiffness: 0.4,
    length: 13,
   } 
   this.pointB=pointB
   this.s = Constraint.create(o1)
   World.add(world, this.s) 
    }
 fly(){
     this.s.bodyA = null
 }
    displayC(){
        if(this.s.bodyA){
            var pointA = this.s.bodyA.position
            var pointB = this.pointB
            strokeWeight (3);
            line (pointA.x, pointA.y, pointB.x, pointB.y);
    
        }
        

    }
}