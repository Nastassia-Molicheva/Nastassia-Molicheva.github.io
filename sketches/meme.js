function setup() {
	createCanvas(900, 600); 
	img = loadImage('../assets/nyan_cat.png'); // Load the image 
}

function draw(){
	background("purple");
  	image(img, 0, 0, img.width/10, img.height/10);

translate(width/2, height/2);

//Body
strokeWeight(15);
stroke("beige");
fill("pink");
rect(0, 0, 120, 80);

//head
strokeWeight(6);
fill("beige");
noStroke();
ellipse(130, 10, 70, 70);

//Paws
strokeWeight(8);
stroke("beige");
line(120, 80, 140, 120);//x,y to hp,vp
line(100, 80, 120, 120);//x,y to hp,vp
line(20, 80, 40, 120);
line(0, 80, 20, 120);



//Eyes
//strokeWeight(6);
//stroke("black");
//fill("white");
//ellipse(width/2-55, 330, 50, 50);

//strokeWeight(6);
//stroke("black");
//fill("white");
//ellipse(width/2+55, 330, 50, 50);


//fill("white");//pupil right
//strokeWeight(5);
//stroke("#000");
//ellipse(map(mouseX,0,width, 502,505), 340, 15, 15);
//ellipse(width/2+55, 340, 15, 15);

//fill("white");//pupil left
//strokeWeight(5);
//stroke("#000");
//ellipse(map(mouseX,0, width, 392,398), 340, 15, 15);
//ellipse( width/2-55, 340, 15, 15);

//Brows
//strokeWeight(8);
//stroke("black");
//line(475, 265, 525, 275);//x,y to hp,vp
//line(370, 275, 420, 265);

//moustache
//strokeWeight(6);
//line();

//Mouth
//stroke("#8da669");
//fill("white");
//strokeWeight(6);
//arc(450, 400, 100, 100, 0, PI , CHORD);

}


