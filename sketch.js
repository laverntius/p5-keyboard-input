function setup() {
  createCanvas(600, 400);
}

function draw() {
 if(keyIsPressed){
     
     if(key== "r"){
     background(255,0,0);
     }
     
     if(key=="r"){
        background(50);
     }    
    if(key=="b"){
        background(50);
    } 
    
    if(keyCode==32){
        background(255,255,255);
    }
 }else{
   
   background(50);
 } 
}

function keyRelease(){
    blendMode(NORMAL);
}