function preload(){
img=loadImage("images.jpg")
}
function setup(){
can=createCanvas(400 ,400)
can.center()
v=createCapture(VIDEO)
v.hide()
}
function draw(){
image(v,0,0,400,400)
}
function snap(){
save('nn.png')
}