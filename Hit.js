class Hit{

    constructor(bodyA, pointB){

        var options = {

            bodyA : bodyA,
            pointB :pointB,
            stiffness : 0.1,
            length :4
        }
        this.pointB = pointB;
        this.hit = Constraint.create(options);
        World.add(world,this.hit);
    }


    attach(body){

             this.hit.bodyA = body;
    }

   fly(){

        this.hit.bodyA = null;
   }

    display(){

      if(this.hit.bodyA ){

        var pointA = this.hit.bodyA.position; 
        var pointB = this.pointB;

        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x - 15,pointB.y); 


      }

    }
}