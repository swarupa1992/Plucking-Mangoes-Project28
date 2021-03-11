class Ground{

    constructor(){

       var options = {

        isStatic:true
       }
       this.body = Bodies.rectangle(800,600,1600,20,options);
       World.add(world,this.body);


    }

    display(){

        fill("brown"); 
        rect(800,600,1600,20);
    }
}