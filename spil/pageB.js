//Person B skriver sin kode her 
function setup(){
    createCanvas(400,400)
    background(240,130,255);
    textSize(20)
    textAlign(CENTER, CENTER);
    text("Page B",width/2,height/2)
    let buttonBack = createButton('go back');
    buttonBack.position(width/2-width*2/8, height/2);
    buttonBack.mousePressed(goHome);

    //Udkommenterer de filer som andre arbejder på,
    //hvis de ikke virker endnu.    
    includeFileX();
    includeFileY();  
}

function draw(){
    fill(0,0,255)
    rect(0,height-25,width,25)
}

function goHome(){
    window.location.href = "index.html";
}