let cnv, img,
    inputTop, inputBot,
    labelTop,  labelBot,
    topText, bottomText,
    btn;

function setup() {
    cnv = createCanvas(400, 500);
    cnv.parent("sketch")
    cnv.position(50, 250)

    labelTop = createElement(`p`, "Top Text");
    labelBot = createElement('p', "Bottom Text");
    inputTop = createInput();
    inputBot = createInput();
    topText = createElement('p')
    bottomText = createElement('p');
    btn = createButton("Submit");

    labelTop.parent("sketch")

    inputTop.size(100);
    inputBot.size(100);

    labelTop.position(cnv.x + 5, cnv.y);
    labelBot.position(labelTop.x, labelTop.y + 25)
    inputTop.position(labelTop.x + 80, labelTop.y + 15);
    inputBot.position(labelBot.x + 110, labelBot.y + 15);
    btn.position(labelBot.x, labelBot.y + 40, 100)
    topText.position(250, 350)
    bottomText.position(topText.x, topText.y + 200)


    btn.mousePressed(fillMeme);

    textAlign(CENTER);

    img = loadImage(`../images/drake.jpg`);
}

function draw(){
    background("#F2ECE6");
    image(img, 0, 100, 400, 400);
}
function fillMeme() {
    const top =  inputTop.value();
    const bot = inputBot.value();

    topText.html(top);
    bottomText.html(bot);

    inputTop.value('');
    inputBot.value('');
}
