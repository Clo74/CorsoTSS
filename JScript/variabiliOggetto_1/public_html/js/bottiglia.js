/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Bottiglia (marca, capacita, qta_corrente) {
    this.marca = marca;
    this.capacita = capacita;
    this.qta_corrente = qta_corrente;
    this.colore = "azure";
    this.bevo = function (quanto){
        let ris = 0;
        //usando il - i numeri testo vengono trasformati in numeri numeri
        if ((this.qta_corrente-quanto)>=0) {
            this.qta_corrente = this.qta_corrente - quanto;
            return quanto;
        } else {
            
        }
        //buona regola far ritornare cosa ha fatto la function in questo caso quanto ho bevuto
        
    };
    this.stato = function(){
        let ris = "";
        //sono una bottiglia sant'anna di capacita 100 e me ne rimangono 60
        ris = "sono una bottiglia "+ this.marca + " di capacità " + this.capacita + " me ne rimangono " + this.qta_corrente;
        return ris;
    };

}

//var bot = new Bottiglia("santanna",100,100);
//bot.bevo (60);