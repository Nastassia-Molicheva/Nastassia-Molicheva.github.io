function setup() {
  createCanvas(710, 400);//creating a canvas of specific (width,height)
  noStroke();//disables the color of the outline
  background('#ffffff');//background color

  let inside = color(204, 190, 0);//inside box color
  let middle = color(204, 153, 0);//middle box color
  let outside = color(153, 51, 0);//outside box color

  // These statements are equivalent to the statements above.
  // Programmers may use the format they prefer.
  //let inside = color('#CC6600');
  //let middle = color('#CC9900');
  //let outside = color('#993300');

  push();//used in pairing with pop(); to enclose functions
  translate(160, 50);//specifies an amount to displace objects within the display window
  fill(outside);//enables the fill color "outside"
  rect(0, 0, 200, 200);//draws the rectangle with given parameters-large (x,y,w,h)
  fill(middle);//enables the fill color "middle"
  rect(100, 60, 120, 120);//draws the rectangle with given parameters-medium (x,y,w,h)
  fill(inside);//enables the fill color "inside"
  rect(60, 30, 80, 80);//draws the rectangle with given parameters-small (x,y,w,h)
  pop();//if removed, functions won't work properly

  push();//used in pairing with pop(); to enclose functions
  translate(360, 150);//translates the object to a different location within the given canvas
  fill(inside);//enables fill color parameters of "inside"
  rect(0, 0, 200, 200);//draws the rectangle with given parameters-large (x,y,w,h)
  fill(outside);//enables fill color parameters of "outside"
  rect(-20, 20, 120, 120);//draws the rectangle with given parameters-medium (x,y,w,h)
  fill(middle);//enables fill color parameters of "middle"
  rect(60, 90, 80, 80);//draws the rectangle with given parameters-small (x,y,w,h)
  pop();//if removed, functions won't work properly
}
