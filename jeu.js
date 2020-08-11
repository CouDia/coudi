var montant = 100;
var perte =0;
function jouer() {
    var number = parseInt( document.getElementById("number").value);
    var mise = parseInt( document.getElementById("mise").value); 
    var gagnant = Math.round(Math.random() * 36);
   
    if (mise >=solde) {
        alert("solde insufisant");
    } 
    if else(solde==0){
        alert("seu khaliss diekhneu!!!")
    }
    else if (mise<=0) {
        alert("mise invalide");
    }
    else {

        if (number == gagnant) {
            alert("nombre gagnant  = " + gagnant + "     Vous avez gagné " + (mise + mise * 35) + "000 francs");
            montant+= (mise + mise* 35)
        }
        else if (gagnant == 0) {
            alert("nombre gagnant  = " + gagnant + "      Vous avez perdu! ");
            montant-=mise;
        }
        else if (number == "pair" && gagnant % 2 == 0) {
            alert("nombre gagnant  = " + gagnant + "       Vous avez gagné " + mise * 2 + " 000 francs");
            montant+=mise* 2;
        }
        else if (number == "impair" && gagnant % 2 !=0) {
            alert("nombre gagnant  = " + gagnant + "       Vous avez gagné " + mise * 2 + "000 francs");
            montant+=mise* 2;
        }
        else {
            alert("nombre gagnant  = " + gagnant + "       Vous avez perdu !!!");
            
            montant-= mise;
        }
    document.getElementById("solde").value = montant;
    document.getElementById("perte").value = perte;
    }
}