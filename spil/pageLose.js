let ex = 770
let ey = 0    
let bak = 0
function setup(){
    createCanvas(800,800);

    let buttonA = createButton('PLAY AGAIN?');
    buttonA.position(width/2-44, height/2);
    buttonA.mousePressed(goHome);
}


function draw(){
    background(255,0,0);
    fill(0)
    textSize(125)
    textAlign(CENTER, CENTER);
    text("GAME OVER",width/2,330)
    text("YOU LOSE!",width/2,500)

    fill(255,200,0)
    rect(ex,ey,30,60)   
    if(bak==0){
        ex-=10
        ey+=.1
        if(ex<0){
            bak = 1
        }
    }
    if(bak==1){
        ex+=10
        ey+=.1
        if(ex>770){
            bak = 0
        }
    }
}

function goHome(){
    window.location.href = "index.html";
}