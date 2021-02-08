var ball,b,v;
var ballPosition,database
function preload(){
b=loadImage("Hot Air Ballon-01.png")
v=loadImage("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}
function setup(){
    createCanvas(500,500);
    ball = createSprite(29,400);
    ball.shapeColor = "red";
    ball.addImage(v)
    ball.scale=0.2

    database=firebase.database()
var ballPosition=database.ref('ball/position')
ballPosition.on("value",read)


}

function draw(){
    background(b);
    if(keyDown(LEFT_ARROW)){
       write(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      write(1,0);
    }
    else if(keyDown(UP_ARROW)){
       write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
       write(0,+1);
    }
    drawSprites();
}
 function read(data){
position=data.val()
ball.x=position.x;
ball.y=position.y;


 }

 function write(x,y){
database.ref('ball/position').set({
x:position.x+x,
y:position.y+y

})


 }