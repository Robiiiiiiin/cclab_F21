

let img;
let cam;

function setup() {
  createCanvas(640, 480);

  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(width, height);

}

function draw() {
  background(0);

  cam.loadPixels();
  img.loadPixels();

  let Size = 20;
  noStroke();
  var colorPicked = random(100,255);

  for (let y = 0; y < img.height; y += Size) {
    for (let x = 0; x < img.width; x += Size) {
      let index = (x + y * img.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let avg = (r + g + b) / 3;

      let size = map(avg, 0, 255, 1, Size);




    fill(255-colorPicked,255-colorPicked,colorPicked);



      rect(x, y, size/2, size*2);
    }
  }
}
