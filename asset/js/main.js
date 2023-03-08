
/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 
*/

// strumenti

// prompt
// let / const
// operation
// division
// modulus

// chiedere età e i km da percorrere.
const userAge = prompt("Quale è la tua età?");
const kmTravel = prompt("Quanti km dovrai percorrere?");

// caricare consol.log
console.log(userAge);
console.log(kmTravel);

// Calclare il prezzo del biglietto.
const priceTiket = kmTravel * 0.21;
console.log(priceTiket);


const endPrice = ()
// va applicato uno sconto del 20% per i minorenni
// applicare sconto se minorenne 
if (userAge > 18 ) { 
    endPrice = priceTiket * 0,8 
} else if (userAge <= 18) {
    endPrice = priceTiket 
}


// applicare sconto per over 65.
//stampare il prezzo in forma decimale.
