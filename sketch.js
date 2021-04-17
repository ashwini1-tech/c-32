const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var time

function preload() {
     getBackgroundImg( )
    
}

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    
        
    
    
  
  
}
async function getCurrentTime(){
    var responses=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsesJson=await responses.json()
    var dateTimes=responsesJson.datetime
    var time=dateTimes.slice(11,16)
    fill("orange")
    text("Time: "+time ,width-300,50)
}
async function getBackgroundImg(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson=await response.json()
    var dateTime=responseJson.datetime
    var hour=dateTime.slice(11,13)
    if(hour>=0&&hour<=02){
         bg="sunrise1.png"
    }else if(hour>=02&&hour<=04){
        bg="sunrise2.jpg"
    }else if(hour>=04&&hour<=06){
        bg="sunrise3.png"
    }
    else if(hour>=06&&hour<=08){
        bg="sunrise4.png"
    }
    else if(hour>=08&&hour<=10){
        bg="sunrise5.png"
    }
    else if(hour>=10&&hour<=12){
        bg="sunrise6.png"
    }
    else if(hour>=12&&hour<=14)
    {
bg="sunset7.png"
    }
    else if(hour>=14&&hour<=16){
        bg="sunset8.png"
    }
    else if(hour>=16&&hour<=18){
        bg="sunset9.png"
    }
    else if(hour>=18&&hour<=20){
        bg="sunset10.png"
    }
    else if(hour>=20&&hour<=22){
        bg="sunset11.png"
    }
    else {
        bg="sunset12.png"
    }
    backgroundImg=loadImage(bg)
}
