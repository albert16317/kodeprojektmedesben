function changeX(){
    background("red");
}

function includeFileX(){
    let buttonX = createButton('fileX');
    buttonX.position(10, 10);
    buttonX.mousePressed(changeX);
}

