//Human readable way of representing constants

enum Direction {
    Up,
    Down,
    Left,
    Right
}

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

function doSomething(keyPressed:Direction){
    if(keyPressed === Direction.Up){
        console.log("Move Up")
    }
    else if(keyPressed === Direction.Down){
        console.log("Move Down")
    }else if(keyPressed === Direction.Left){
        console.log("Move left");
    }else if(keyPressed === Direction.Right){
        console.log("Move Right");
    }else{
        console.log("Invalid Input")
    }
}

doSomething(Direction.Up)