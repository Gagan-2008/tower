
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground1, ground2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var bb1,bb2,bb3,bb4,bb5,bb6,bb7,bb8,bb9,bb10;
var polygonObj,slingshot;

function preload() {
}

function setup(){
    var canvas = createCanvas(950,700);
    engine = Engine.create();
    world = engine.world;

    //grounds
    ground = new Ground(100,680,1800,10);
    ground1 = new Ground(350,505, 250, 20);
    
 
   //level1
   b1=new Block(300,475,30,40);
   b2=new Block(330,475,30,40);
   b3=new Block(360,475,30,40);
   b4=new Block(390,475,30,40);
   b5=new Block(420,475,30,40);

   //level2
   b6=new Block(330,435,30,40);
   b7=new Block(360,435,30,40);
   b8=new Block(390,435,30,40);

   //level3 
   b9=new Block(360,395,30,40);

   //ground2
   ground2 = new Ground(700, 305, 250, 20);
    //level1
    bb1=new Block(650,275,30,40);
    bb2=new Block(680,275,30,40);
    bb3=new Block(710,275,30,40);
    bb4=new Block(740,275,30,40);
    bb5=new Block(770,275,30,40);
 
    //level2
    bb6=new Block(680,235,30,40);
    bb7=new Block(710,235,30,40);
    bb8=new Block(740,235,30,40);
 
    //level1 
    bb9=new Block(710,195,30,40);

    //polygon
    //var polygonObj =   Matter.Bodies.polygon(250,400, 5, 10,{isStatic: true}) 
     //polygonObj.image = loadImage("/ploygon.png");
     polygonObj  =new Polygon(100,300,20);
     slingshot =  new SlingShot(polygonObj.body,{x:100,y:300},0,0);
}

function draw(){
    background(192,192,192);
    Engine.update(engine);
    //strokeWeight(4);
    //grounds
    ground.display();
    ground1.display();
    ground2.display();
    
    //blocks
    //level1
    stroke(15);
    fill(41, 128, 185 );
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    fill(52, 152, 219 );
    b6.display();
    b7.display();
    b8.display();
    fill(26, 188, 156 );
    b9.display();
    fill(46, 134, 193);
    bb1.display();
    bb2.display();
    bb3.display();
    bb4.display();
    bb5.display();
    fill(52, 152, 219 );
    bb6.display();
    bb7.display();
    bb8.display();
    fill(26, 188, 156 );
    bb9.display();
    polygonObj.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygonObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
    if(keyCode ===32)
    {
     slingshot.attach(bird.body);  
    }
}