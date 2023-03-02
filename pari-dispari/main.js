'use strict';
/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*****
 * Function
 */

function getRndInteger(min = 1, max = 5) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log('non viene eseguito');
}

function isEven(number){
    //restituisce true se il numero è pari
    //false se il numero è dispari

    // if(number % 2 === 0){
    //     return true;
    // } else {
    //     return false;
    // }

    if(number % 2 === 0){
        return true;
    }

    return false;

}


function sumNumbers(num1, num2){
    return num1 + num2;
}


/****
 * Main
 */

const userChoise = prompt('Scegli pari o dispari');
const userNumber = Number(prompt('Inserisci un numero da 1 a 5'));
const cpuNumber = getRndInteger(1, 5);//funzione che genera un numero random da 1 a 5

const sum = sumNumbers(userNumber,cpuNumber);
const result = isEven(sum);

if((userChoise === 'pari' && result === true) || (userChoise === 'dispari' && result === false)){
    console.log('Utente vince');
} else {
    console.log('Utente perde');
}


