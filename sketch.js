const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box1,box2,box3,box4,box5,box6,shootingbox;
var chain;
var bgcolour;

var gameState = "Start";

var score = 0;

function preload() {
getBackgroundImg(); 
}

function setup () {
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,200,200,20);
    box1=new Box (600,170,40,40);
    box2=new Box (560,170,40,40);
    box3=new Box (640,170,40,40);
    box4=new Box (580,130,40,40);
    box5=new Box (620,130,40,40);
    box6 = new Box(600,90,40,40);

    shootingbox=new Box (200,200,40,40);

    chain = new Sling(shootingbox.body,{x:100,y:100});
    

}
function draw () {

background(0);

Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    shootingbox.display();
    chain.display();

    shootingvisible();

    text("score:"+score,750,40);
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(shootingbox.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    chain.fly();
    shootingbox.visibility = 
    gameState = "launched";
}

function shootingvisible(){

    if(shootingbox.speed<3){
        shootingbox.display();
       }
        if(shootingbox.speed>3) {
           push();
           shootingbox.Visiblity =  shootingbox.Visiblity - 20;
           console.log("hi");
           
           pop();
  
         }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
       bgcolour="white";
    }
    else{
        bgcolour="black";
    }

}


