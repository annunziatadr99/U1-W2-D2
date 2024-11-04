/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 6;
const num2 = 12;
if (num1 > num2) {
  console.log("num1 è maggiore");
} else {
  console.log("num1 è minore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 !== 5) {
  console.log("not equal");
} else {
  console.log("great!");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num = 25;
if (num % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 16;
const num4 = 8;
if (num3 === 8 || num4 === 8 || num3 + num4 === 8 || num3 - num4 === 8) {
  console.log("il valore è 8");
} else {
  console.log("il valore non è 8");
}
// ------------ALTRO METODO--------------- //

if (num3 === 8 || num4 === 8) {
  console.log("uno dei due valori è 8");
} else if (num3 + num4 === 8) {
  console.log("l'addizione tra i due valori è 8");
} else if (num3 - num4 === 8) {
  console.log("la differenza tra i due valori è 8");
} else {
  console.log("nessun condizione è stata rispettata");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 49;

let ShippingCost = 0;
if (totalShoppingCart <= 50) {
  ShippingCost = 10;
}
let finalTotal = totalShoppingCart + ShippingCost;
console.log(finalTotal);
//-------------- altro metodo-----------
let totalShoppingCart2 = 47;

let ShippingCost2 = 10;

if (totalShoppingCart2 > 50) {
  console.log("spedizione gratuita");
} else {
  let finalTotal2 = totalShoppingCart2 + ShippingCost2;
  console.log("il totale è di" + " " + finalTotal2);
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let ShippingCost3 = 10;
let totalShoppingCart3 = 37;
totalShoppingCart3 = totalShoppingCart3 * 0.8;
if (totalShoppingCart3 > 50) {
  console.log("spedizione gratuita");
} else {
  let finalTotal3 = totalShoppingCart3 + ShippingCost3;
  console.log("il totale è di" + " " + finalTotal3);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 9;
let num6 = 5;
let num7 = 6;
let minimo = 0;
let medio = 0;
let massimo = 0;

if (num5 >= num6 && num5 >= num7) {
  massimo = num5;
} else if (num6 >= num5 && num6 >= num7) {
  massimo = num6;
} else {
  massimo = num7;
}
console.log(massimo);

if (num5 <= num6 && num5 <= num7) {
  minimo = num5;
} else if (num6 <= num5 && num6 <= num7) {
  minimo = num6;
} else {
  minimo = num7;
}
console.log(minimo);

medio = num5 + num6 + num7 - massimo - minimo;
console.log(medio);

console.log("Ordine decrescente:", massimo, medio, minimo);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let a = 10;
let b = "Maradona";
let c = false;
console.log(typeof 10, typeof "Maradona", typeof false);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let d = 13;
if (d % 2 == 0) {
  console.log((messaggio = d + "é pari"));
} else {
  console.log((messaggio = d + " è dispari"));
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 5) {
  console.log("Meno di 5");
}
if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
console.log(me);

me.city = "Toronto";
console.log(me.city);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nums = [];
console.log(nums);
nums.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(nums);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
nums.splice(9, 9, 100);
console.log(nums);
