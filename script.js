var robot = require("robotjs");
var fs = require("fs");

var screen = robot.getScreenSize();

setTimeout(handleWhatsApp,1000);

function handleWhatsApp(){
    //Opens Up WhatsApp
    robot.moveMouseSmooth(23,312);
    robot.mouseClick();
    //robot.typeString("WhatsApp");
    robot.keyTap("enter");
    
    setTimeout(GoogleChrome,1000);
}

function GoogleChrome(){
    //Opens main.js group, error incoming
   /* robot.moveMouseSmooth(252,333);
    robot.mouseClick();
    robot.keyTap("enter");
    
    //Opens up the Group Info for Link
    robot.moveMouseSmooth(722,71);
    robot.mouseClick();
    robot.keyTap("enter");
    
    //Opens up the Zoom L
    robot.moveMouseSmooth(1065,523);
    robot.mouseClick();*/
    
    //Opens Google Chrome
    robot.moveMouseSmooth(36,259);
    robot.mouseClick();
    
    setTimeout(OpenTabs,2000);
}

function OpenTabs(){
    
    var rdata = fs.readFileSync("./chrome.json");
    var tabs = JSON.parse(rdata);
    
        for(var j=0;j<tabs[0].length;j++){
            robot.typeString(tabs[j]);
            robot.keyTap("enter");
            
            if(j<tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control", "up");
        }
    }
    
}
