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
strokeWeight(6);
fill("#8da669");
noStroke();
ellipse(width/2, 215, 120, 40);

//Eyes
strokeWeight(6);
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
strokeWeight(5);
stroke("#000");
ellipse(width/2+55, 340, 15, 15)

fill("white");
strokeWeight(5);
stroke("#000");
ellipse(width/2-55, 340, 15, 15)

//brows
strokeWeight(8);
stroke("#8da669");
line(475, 265, 525, 275);//x,y to hp,vp
line(370, 275, 420, 265);

//mouth
//fill(white);
//strokeWeight(8);
//stroke("black");
//arc(, 35, 50, 50, 0, -PI, CHORD);  //smile
//line((width/2)-125, 350, 250, 300);


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


