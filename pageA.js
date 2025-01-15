//Person E skriver sin kode her 
let C1 = 0
let C2 = 0
let C3 = 0
let C4 = 0
let C5 = 0
let finColor = 0
let coinCollect = 0
let ex = 450
let ey = 815
let bak = 0
let ey1 = 815
let bak1 = 0
let ey2 = 700
let bak2 = 0
let coinC1 = 255
let coinC2 = 255
let coinC3 = 255
let coinC4 = 255
let coinC5 = 255



//
//Lav en DEATH funktion, der resetter alt,
//Både coins, position, mm.
//



//player def fra Arne
let hop = false
let fald = false
var startJ =0
let still =false
let player ={
    x:10,
    y:800,
    width:40,
    height:75,

    VeloY:0,

    


};

function setup(){
    
    createCanvas(1900,900)
    let buttonBack = createButton('go back');
    buttonBack.position(width/2-22, 10);
    buttonBack.mousePressed(goHome);
    let buttonB = createButton('page B');
    buttonB.position(width/2-25, height/2-10);
    buttonB.mousePressed(changePageToB);
    let buttonWin = createButton('page Win');
    buttonWin.position(width-75, 250);
    buttonWin.mousePressed(changePageToWin);
    let buttonLose = createButton('page Lose');
    buttonLose.position(width-77.5, 300);
    buttonLose.mousePressed(changePageToLose);
    
    let box1 = [100,height-150,180,height-110]
    let box2 = [250,height-225,410,height-185]
    let box3 = [400,height-150,480,height-110]
    let box4 = [width/2+150,height-150,width/2+200,height-120]
    let box5 = [width/2+250,height-200,width/2+300,height-170]
    let box6 = [width/2+350,height-250,width/2+400,height-220]
    let box7 = [width/2+450,height-300,width/2+500,height-270]
    let box8 = [width/2+550,height-350,width/2+600,height-320]
    let box9 = [1750,200,1875,215]
    let box10 = [980,200,1555,215]
    let box11 = [0,200,920,215]
    let mbox1 = [1600,ey2,1700,ey+15]
    let platforms = [box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,mbox1]

    let ebox1 = [ex,ey,ex+30,ey+60]
    let ebox2 = [width/2-15,ey1,width/2+15,ey1+60]
    let trek1 = [565, height-40,15]
    let trek2 = [715, height-40,15]
    let trek3 = [365, 215,15]
    let enemies = [ebox1,ebox2,trek1,trek2,trek3]

    let coin1 = [350,height-325,30]
    let coin2 = [225,height-60,30]
    let coin3 = [width/2+180,height-60,30]
    let coin4 = [100,100,30]
    let coin5 = [width/2+540,height/2+200,30]
    let coins = [coin1,coin2,coin3,coin4,coin5]

    let exitblock = [1875,0,1900,215]
}

function draw(){
    function reset(){
        player.x = 10
        player.y = 795
        finColor = 0
    }
    background(200,130,255);
    fill(0,0,255)
    rect(0,height-25,width,25)
    rect(100,height-150,80,40)
    rect(250,height-225,160,40)
    rect(400,height-150,80,40)
    rect(width/2+150,height-150,50,30)
    rect(width/2+250,height-200,50,30)
    rect(width/2+350,height-250,50,30)
    rect(width/2+450,height-300,50,30)
    rect(width/2+550,height-350,50,30)
    rect(1750,200,125,15)
    rect(980,200,575,15)
    rect(0,200,920,15)
    rect(1600,ey2,100,15)
    if(bak2==0){
        ey2-=5
        if(ey2<100){
            bak2 = 1
        }
    }
    if(bak2==1){
        ey2+=5
        if(ey2>700){
            bak2 = 0
        }
    }



    fill(255,0,0)
    triangle(550, height-25, 580, height-25, 565, height-55)
    triangle(700, height-25, 730, height-25, 715, height-55)
    triangle(350, 200, 380, 200, 365, 170) 
    rect(ex,ey,30,60)   
    if(bak==0){
        ex-=2
        if(ex<100){
            bak = 1
        }
    }
    if(bak==1){
        ex+=22
        if(ex>450){
            bak = 0
        }
    }
    rect(width/2-15,ey1,30,60)
    if(bak1==0){
        ey1-=10
        if(ey1<0){
            bak1 = 1
        }
    }
    if(bak1==1){
        ey1+=10
        if(ey1>815){
            bak1 = 0
        }
    }
    if(coinCollect == 5){
        finColor = 255
    }
    

    //tegn player
    fill(130,255,0);
    rect(player.x, player.y, player.width, player.height);



if(hop==true){
    player.VeloY -=0.1
    still=false
}
if(fald==true){
    player.VeloY +=0.1
    still=false
}
if(still==true){
    player.VeloY =0
}
if (player.y-1<=900-player.height-25 && keyIsDown(32)){
    hop=true
    fald=false
    let StartJ = player.y
    console.log(startJ+"start")
}


if (startJ-player.y >= startJ-725 && hop == true){
    hop = false
    fald = true

}
if(fald==true&&player.y+11>=900-player.height-25){
still=true
fald=false
hop=false

}

player.y +=player.VeloY
console.log(hop+fald)

//if(sqrt((450-(player.x+20))**2+(815-(player.y+37.5))**2)<40){
//    reset();
//}
//if(sqrt((935-(player.x+20))**2+(700-(player.y+37.5))**2)<40){
//    reset();
//}
if(sqrt((565-(player.x+20))**2+(840-(player.y+37.5))**2)<25){
    reset();
}
if(sqrt((715-(player.x+20))**2+(840-(player.y+37.5))**2)<25){
    reset();
}
if(sqrt((365-(player.x+20))**2+(185-(player.y+37.5))**2)<25){
    reset();
}

//triangle(550, height-25, 580, height-25, 565, height-55)
    //triangle(700, height-25, 730, height-25, 715, height-55)
    //triangle(350, 200, 380, 200, 365, 170) 

if(sqrt((350-(player.x+20))**2+(575-(player.y+37.5))**2)<40){
    coinC1 = 100
    C1 = 1
}
if(sqrt((225-(player.x+20))**2+(840-(player.y+37.5))**2)<40){
    coinC2 = 100
    C2 = 1
}
if(sqrt((1130-(player.x+20))**2+(840-(player.y+37.5))**2)<40){
    coinC3 = 100
    C3 = 1
}
if(sqrt((100-(player.x+20))**2+(100-(player.y+37.5))**2)<40){
    coinC4 = 100
    C4 = 1
}
if(sqrt((1490-(player.x+20))**2+(650-(player.y+37.5))**2)<40){
    coinC5 = 100
    C5 = 1
}

coinCollect = C1+C2+C3+C4+C5



fill(coinC1,coinC1,0)
    circle(350,height-325,30)
    circle(350,height-325,20)
    fill(coinC2,coinC2,0)
    circle(225,height-60,30)
    circle(225,height-60,20)
    fill(coinC3,coinC3,0)
    circle(width/2+180,height-60,30)
    circle(width/2+180,height-60,20)
    fill(coinC4,coinC4,0)
    circle(100,100,30)
    circle(100,100,20)
    fill(coinC5,coinC5,0)
    circle(width/2+540,height/2+200,30)
    circle(width/2+540,height/2+200,20)

    fill(0,finColor,0)
    rect(1875,0,25,215)

    fill(255,255,0)
    textSize(50);
    text(coinCollect, width/2-33, 70)
    text("/5", width/2-4, 70)

    if(coinCollect == 5){
        if(sqrt((1887.5-(player.x+20))**2+(107.5-(player.y+37.5))**2)<30){
            changePageToWin();
        }
    }

if (keyIsDown(65)) {
    player.x -= 5;
  }

  if (keyIsDown(68)) {
    player.x += 5;
  }


}
    

function goHome(){
    window.location.href = "index.html";
}

function changePageToB(){
    window.location.href = "pageB.html";
}

function changePageToWin(){
    window.location.href = "pageWin.html";
}

function changePageToLose(){
    window.location.href = "pageLose.html";
}



//Moving platform wrong definition spot or wrong value updating point???