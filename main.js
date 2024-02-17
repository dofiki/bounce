const canvas = document.getElementById("canvas");
let textBox = document.querySelector(".textBox");
let animateBtn = document.querySelector(".animateBtn")
const context = canvas.getContext("2d");

canvas.style.background = "black";

windowHeight = 300;
windowWidth = 400;

canvas.height = windowHeight;
canvas.width = windowWidth;




class Text{
    constructor(name,xpos,ypos,speed){
        this.name = name;
        this.xpos = xpos;
        this.ypos = ypos;
        this.speed = speed;
        this.color = "red";
        this.dx = 1*speed;
        this.dy = 1*speed;
    }

    draw(context){
        context.font = "30px Ariel";
        context.fillStyle = this.color;
        context.textAlign = "center";
        context.fillText(this.name, this.xpos, this.ypos);
    }

    update(){
        this.xpos += this.dx;
        this.ypos += this.dy;


        if(this.xpos + 22>= windowWidth){
            this.dx = -this.dx; 
            this.color = "white";
        }else if(this.xpos - 22 <=0){
            this.dx = -this.dx;
            this.color = "yellow";
        }else if(this.ypos>= windowHeight){
            this.dy = -this.dy;
            this.color = "green";
        }else if(this.ypos - 22 <=0){
            this.dy = -this.dy;
            this.color = "blue";
        }

    }
}

function updateText(){
    context.clearRect(0,0,windowWidth, windowHeight);
    textOne.name = textBox.value;
    textOne.update();
    textOne.draw(context);
    requestAnimationFrame(updateText);
}

let textOne = new Text(textBox.value, windowHeight/2, windowWidth/2, 3);
textOne.draw(context);

updateText();
