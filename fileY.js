function changeY(){
    background("blue");
}

function includeFileY(){
    let buttonY = createButton('fileY');
    buttonY.position(width-36,10);
    buttonY.mousePressed(changeY);
}

