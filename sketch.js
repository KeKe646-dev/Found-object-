//sun circle ONLY
let circX = 500;
//triangles ONLY
let triX = 7000;
let triB = 2000;
let triZ = -340;
let triV = -600;
let triW = 1000;
let triA = -1000;
let quadA = -100;

function setup() {
  createCanvas(600, 400);
}
//SKY BG
function draw() {
  background(250, 200, 225);
  strokeWeight(2);
  stroke(255, 255, 255);
  fill(100, 150, 200);
  triangle(triX, 460, 205, 98, 10, 106, 75);

  fill(100, 150, 200);
  triangle(triB, 460, 205, 98, 10, 106, 75);

  fill(100, 150, 200);
  triangle(triZ, 460, 305, 208, 890, 206, 15);

  triangle(triV, 100, 700, 230, 20, 1, 60);
  //white clouds
  {
    fill(255, 250, 250);
    triangle(triW, 200, 30, 4, 5, 6);
    triangle(triA, 40, 800, 60, 3, 0);
  }
  //Sun
  {
    noStroke();
    fill(250, 230, 100);
    stroke(250, 190, 90);
    strokeWeight(9);
    circle(circX, 120, 120, 120, 120);
    noStroke();

    // train station
    {
      strokeWeight(2);
      stroke(255, 255, 255);
      push();
      fill(250, 160, 200);
      translate(230, 20);
      quad(20, 50, 80, 30, 80, 70, 20, 70);
      rect(70, 40, 50, 50);
      pop();
      fill(180, 170, 250);
      rect(140, 80, 300, 100);
    }
  }

  //Buildings
  {
    push();
    fill(150, 90, 130);
    rect(0, 90, 100, 500);
    pop();

    push();
    fill(250, 160, 200);
    translate(40, 190);
    scale(3);
    quad(20, -32, 30, 0, 70, 70, 20, 70, quadA);
    pop();
  }
  {
    push();
    fill(150, 90, 130);
    rect(500, 90, 100, 500);
    pop();

    push();
    fill(250, 160, 200);
    translate(250, 90);
    scale(5);
    quad(-2, 100, 50, 0, 50, 70, 20, 70, quadA);
    pop();
  }

  //Road
  {
    fill(155, 90, 120);
    rect(0, 300, 600, 400);
  }
  //sidewalk
  {
    fill(205, 120, 190);
    arc(0, 295, 440, 70, 0, HALF_PI);
    arc(640, 295, 500, 70, HALF_PI, PI);

    push();
    rotate(1.3);
    translate(340, 80);
    fill(255, 255, 255);
    quad(20, 50, 80, 30, 80, 70, 20, 70);
    pop();
  }
  //street light + pole
  {
    push();
    fill(130, 80, 130);
    rect(500, 40, 10, 280);
    pop();

    push();
    rotate();
    fill(130, 80, 130);
    rect(260, 40, 250, 10);
    rect(230, 40, 30, 70);
    fill(250, 170, 200);
    circle(245, 55, 15, 15, 15);
    fill(250, 250, 200);
    circle(245, 75, 15, 15, 15);
    fill(200, 250, 200);
    circle(245, 95, 15, 15, 15);
    pop();

    push();
    translate(70, 120);
    fill(140, 120, 170);
    triangle(0, 75, 100, 20, 100, 75);
    pop();

    push();
    translate(60, 160);
    fill(140, 120, 170);
    rect(40, 40, 70, 100);
    pop();

    push();
    translate(370, 160);
    fill(140, 120, 170);
    rect(40, 40, 70, 100);
    pop();

    push();
    translate(300, 120);
    fill(140, 120, 170);
    triangle(200, 75, 100, 20, 100, 75);
    pop();

    {
      fill(180, 170, 250);
      rect(70, 190, 100, 20);
      rect(400, 190, 100, 20);

      {
        push();
        fill(170, 230, 180);
        translate(490, 60);
        strokeWeight(1);
        stroke(255, 255, 255);
        rect(20, 20, 50, 20);
        pop();

        push();
        fill(170, 230, 180);
        translate(430, 80);
        strokeWeight(1);
        stroke(255, 255, 255);
        rect(20, 20, 50, 20);
        pop();

        push();
        translate(-50, 60);
        fill(90, 200, 255);
        rect(40, 40, 90, 40);
        pop();
      }
    }
  }
}
