let img,
    inputTop, inputBot,
    labelTop,  labelBot,
    topText, bottomText,
    btn;

function setup() {
    createCanvas(400, 600);


    labelTop = createElement(`p`, "Top Text");
    labelBot = createElement('p', "Bottom Text");
    inputTop = createInput();
    inputBot = createInput();
    topText = createElement('p')
    bottomText = createElement('p');
    btn = createButton("Submit");

    inputTop.size(100);
    inputBot.size(100);

    labelTop.position(20, 50);
    labelBot.position(20, 80)
    inputTop.position(130, 65);
    inputBot.position(130, 95);
    topText.position(325, 300)
    bottomText.position(325, 500)
    btn.position(labelBot.x, labelBot.y + 40, 100)


    btn.mousePressed(fillMeme);

    textAlign(CENTER);

    img = loadImage(`../images/drake.jpg`);
}

function draw(){
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
