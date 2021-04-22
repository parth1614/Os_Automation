const robot = require("robotjs");
//robot.moveMouseSmooth(500,30);
var id = setInterval(getMousePosition,1000);

function getMousePosition(){
    
var mouse = robot.getMousePos();
console.log(mouse);
    
    if(mouse.x ==0 && mouse.y ==0){
        clearInterval(id);
    }
    
}

