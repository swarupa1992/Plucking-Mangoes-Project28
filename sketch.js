
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine,world,ground,tree;
function preload()
{
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground();
	   tree = new Tree();
   //1000,450 -x,y
     mango1 = new Mango(1000,400,20,20);
     mango2 = new Mango(1030,420,20,20);
     mango3 = new Mango(1050,450,20,20);
     mango4 = new Mango(1080,400,20,20);
     mango5 = new Mango(980,450,20,20);
     mango6 = new Mango(960,380,20,20);
     mango7 = new Mango(900,400,20,20);
     mango8 = new Mango(920,460,20,20);

     stone = new Stone(236,510,50,40);

     hit1 = new Hit(stone.body,{x:240,y:510})

  
}


function draw() {

  Engine.update(engine);	
  rectMode(CENTER);
  background(0);
  //fill("white");
  //text(mouseX + " " + mouseY ,200,200);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  imageMode(CENTER);
  image(boyImage,300,560,200,200); 

  stone.display();

  hit1.display();
  detectCollision(stone,mango1); 
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

       hit1.fly();
}

function detectCollision(dstone,dmango){

  stonebody = dstone.body.position;
  mangobody = dmango.body.position;

  var distance = dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y);
  
  console.log(distance);
  console.log(dstone.width + dmango.width);

  if(distance <= dstone.width + dmango.width){

       Matter.Body.setStatic(dmango.body,false);
  }
}

function keyPressed(){

    if(keyCode == 32){
      
      Matter.Body.setPosition(stone.body,{x:280,y:550});
      hit1.attach(stone.body);
    }
}


