var can = 0;
var ShowCan = document.getElementById("nbCanelés");
var CPC = document.getElementById("prodCan");
var ShowCPS = document.getElementById("CPS");
CPC.innerHTML=1+fours;
// ----- Déclaration des variables des fours -----
var fours = 0;
var prixFour = 25;
var prixUFour = 200;
var ShowPrixFour = document.getElementById("PrixFour");
var ShowPrixUfour = document.getElementById("PrixUfour");
var Ufour=1;
var btnFour = document.getElementById("Four");
var btnUFour = document.getElementById("Ufour");
btnFour.disabled = true;
btnUFour.disabled = true;
ShowPrixFour.innerHTML=prixFour;
ShowPrixUfour.innerHTML=prixUFour;
// ----- Déclaration des variables des employés -----
var employé = 0;
var prixEmployé = 100;
var prixUEmployé = 1000;
var ShowPrixEmployé = document.getElementById("PrixEmployé");
var ShowPrixUemployé = document.getElementById("PrixUemployé");
var CPSemployé=1;
var Uemployé=1;
var btnEmployé = document.getElementById("Employé");
var btnUEmployé = document.getElementById("Uemployé");
btnEmployé.disabled = true;
btnUEmployé.disabled = true;
ShowPrixEmployé.innerHTML=prixEmployé;
ShowPrixUemployé.innerHTML=prixUEmployé;



function Click(){
    can+=1+fours*Ufour;
    ShowCan.innerHTML=can;
    refreshBtn();
}

setInterval(Auto, 1000);
function Auto(){
    can+=employé*Uemployé;
    ShowCan.innerHTML=can;
    if (employé*Uemployé == 0){ ShowCPS.innerHTML=0; }
    else{ ShowCPS.innerHTML = employé*Uemployé;}
    refreshBtn();
}


function buyOven(){
    can-=prixFour;
    fours+=1;
    prixFour=Math.round(prixFour*1.15);
    ShowCan.innerHTML=can;
    ShowPrixFour.innerHTML=prixFour;
    CPC.innerHTML=1+fours*Ufour;
}

function payEmployee(){
    can-=prixEmployé;
    employé+=1;
    prixEmployé=Math.round(prixEmployé*1.15);
    ShowCan.innerHTML=can;
    ShowPrixEmployé.innerHTML=prixEmployé;
}

function BuyUFour(){
    Ufour*=2;
    can-=prixUFour;
    prixUFour=Math.round(prixUFour*8);
    ShowCan.innerHTML=can;
    ShowPrixUfour.innerHTML=prixUFour;
    CPC.innerHTML=1+fours*Ufour;
}

function BuyUEmployé(){
    Uemployé*=2;
    can-=prixUEmployé;
    prixUEmployé=Math.round(prixUEmployé*8);
    ShowCan.innerHTML=can;
    ShowPrixUemployé.innerHTML=prixUEmployé;
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
}