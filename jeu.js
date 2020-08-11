var montant = 100;
var perte =0;
function jouer() {
    var number = parseInt( document.getElementById("number").value);
    var mise = parseInt( document.getElementById("mise").value); 
    var gagnant = Math.round(Math.random() * 36);
   

   if (mise > 100) {
        alert("solde insufisant");
    } 
    else if (mise<=0) {
        alert("mise invalide");
    }
    else if (solde == 0) {
        alert("VOUS AVEZ ECHOUE !!!")
    }

    else {
        montant -= mise;

        if (number == gagnant) {
            alert("nombre gagnant  = " + gagnant + "     Vous avez gagné " + (mise + mise * 35) + "000 francs");
            montant += (mise + mise * 35)
        }
        else if (gagnant == 0) {
            alert("nombre gagnant  = " + gagnant + "      Vous avez perdu "+ mise + "000 francs");
           
            perte += mise;
        }
        else if (number == "pair" && gagnant % 2 == 0) {
            alert("nombre gagnant  = " + gagnant + "       Vous avez gagné " + mise * 2 + " 000 francs");
            montant += (mise * 2);

        }
        else if (number == "impair" && gagnant % 2 ==1) {
            alert("nombre gagnant  = " + gagnant + "       Vous avez gagné " + mise * 2 + "000 francs");
            montant += (mise * 2);
        }
        else {
            alert("nombre gagnant  = " + gagnant + "       Vous avez perdu "+ mise + "000 francs");
            
            perte += mise;
        }
    }
    
    document.getElementById("solde").value = montant;
    document.getElementById("perte").value = perte;
}