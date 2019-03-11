function setup() {
	createCanvas(900, 600); 
	img = loadImage('../assets/nyan_cat.png'); // Load the image 
}

function draw(){
	background("purple");
  	image(img, 0, 0, img.width/15, img.height/15);



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


