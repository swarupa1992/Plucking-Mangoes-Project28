class Mango{

       constructor(x,y,w,h){
    
           var options = {
    
            isStatic:true
           }
           this.width = w;
           this.height = h;
           this.body = Bodies.rectangle(x,y,w,h,options);
           World.add(world,this.body);
           this.image = loadImage("sprites/mango.png");
    
        }
    
        display(){
            
            
            var  pos = this.body.position;
            
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,this.width,this.height); 
        }
    }
    
