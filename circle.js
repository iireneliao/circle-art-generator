// List p5 functions below so glitch will recognize them
/* global createCanvas, fill, random, ellipse, noStroke, createInput, button, text, textSize, textAlign, textStyle, createButton, clear, key, line, stroke, strokeWeight, keyIsPressed, height, width, textFont, rect, BOLD
*/

var input;

function setup()
{
  createCanvas(600, 500);
  
  input = createInput();
  input.position(25, 70);
  
  button = createButton('submit');
  button.position(180, 70);
  button.mousePressed(drawShapes);
  
  textFont('Georgia');
  textSize(18);
  fill(253,102,102);
  text("How many circles would you like to generate for your artwork? 🎨", height/30, width/16);

  noStroke();
  fill('white');
  rect(17, 40, 257, 20);
  
  textFont('Georgia');
  textSize(13);
  fill(253,102,102);
  text("Press 'c' to clear your canvas! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", height/30, width/11);
}

function drawShapes()
{
  var number = input.value();
  for (var i = 0; i < number; i++)
    {
      fill(random(255), random(255), random(255), random(255));
      ellipse(random(width), random(height), random(100));
    }
  
  noStroke();
  fill('white');
  rect(height/30, 40, 168, 20);
  
  textFont('Georgia');
  textSize(13);
  fill(253,102,102);
  text("Press 'c' to clear your canvas!", height/30, width/11);
}

function keyPressed()
{
  if (keyPressed && key == 'c')
    {
      clear();
      setup();
    }
}
