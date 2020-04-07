var can = 0;
var fours = 0
var showCan = document.getElementById("nbCanelés");
var btnFour = document.getElementById("Four");

btnFour.disabled= true;

function Click(){
    can+=1+fours;
    strCan= toString(can);
    showCan.innerHTML=can;
}

function enableOven(){
    if (can>24){
        btnFour.disabled= false;
    }
}

function buyOven(){
    can-=25;
    if (can<25){
        btnFour.disabled= true;
    }
    fours+=1;
    showCan.innerHTML=can;
}