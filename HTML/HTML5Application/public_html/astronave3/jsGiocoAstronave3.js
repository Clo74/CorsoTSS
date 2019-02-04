/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.getElementById("astronave").style.left = (Math.random() * 100) + "px";
document.getElementById("astronave").style.top = (Math.random() * 100) + "px";

var lisColori = ["red","blue","green","yellow","brown"];
var indiceColori = 0;
//prendo l'elemento che risponde a .nord (qui dentro scrivo come nei css) #kdjk .fff.ff
document.querySelector(".nord").onclick = function () {
    muovi(document.querySelector("#astronave"),-5,0);
};
document.querySelector(".sud").onclick = function () {
    muovi(document.querySelector("#astronave"),+5,0);
};
document.querySelector(".est").onclick = function () {
    muovi(document.querySelector("#astronave"),0,+5);
};
document.querySelector(".ovest").onclick = function () {
    muovi(document.querySelector("#astronave"),0,-5);
};

document.querySelector(".pOk").onclick = function () {
//  document.querySelector("#campoAst").style.backgroundColor = lisColori[indiceColori];
//  indiceColori ++;
//  if (indiceColori > 4 ) {
//      indiceColori = 0;
//  }
    //sfrutto il fatto che chiedendo il resto di una divisione tra un numero e un secondo è sempre compreso tra 0 i il secondo numero
    document.querySelector("#campoAst").style.backgroundColor = lisColori[indiceColori++ % lisColori.length];
};

function muovi (oggetto,posTop,posLeft) {
    let y = parseFloat(oggetto.style.top);
    let x = parseFloat(oggetto.style.left);
    y += posTop;
    x += posLeft;
    
    if (y > 240)
        y = 240;
    if (y < 10 )
        y = 10;
    if (x < 10 )
        x = 10;

    
    oggetto.style.top = y + "px";
    oggetto.style.left = x + "px";
    oggetto.style.border = "dotted 1px blue";    
    
}