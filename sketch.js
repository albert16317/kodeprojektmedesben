let ex = 0
let ey = 715
let bak = 0
function setup(){
    createCanvas(800,800);

    let buttonA = createButton('START');
    buttonA.position(width/2-25, height/2-50);
    buttonA.mousePressed(changePageToA);

    let buttonB = createButton('page B');
    buttonB.position(width/2-25, height/2-10);
    buttonB.mousePressed(changePageToB);
}


function draw(){
    background(160,130,255);
    fill(0)
    textSize(60)
    textAlign(CENTER, CENTER);
    text("Platformer Game Name",width/2,150)

    fill(0,0,255)
    rect(0,height-25,width,25)
    fill(255,0,0)
    rect(ex,ey,30,60)   
    if(bak==0){
        ex-=2
        if(ex<0){
            bak = 1
        }
    }
    if(bak==1){
        ex+=2
        if(ex>770){
            bak = 0
        }
    }
}

function changePageToA(){
    window.location.href = "pageA.html";
}

function changePageToB(){
    window.location.href = "pageB.html";
}