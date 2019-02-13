function setup() {
	createCanvas(900, 600);  
}

function draw(){
	background("#ffe209");

//Body
strokeWeight(8);
stroke("#8da669");
fill("#a5c282");
ellipse(width/2, 350, 240, 300);

//Pithole
strokeWeight(8);
fill("#8da669");
noStroke();
ellipse(width/2, 215, 120, 40);

//Eyes
stroke("#8da669");
fill("white");
ellipse(width/2-55, 330, 50, 50)

stroke("#8da669");
fill("white");
ellipse(width/2+55, 330, 50, 50)


fill("skyblue");
noStroke();
ellipse(width/2+55, 335, 30, 30)

fill("skyblue");
noStroke();
ellipse(width/2-55, 335, 30, 30)

fill("white");
noStroke();
ellipse(width/2+50, 335, 10, 10)

fill("white");
noStroke();
ellipse(width/2-50, 335, 10, 10)


//mouth
//fill(white);
//strokeWeight(8);
//stroke("black");
//arc(, 35, 50, 50, 0, -PI, CHORD);  //smile

//arms
strokeWeight(8);
stroke("#8da669");
line((width/2)+125, 350, 650, 300);//x,y to hp,vp
line((width/2)-125, 350, 250, 300);

//legs
strokeWeight(8);
stroke("#8da669");
line((width/2)+90, 450, 550, 550);//x,y to hp,vp
line((width/2)-90, 450, 350, 550);

}


