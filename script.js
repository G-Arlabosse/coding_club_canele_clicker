// ----- Déclaration des variables des fours -----
var fours = 0;
var prixFour = 25;
var prixUFour = 200;
var ShowPrixFour = document.getElementById("PrixFour");
var ShowPrixUFour = document.getElementById("PrixUFour");
var UFour=1;
var btnFour = document.getElementById("Four");
var btnUFour = document.getElementById("UFour");
btnFour.disabled = true;
btnUFour.disabled = true;
ShowPrixFour.innerHTML=prixFour;
ShowPrixUFour.innerHTML=prixUFour;
// ----- Déclaration des variables des employés -----
var employé = 0;
var prixEmployé = 100;
var prixUEmployé = 1000;
var ShowPrixEmployé = document.getElementById("PrixEmployé");
var ShowPrixUEmployé = document.getElementById("PrixUEmployé");
var CPSemployé=1;
var UEmployé=1;
var btnEmployé = document.getElementById("Employé");
var btnUEmployé = document.getElementById("UEmployé");
btnEmployé.disabled = true;
btnUEmployé.disabled = true;
ShowPrixEmployé.innerHTML=prixEmployé;
ShowPrixUEmployé.innerHTML=prixUEmployé;
// ----- Déclaration des variables des robots -----
var robots = 0;
var prixRobot = 900;
var prixURobot = 11000;
var ShowPrixRobot = document.getElementById("PrixRobot");
var ShowPrixURobot = document.getElementById("PrixURobot");
var CPSrobot=7;
var Urobot=1;
var btnRobot = document.getElementById("Robot");
var btnURobot = document.getElementById("URobot");
btnRobot.disabled = true;
btnURobot.disabled = true;
ShowPrixRobot.innerHTML=prixRobot;
ShowPrixURobot.innerHTML=prixURobot;
// ----- Déclaration des autres variable du jeu -----
var can = 0;
var ShowCan = document.getElementById("nbCanelés");
var CPC = document.getElementById("prodCan");
var ShowCPS = document.getElementById("CPS");
CPC.innerHTML=1+fours;



function Click(){
    can+=1+fours*UFour;
    ShowCan.innerHTML=can;
    refreshBtn();
}

setInterval(Auto, 1000);
function Auto(){
    can+=employé*UEmployé;
    ShowCan.innerHTML=can;
    ShowCPS.innerHTML=employé*UEmployé;
    refreshBtn();
}


function buyOven(){
    can-=prixFour;
    fours+=1;
    prixFour=Math.round(prixFour*1.3);
    ShowCan.innerHTML=can;
    ShowPrixFour.innerHTML=prixFour;
    CPC.innerHTML=1+fours*UFour;
}

function payEmployee(){
    can-=prixEmployé;
    employé+=1;
    prixEmployé=Math.round(prixEmployé*1.15);
    ShowCan.innerHTML=can;
    ShowPrixEmployé.innerHTML=prixEmployé;
}

function buyRobot(){
    can-=prixRobot;
    robot+=1;
    prixRobot=Math.round(prixRobot*1.15);
    ShowCan.innerHTML=can;
    ShowPrixRobot.innerHTML=prixRobot;
}

function BuyUFour(){
    UFour*=2;
    can-=prixUFour;
    prixUFour=Math.round(prixUFour*8);
    ShowCan.innerHTML=can;
    ShowPrixUFour.innerHTML=prixUFour;
    CPC.innerHTML=1+fours*UFour;
}

function BuyUEmployé(){
    UEmployé*=2;
    can-=prixUEmployé;
    prixUEmployé=Math.round(prixUEmployé*8);
    ShowCan.innerHTML=can;
    ShowPrixUEmployé.innerHTML=prixUEmployé;
}

function BuyUEmployé(){
    URobot*=2;
    can-=prixURobot;
    prixURobot=Math.round(prixURobot*8);
    ShowCan.innerHTML=can;
    ShowPrixURobot.innerHTML=prixURobot;
}

function refreshBtn(){
    if (can<prixFour){
        btnFour.disabled = true;
    }
    else{
        btnFour.disabled = false;
    }
    if (can<prixEmployé){
        btnEmployé.disabled = true;
    }
    else{
        btnEmployé.disabled = false;
    }
    if (can<prixRobot){
        btnRobot.disabled = true;
    }
    else{
        btnRobot.disabled = false;
    }
    if (can<prixUFour){
        btnUFour.disabled = true;
    }
    else{
        btnUFour.disabled = false;
    }
    if (can<prixUEmployé){
        btnUEmployé.disabled = true;
    }
    else{
        btnUEmployé.disabled = false;
    }
    if (can<prixURobot){
        btnURobot.disabled = true;
    }
    else{
        btnURobot.disabled = false;
    }
}