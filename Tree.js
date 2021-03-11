class Tree{

    constructor(){

       var options = {

        isStatic:true
       }
       this.body = Bodies.rectangle(1000,570,10,10,options);
       World.add(world,this.body);
       this.image = loadImage("sprites/tree.png");

    }

    display(){
        
        //fill("green");
        var  pos = this.body.position;
        //rect(1000,570,50,50);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y-120,300,300); 
    }
}
