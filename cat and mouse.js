var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 =  loadAnimation("images/tomOne.png");
    catImg2 = loadAnimation("images/tomTwo.png");
    catImg3 = loadAnimation("images/tomFour.png");
    mouseImg1 = loadAnimation("images/JerryOne.png");
    mouseImg2 = loadAnimation("images/JerryTwo.png");
    mouseImg3 = loadAnimation("images/JerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    tom = createsprite(870,600)


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
