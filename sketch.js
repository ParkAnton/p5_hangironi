let angle=0;
let img;

function setup(){
    createCanvas(700,700,WEBGL);
    img=loadImage('face2.jpg');
}

function draw(){
    background(175);
    // normalMaterial();
    rectMode(CENTER);
    translate(0,0);
    push();
    rotateX(angle*0.1);
    rotateY(angle*0.1);
    rotateZ(angle*0.1);  
texture(img);
    box(400,400,400);      
    angle+=0.07;
}