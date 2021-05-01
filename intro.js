const robot = require("robotjs");

var id = setInterval(getMousePosition,1000);

function getMousePosition(){
    
var mouse = robot.getMousePos();
console.log(mouse);
    
    if(mouse.x ==0 && mouse.y ==0){
        clearInterval(id);
    }
    
}

