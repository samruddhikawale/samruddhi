const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine,myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  
  boggie1 = new boggie(150,170,50,50);
  boggie2= new boggie(250,170,50,50);
  boggie3 = new boggie(350,170,50,50);
  boggie4= new boggie(450,170,50,50);
  boggie5= new boggie(550,170,50,50);
  rock = new Rock(650,170,50,50);


}

function draw(){
  background(bg);  
  Engine.update(myEngine);

  ground.show();
  Boggie1.show();
  Boggie2.show();
  Boggie3.show();
  Boggie4.show();
  Boggie5.show();
  rock.show();


 
  }

  
