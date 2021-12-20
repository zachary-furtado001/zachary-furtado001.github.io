let lines = []; // arrangements of the Jitter objects

function setup() {
    
  createCanvas(600, 400);
  // Create objects
  for (let i = 0; i < 25; i++) {
    lines.push(new Jitter());
      
  }
}

function draw() {
    background("black");
    textSize(20);
    textFont("Times New Roman");
    textStyle(ITALIC);
    fill("white");  
    strokeWeight (1);
    textAlign(CENTER);
    text("I love you...",mouseX,mouseY,80,80);
  for (let i = 0; i < lines.length; i++) {
    lines[i].move();
    lines[i].display();
    
      //map function stretches or smooshes an input range to a different specified range
  eyeMotion = map(mouseX, 0, 400, -5, 5, 1)
  
  //dress
  fill("red")
  triangle (300, 200, 410, 300, 170, 300)
    
    
  fill(255,220,180); //define a skin color
  ellipse(width/2, height/2, 50,50);//draw a face shape
  fill(255); //set fill to white for the eyes
  ellipse(290,200,15,5); //draw left eyeball
  ellipse(310,200,15,5); //draw right eyeball
  fill(0, 50, 100);
    
  
  ellipse(290 + eyeMotion,200,5); //draw left iris
  ellipse(310 + eyeMotion,200,5); //draw right iris
  
  fill(0);
  ellipse(290 + eyeMotion,200,2); //draw left pupil
  ellipse(310 + eyeMotion,200,2); //draw right pupil
    
    
    //Moon
    fill(255)
    ellipse(300,100,70,60)
    fill("grey")
    ellipse(280,100,20,20)
    fill("grey")
    ellipse(310,120,10,10)
    fill("grey")
    ellipse(310,90,25,25)
    
    //Grass
    fill(100,150,100)
    square (-90, 300, 1000)
    
    //Bushes
    noStroke();
    fill(100,120,50)
   ellipse(70, 300, 70, 70);
   ellipse(70, 300, 40, 40);
   ellipse(30, 300, 40, 40);
   ellipse(95, 300, 40, 40);
    
    noStroke();
    fill(100,120,50)
   ellipse(500, 300, 70, 70);
   ellipse(550, 300, 40, 40);
   ellipse(520, 300, 40, 40);
   ellipse(530, 300, 40, 40);
    
    
    
    // Fireflies
    fill("yellow")
  }
}

//Fireflies
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(5, 5);
    this.speed = 2;
    fill ("yellow")
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}