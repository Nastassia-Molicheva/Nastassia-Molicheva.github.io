function setup() {
	createCanvas(900, 600);  
}

function draw(){
	background("#ffe209");

//Body
strokeWeight(8);
stroke("#8da669");
fill("#a5c282");
ellipse(width/2, 350, 245, 280);

//Pithole
strokeWeight(6);
fill("#8da669");
noStroke();
ellipse(width/2, 225, 125, 38);

strokeWeight(6);
fill("#788f5b");
noStroke();
ellipse(width/2, 225, 105, 32);

//Eyes
strokeWeight(6);
stroke("#8da669");
fill("white");
ellipse(width/2-55, 330, 50, 50);

strokeWeight(6);
stroke("#8da669");
fill("white");
ellipse(width/2+55, 330, 50, 50);


fill("skyblue");//iris right
noStroke();
ellipse(width/2+55, 335, 30, 30);

fill("skyblue");//iris left
noStroke();
ellipse(width/2-55, 335, 30, 30);

fill("white");//pupil right
strokeWeight(5);
stroke("#000");
ellipse(map(mouseX,0, width, 502,508), 340, 15, 15);
//ellipse(width/2+55, 340, 15, 15);

fill("white");//pupil left
strokeWeight(5);
stroke("#000");
ellipse(map(mouseX,0, width, 392,398), 340, 15, 15);
//ellipse( width/2-55, 340, 15, 15);

//Brows
strokeWeight(8);
stroke("#8da669");
line(475, 265, 525, 275);//x,y to hp,vp
line(370, 275, 420, 265);

//Freckles
strokeWeight(6);
point(515, 380);
point(495, 370);
point(400, 380);
point(385, 370);
point(425, 380);
point(455, 382);
point(430, 360);
point(480, 383);
point(455, 382);
point(455, 382);
point(472, 360);

//Mouth
stroke("#8da669");
fill("white");
strokeWeight(6);
arc(450, 400, 100, 100, 0, PI , CHORD);


//Arms
strokeWeight(8);
stroke("#8da669");
line((width/2)+125, 350, 650, 300);//x,y to hp,vp
line((width/2)-125, 350, 250, 300);

//Legs
strokeWeight(8);
stroke("#8da669");
line((width/2)+90, 450, 550, 550);//x,y to hp,vp
line((width/2)-90, 450, 350, 550);

}


