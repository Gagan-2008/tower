class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA)
        {
            var pointA=this.sling.bodyA.position;         
            
             strokeWeight(3);     
             line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
        }
       
    }
    
}