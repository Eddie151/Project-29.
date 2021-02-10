const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygonImage;
var ground,stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;

function preload(){
polygonImage = loadImage("polygon.png")
}

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
box1 = new Box(330,235,30,40)
box2 = new Box(360,235,30,40)
box3 = new Box(390,235,30,40)
box4 = new Box(420,235,30,40)
box5 = new Box(450,235,30,40)
box6 = new Box(360,190,30,40)
box7 = new Box(390,190,30,40)
box8 = new Box(420,190,30,40)
box9 = new Box(390,155,30,40)
ground = new Ground(600,390,1200,10)
polygon = Bodies.circle(50,200,20);
World.add(world,polygon)
slingShot = new SlingShot(polygon,{x:100,y:200});
}
function draw(){
background(0)
Engine.update(engine)
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
ground.display();
slingShot.display();
imageMode(CENTER)
image(polygonImage ,polygon.position.x,polygon.position.y,40,40)
}
