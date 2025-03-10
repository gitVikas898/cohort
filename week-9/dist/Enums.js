"use strict";
//Human readable way of representing constants
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
function doSomething(keyPressed) {
    if (keyPressed === Direction.Up) {
        console.log("Move Up");
    }
    else if (keyPressed === Direction.Down) {
        console.log("Move Down");
    }
    else if (keyPressed === Direction.Left) {
        console.log("Move left");
    }
    else if (keyPressed === Direction.Right) {
        console.log("Move Right");
    }
    else {
        console.log("Invalid Input");
    }
}
doSomething(Direction.Up);
