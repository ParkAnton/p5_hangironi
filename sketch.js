let angle=0;
let img;

function setup(){
    createCanvas(1200,700,WEBGL);
    img=loadImage('face2.jpg');
}

function draw(){
    background(random(255),random(255),random(255));
    noStroke();
    // normalMaterial();
    rectMode(CENTER);
    translate(0,0);
    push();
    rotateX(angle*0.1);
    rotateY(angle*0.1);
    rotateZ(angle*0.1);  
texture(img);
    box(300,300,300);      
    angle+=0.07;
}
