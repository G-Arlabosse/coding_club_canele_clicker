var can = 0;
var fours = 0;
var employé = 0;
var showCan = document.getElementById("nbCanelés");
var btnFour = document.getElementById("Four");
var btnEmployé = document.getElementById("Employé");

btnFour.disabled = true;
btnEmployé.disabled = true;

function Click(){
    can+=1+fours;
    strCan= toString(can);
    showCan.innerHTML=can;
}

setInterval(Auto, 1000);
function Auto(){
    can+=employé;
    showCan.innerHTML=can;
    refreshBtn();
}

function enableBtns(){
    if (can>24){
        btnFour.disabled = false;
    }
    if (can>99){
        btnEmployé.disabled = false;
    }
}

function buyOven(){
    can-=25;
    fours+=1;
    showCan.innerHTML=can;
}

function payEmployee(){
    can-=100;
    employé+=1;
    showCan.innerHTML=can;
}

function refreshBtn(){
    if (can<25){
        btnFour.disabled = true;
    }
    if (can<100){
        btnEmployé.disabled = true;
    }
}