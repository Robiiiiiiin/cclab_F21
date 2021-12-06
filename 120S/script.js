let positionX = 0;
let positionY;



let r;
let img;
let imgArray = [];
let manIndex = 0;
let posX=0;
let posY=330;
let stars = [];


function preload(){


  for(let i = 1; i < 10; i ++ ){
    let path = "image/"+i+".png";
    console.log("loading", path)
    let img = loadImage(path);
    imgArray.push(img);
  }
}


function setup() {

    let canvas = createCanvas(1400, 700);
    canvas.position(windowWidth/2-700, windowHeight/2-350);


    s1 = new Segment(0, 0, 200, 0, "After high school…");
    s2 = new Segment(200, 0, 263, 100, "Work");
    s3 = new Segment(200, 0, 320, -150, "College");
    s4 = new Segment(260, 100, 420, 100, "1");
    s5 = new Segment(420, 100, 600, 180, "2");
    s6 = new Segment(600, 180, 900, 180, "3");
    s7 = new Segment(320, -150, 400, -50, "Work");
    s8 = new Segment(320, -150, 440, -150, "Master");
    s9 = new Segment(400, -50, 600, -50, "4");
    s10 = new Segment(600, -50, 680, 50, "5");
    s11 = new Segment(680, 50, 985, 50, "6");
    s12 = new Segment(985, 50, 1100, -120, "7");
    s13 = new Segment(900, 180, 985, 50, "8");
    s14 = new Segment(440, -150, 460, -200, "9");
    s15 = new Segment(460, -200, 740, -200, "10");
    s16 = new Segment(740, -200, 890, -120, "Work");
    s17 = new Segment(740, -200, 850, -350, "PHD");
    s18 = new Segment(850, -350, 1000, -350, "11");
    s19 = new Segment(1000, -350, 1300, -120, "12");
    s20 = new Segment(890, -120, 1100, -120, "13");
    s21 = new Segment(1100, -120, 1300, -120, "14");
    s22 = new Segment(1300, -120, 1400, -120, "15");



    s1.addNext(s2);
    s1.addNext(s3);
    s2.addNext(s4);
    s4.addNext(s5);
    s5.addNext(s6);
    s3.addNext(s7);
    s3.addNext(s8);
    s7.addNext(s9);
    s9.addNext(s10);
    s10.addNext(s11);
    s11.addNext(s12);
    s6.addNext(s13);
    s8.addNext(s14);
    s13.addNext(s12);
    s14.addNext(s15);
    s15.addNext(s16);
    s15.addNext(s17);
    s17.addNext(s18);
    s18.addNext(s19);
    s19.addNext(s20);
    s20.addNext(s21);
    s12.addNext(s21);
    s21.addNext(s22);
    s16.addNext(s20);


  road = new path();
  r = new Runner(s1);
  r1 = new Runner1(posX,posY);
  r0 = new Runner0(positionX,positionY);


  for (var i = 0; i < 100; i++) {
      stars[i] = new Star();
  }
}


function draw() {

  let x1 = map(positionX, 0, width , 255, 0);
  let color = map(positionX, 0, width, 0, 128);
  background(color);


  positionY = 330;
  noStroke();
  fill(x1, 100);
  textFont('Georgia');
  text("No Clicking",50,100);

  if (positionX <= width) {
    positionX+=0.8;
    r0.display();
    r0.update();
  }
  if (positionX >= width / 3 && positionX<=2/3 * width) {
    let x0 = map (positionX,width/3,width*2/3,0,255);
    fill(180,x0);
    text("h e y", width / 2, height / 2);
  }

  if (positionX >=2/3 * width) {
    fill(180);
    text("H e r e", width / 2, height / 2);
    text("w e", width / 2, height / 2+20);
    text("g o", width / 2, height / 2+40);

  }

  if(positionX >= width){
  starting();

  road.draw();

  push();

  translate(0, 450);
  r.display();
  r.moving();
  r.isAlive();

  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
  s11.display();
  s12.display();
  s13.display();
  s14.display();
  s15.display();
  s16.display();
  s17.display();
  s18.display();
  s19.display();
  s20.display();
  s21.display();
  s22.display();

  pop();


  let x1 = map(posX, 0, width / 2, 255, 0);
  let color = map(posX, 0, width / 2, 128, 0);


  if (r.isAlive()==false){
   clear();
   background(color);
   noStroke();
   fill(255, x1);
   r1.display();
   r1.update();



  if (posX <= width / 2) {
    posX++;
  }
  if (posX >= width / 2) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].draw();


    }
  }

 }

}

  if(r.currentSegment.choiceTime == true){
    r.choice(key);

  }
  if(keyIsDown(RIGHT_ARROW)){
    r.step(1);
  }

}

class Segment{

    constructor(x1, y1, x2, y2, name){
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.angleDeg = atan2(this.y2 - this.y1, this.x2 - this.x1) ;
      this.stepX = cos(this.angleDeg);
      this.stepY = sin(this.angleDeg);

      this.name = name
      this.previous = [];
      this.next = [];
      this.segmentToGive = undefined;

      this.choiceTime = false;
      this.choiceText = "";

     }
    addNext(seg){
      this.choiceText = ""
      this.next.push(seg);




      for(let i = 0; i < this.next.length; i++){
        this.choiceText += " Press"+" "+(i+1)+" for " + this.next[i].name + "."

      }
    }
    display(){
      noStroke();
      line(this.x1, this.y1, this.x2, this.y2);
      fill(0);
      if(this.choiceTime==true){
      textSize(15);
      textFont('Georgia');
      text(this.choiceText, 20, -300)
      }
    }
    onSegment(x, y){
      console.log(x, this.x1, this.x2)

      if(x<=this.x2 && x>=this.x1){
        this.choiceTime = false;
        return true;
      }else{
        return false;

      }
    }
    promptChoice(){
      this.choiceTime = true;
    }
    choiceInput(key){
      if(this.choiceTime==true){
        console.log("segment received key", int("L"))
        console.log("l", this.next[key-1])

        if(this.next[key-1] != undefined){
          this.segmentToGive = this.next[key-1];
          this.choiceTime = false;
          return true;
        }else{
          return false;
        }


      }
    }
    requestSegmentChange(x){
      let distLeft = dist(this.x1, 0, x, 0);
      let distRight = dist(this.x2, 0, x, 0);
      console.log(distLeft, distRight);
          if(this.previous.length == 1){
          this.segmentToGive = this.previous[0];
          return true;
        }
        if(this.next.length == 1){
          this.segmentToGive = this.next[0];
          return true;

        }else{
          this.promptChoice();
          window.alert("You have to make a choice here!")




          return false;
        }
      }

    getSingleSegment(x){
      return this.segmentToGive;

    }
}

class Runner{
  constructor(seg){
    this.x = 0;
    this.y = -25;
    this.currentSegment = seg;
    this.speed = 1;
  }
  moving(){
    if(frameCount%5==0){
      manIndex+=1;
      if(manIndex>=3){
        manIndex=0;
      }
    }
  }
  display(){
    image(imgArray[manIndex], this.x-25, this.y-25,50,50);
    console.log(this.x-25)
    console.log(this.y-25)
  }
  step(direction){
    let speed = this.speed;
    let nextX = this.x + this.currentSegment.stepX*(speed*direction);
    let nextY = this.y + this.currentSegment.stepY*(speed*direction);
    let canMove = this.currentSegment.onSegment(nextX, nextY);


    while(speed>0 && canMove == false){

      nextX = this.x + this.currentSegment.stepX*(speed*direction);
      nextY = this.y + this.currentSegment.stepY*(speed*direction);
      canMove = this.currentSegment.onSegment(nextX, nextY);
      speed--;

    }
    console.log("move", canMove)
    if(canMove){
      this.x = nextX;
      this.y = nextY;

    }else{
      let changePermitted = this.currentSegment.requestSegmentChange(this.x);
      if(changePermitted){
        this.currentSegment = this.currentSegment.getSingleSegment(this.x);
        this.step(direction)
      }
   }
  }
  isAlive() {
      if (this.x >=1374) {
        return false;
      }
        return true;
  }
  choice(key){
    let changePermitted = this.currentSegment.choiceInput(key);
    console.log("CHOICE")


    if(changePermitted){
      this.currentSegment = this.currentSegment.getSingleSegment(this.x);
      this.step(1);



    }
  }
}

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(6);
    this.color = 0;
	}

	draw() {
		this.t += 0.1;
		let scale = this.size + sin(this.t) * 2;
		noStroke();
    fill(this.color);
		ellipse(this.x, this.y, scale, scale);
    if (this.color<255){
        this.color++;
    }

	}
}

class Runner1{
  constructor(){
    this.x = 0;
    this.y = 330;
    this.color = 0;
  }
    update(){

      if (this.x <= width / 2) {
        this.x++;
      }
      if (this.x >= width / 2) {
        fill(this.color);
        text("b y e", width / 2, height / 2);
        this.color++;
  }
}
    display(){
    let alpha = map(this.x,0,width/2,255,0);
    tint(255,alpha);
    image(imgArray[manIndex], this.x, this.y,50,50);
  }

}

class Runner0{
  constructor(){
    this.x = -25;
    this.y = 400;

  }
    update(){
      if(frameCount%5==0){
        manIndex+=1;
        if(manIndex>=3){
          manIndex=0;
        }
      }
      if (this.x <= width) {
        this.x+=0.8;
      }
}
    display(){
    image(imgArray[manIndex], this.x, this.y,50,50);
  }

}

function clearing(){
  clear();
  background("grey");
}

function keyPressed(){
  if(r.currentSegment.choiceTime == true){
    r.choice(key);
  }
  if(keyIsDown(RIGHT_ARROW)){
    r.step(1);
  }
}

function starting(){
  clear();
  background("grey");
}




class path {

  constructor() {

    this.x1=[0,207,327,450,470,747,857,993,1293,1400];
    this.y1=[0,0,-150,-150,-200,-200,-350,-350,-120,-120];

    this.x2=[0,207,327,450,470,747,877,1300,1400];
    this.y2=[0,0,-150,-150,-200,-200,-120,-120,-120];


    this.x3=[0,207,327,385,585,665,995,1110,1300,1400];
    this.y3=[0,0,-150,-50,-50,50,50,-120,-120,-120];

    this.x4=[0,193,250,413,593,907,995,1110,1300,1400];
    this.y4=[0,0,100,100,180,180,50,-120,-120,-120];

}

  update() {

}

  draw() {

    for(let i = 0; i < this.x1.length; i++){
push();
translate(0,450);

      fill(0);
      strokeWeight(0.1);
      text("Press -> to go right",20,-400);
      text("After high school…",50,-10);
      text("College",225,-85);
      text("Work",535,140);
      text("Work",630,-0);
      text("Master",550,-208);
      text("Work",820,-160);
      text("PHD",776,-283);
      text("Work",1140,-250);


      strokeWeight(3);
      stroke(0);
      line(this.x1[i],this.y1[i],this.x1[i+1],this.y1[i+1]);
      line(this.x2[i],this.y2[i],this.x2[i+1],this.y2[i+1]);
      line(this.x3[i],this.y3[i],this.x3[i+1],this.y3[i+1]);
      line(this.x4[i],this.y4[i],this.x4[i+1],this.y4[i+1]);


      if (frameCount%2==0){

        stroke(0,180);
        line(this.x1[i]+random(-8,8),this.y1[i]+random(-8,8),this.x1[i+1]+random(-8,8),this.y1[i+1]+random(-8,8));
        line(this.x2[i]+random(-8,8),this.y2[i]+random(-8,8),this.x2[i+1]+random(-8,8),this.y2[i+1]+random(-8,8));
        line(this.x3[i]+random(-8,8),this.y3[i]+random(-8,8),this.x3[i+1]+random(-8,8),this.y3[i+1]+random(-8,8));
        line(this.x4[i]+random(-8,8),this.y4[i]+random(-8,8),this.x4[i+1]+random(-8,8),this.y4[i+1]+random(-8,8));

      }

        pop();
    }


  }

}
