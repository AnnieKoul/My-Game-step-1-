var bgImg








function setup() {
  createCanvas(displayWidth,displayHeight);
  startButton=createButton("START")
  startButton.position(width/2,height/2)
  startButton.class("sButton")
  }

function preload() {
  bgImg=loadImage("Images/Background.jpg")
  

}

function draw() {
  background(bgImg);  
  drawSprites();
  handlestartButton()


}

function handlestartButton(){
  startButton.mousePressed(()=>{
startButton.hide();
  })

  
}