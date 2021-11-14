console.log("script works!");

let circlePositionSlider =document.getElementById("circlePositionSlider");

let circleSizeSlider =document.getElementById("circleSizeSlider");



console.log(circlePositionSlider.value);
function setup(){
  let canvas=createCanvas(200,200);
  canvas.parent("canvasContainer");
 background(0);
}



function draw(){
 background(0);
  fill(255);


 let SliderVar = circlePositionSlider.value;

 let x = map(SliderVar,0,100,0,width);

 let Size=circleSizeSlider.value;
 let r = map(Size,0,100,0,100);

 circle(x,height/2,r);

}
