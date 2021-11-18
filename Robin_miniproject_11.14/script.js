
console.log("script works!");
let checkboxRect, checkboxCircle;


let sliderC, sliderR;

function setup() {

  let canvas= createCanvas(600, 500);
  canvas.id("p5-canvas");
  checkboxRect = document.getElementById('checkbox-rect');
  checkboxCircle = document.getElementById('checkbox-circle');
  sliderC= document.getElementById("size1");
sliderR= document.getElementById("size2")
}


function draw() {
  background(0,0,220);
  let sizeC=sliderC.value;
  let sizeR=sliderR.value;
  if (checkboxRect.checked) {
    rectMode(CENTER);
    noStroke();
    fill(0,random(200,255),0)
    rect(random(600), 250, 50, 50);
    rect(120,random(500), 50, 50);

  }
;

  if (checkboxCircle.checked) {
    noStroke();
    fill(0,random(200,255),random(200,255))
    circle(random(600), random(450),   sizeC);
  

  }

}
