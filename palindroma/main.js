'use strict'

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*******
 * Function
 */

function isPalindrome(parola) {

    // versione con parola invertita

    // let nuovaParola = '';
    // for(let i = parola.length - 1; i >=0; i--){
    //     nuovaParola += parola[i];
    // }

    // if(nuovaParola === parola){
    //     return true;
    // } 

    // return false;


    //versione con 2 indici

    let x = 0;
    let y = parola.length - 1 // 3
    while(x < y){
        if(parola[x] !== parola[y]){
            return false;
        }
        x++;
        y--;
    }
    return true;
}


/*******
 * Main - esecuzione del programma
 ******/

const parola = prompt('Inserisci una parola');
console.log(isPalindrome(parola));

console.log(isPalindrome('i topi non avevano nipoti'));
console.log(isPalindrome('pippo'));
console.log(isPalindrome('osso'));
console.log(isPalindrome('anna'));
console.log(isPalindrome('cane'));







