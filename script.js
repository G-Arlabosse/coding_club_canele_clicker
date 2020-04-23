var can = 0;
var fours = 0;
var prixFour = 25;
var employé = 0;
var prixEmployé = 100;
var showCan = document.getElementById("nbCanelés");
var btnFour = document.getElementById("Four");
var btnEmployé = document.getElementById("Employé");
var CPC = document.getElementById("prodCan");
var ShowPrixFour = document.getElementById("PrixFour");
var ShowPrixEmployé = document.getElementById("PrixEmployé");

btnFour.disabled = true;
btnEmployé.disabled = true;
ShowPrixFour.innerHTML=prixFour;
ShowPrixEmployé.innerHTML=prixEmployé;
CPC.innerHTML=1+fours;

function Click(){
    can+=1+fours;
    showCan.innerHTML=can;
    refreshBtn();
}

setInterval(Auto, 1000);
function Auto(){
    can+=employé;
    showCan.innerHTML=can;
    refreshBtn();
}

function buyOven(){
    can-=prixFour;
    fours+=1;
    prixFour=Math.round(prixFour*1.2);
    showCan.innerHTML=can;
    ShowPrixFour.innerHTML=prixFour;
    CPC.innerHTML=1+fours;
}

function payEmployee(){
    can-=prixEmployé;
    employé+=1;
    prixEmployé=Math.round(prixEmployé*1.2);
    showCan.innerHTML=can;
    ShowPrixEmployé.innerHTML=prixEmployé;
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
}