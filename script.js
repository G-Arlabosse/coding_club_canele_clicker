// ----- Déclaration des variables des fours -----
var four = 0;
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
var prixUEmployé = 800;
var ShowPrixEmployé = document.getElementById("PrixEmployé");
var ShowPrixUEmployé = document.getElementById("PrixUEmployé");
var UEmployé=1;
var btnEmployé = document.getElementById("Employé");
var btnUEmployé = document.getElementById("UEmployé");
btnEmployé.disabled = true;
btnUEmployé.disabled = true;
ShowPrixEmployé.innerHTML=prixEmployé;
ShowPrixUEmployé.innerHTML=prixUEmployé;
// ----- Déclaration des variables des robots -----
var robot = 0;
var prixRobot = 900;
var prixURobot = 7200;
var ShowPrixRobot = document.getElementById("PrixRobot");
var ShowPrixURobot = document.getElementById("PrixURobot");
var URobot=1;
var btnRobot = document.getElementById("Robot");
var btnURobot = document.getElementById("URobot");
btnRobot.disabled = true;
btnURobot.disabled = true;
ShowPrixRobot.innerHTML=prixRobot;
ShowPrixURobot.innerHTML=prixURobot;
// ----- Déclaration des variables des jardins -----
var garden = 0;
var prixGarden = 8000;
var prixUGarden = 64000;
var ShowPrixGarden = document.getElementById("PrixGarden");
var ShowPrixUGarden = document.getElementById("PrixUGarden");
var UGarden=1;
var btnGarden = document.getElementById("Garden");
var btnUGarden = document.getElementById("UGarden");
btnGarden.disabled = true;
btnUGarden.disabled = true;
ShowPrixGarden.innerHTML=prixGarden;
ShowPrixUGarden.innerHTML=prixUGarden;
// ----- Déclaration des variables des laboratoires -----
var labo = 0;
var prixLabo = 47000;
var prixULabo = 376000;
var ShowPrixLabo = document.getElementById("PrixLabo");
var ShowPrixULabo = document.getElementById("PrixULabo");
var ULabo=1;
var btnLabo = document.getElementById("Labo");
var btnULabo = document.getElementById("ULabo");
btnLabo.disabled = true;
btnULabo.disabled = true;
ShowPrixLabo.innerHTML=prixLabo;
ShowPrixULabo.innerHTML=prixULabo;
// ----- Déclaration des autres variable du jeu -----
var can = 0;
var ShowCan = document.getElementById("nbCanelés");
var CPC = document.getElementById("prodCan");
var ShowCPS = document.getElementById("CPS");
CPC.innerHTML=1+four;


function Click(){
    can+=(1+four)*UFour;
    ShowCan.innerHTML=Math.round(can);
    refreshBtn();
}

setInterval(Auto, 50);
function Auto(){
    can+=(employé*UEmployé+robot*7*URobot+garden*45*UGarden+labo*260*ULabo)/20;
    ShowCan.innerHTML=Math.round(can);
    refreshBtn();
}

function buyOven(){
    can-=prixFour;
    four+=1;
    prixFour=Math.round(prixFour*1.3);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixFour.innerHTML=prixFour;
    CPC.innerHTML=(1+four)*UFour;
}

function payEmployee(){
    can-=prixEmployé;
    employé+=1;
    prixEmployé=Math.round(prixEmployé*1.15);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixEmployé.innerHTML=prixEmployé;
    ShowCPS.innerHTML=employé*UEmployé+robot*7*URobot+garden*45*UGarden+labo*260*ULabo;
}

function buyRobot(){
    can-=prixRobot;
    robot+=1;
    prixRobot=Math.round(prixRobot*1.15);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixRobot.innerHTML=prixRobot;
    ShowCPS.innerHTML=employé*UEmployé+robot*7*URobot+garden*45*UGarden+labo*260*ULabo;
}

function buyGarden(){
    can-=prixGarden;
    garden+=1;
    prixGarden=Math.round(prixGarden*1.15);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixGarden.innerHTML=prixGarden;
    ShowCPS.innerHTML=employé*UEmployé+robot*7*URobot+garden*45*UGarden+labo*260*ULabo;
}

function buyLabo(){
    can-=prixLabo;
    labo+=1;
    prixLabo=Math.round(prixLabo*1.15);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixLabo.innerHTML=prixLabo;
    ShowCPS.innerHTML=employé*UEmployé+robot*7*URobot+garden*45*UGarden+labo*260*ULabo;
}

function BuyUFour(){
    UFour*=2;
    can-=prixUFour;
    prixUFour=Math.round(prixUFour*8);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixUFour.innerHTML=prixUFour;
    CPC.innerHTML=(1+four)*UFour;
}

function BuyUEmployé(){
    UEmployé*=2;
    can-=prixUEmployé;
    prixUEmployé=Math.round(prixUEmployé*8);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixUEmployé.innerHTML=prixUEmployé;
    ShowCPS.innerHTML=employé*UEmployé+robot*7*URobot+garden*45*UGarden+labo*260*ULabo;
}

function BuyURobot(){
    URobot*=2;
    can-=prixURobot;
    prixURobot=Math.round(prixURobot*8);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixURobot.innerHTML=prixURobot;
    ShowCPS.innerHTML=employé*UEmployé+robot*7*URobot+garden*45*UGarden+labo*260*ULabo;
}

function BuyUGarden(){
    UGarden*=2;
    can-=prixUGarden;
    prixUGarden=Math.round(prixUGarden*8);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixUGarden.innerHTML=prixUGarden;
    ShowCPS.innerHTML=employé*UEmployé+robot*7*URobot+garden*45*UGarden+labo*260*ULabo;
}

function BuyULabo(){
    ULabo*=2;
    can-=prixULabo;
    prixULabo=Math.round(prixULabo*8);
    ShowCan.innerHTML=Math.round(can);
    ShowPrixULabo.innerHTML=prixULabo;
    ShowCPS.innerHTML=employé*UEmployé+robot*7*URobot+garden*45*UGarden+labo*260*ULabo;
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
    if (can<prixGarden){
        btnGarden.disabled = true;
    }
    else{
        btnGarden.disabled = false;
    }
    if (can<prixLabo){
        btnLabo.disabled = true;
    }
    else{
        btnLabo.disabled = false;
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
    if (can<prixUGarden){
        btnUGarden.disabled = true;
    }
    else{
        btnUGarden.disabled = false;
    }
    if (can<prixULabo){
        btnULabo.disabled = true;
    }
    else{
        btnULabo.disabled = false;
    }
}