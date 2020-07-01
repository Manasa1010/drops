const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var maxDrops=100;
var drops = [];

function preload(){
   thunder=loadImage("thunder.png");
}

function setup(){
  var canvas=createCanvas(400,800) ;
  engine = Engine.create();
    world = engine.world;  
    
    umbrella1=new Umbrella(200,600);
   // for (var i=0; i<maxDrops; i++){
   //   drops.push(new Rain(random(0,400),random(0,400)));
   // }
}

function draw(){
    background("blue");
    Engine.update(engine);  
    rain1()
    umbrella1.display();
    
    
    for (var i=0; i<drops.length; i++){
      drops[i].display();
    }
  
 if(frameCount%70===0){
   image(thunder,150,10,100,300);
 }
  
}  
function rain1(){
  drops.push(new Rain(random(10,width-50),10));
 
} 

