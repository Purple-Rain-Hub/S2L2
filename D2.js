/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1_es1 = 10;
let numero2_es1 = 5;

if (numero1_es1 > numero2_es1) {
  console.log("il primo numero è più grande");
}
else {
  console.log("il secondo numero è più grnade");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numeroIntero_es2 = 8;

if (numeroIntero_es2 === 5) {
  console.log("equal to 5");
}
else {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numeroDivisibile_es3 = 15;
let resto_es3 = numeroDivisibile_es3 % 5

if (resto_es3 == 0) {
  console.log("divisibile per 5");
}
else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero1_es4 = 8;
let numero2_es4 = 0;

if (numero1_es4 === 8 && numero2_es4 === 0 || numero2_es4 === 8 && numero1_es4 === 0) {
  console.log("uno dei due numeri è 8 e anche la loro somma/sottrazione è 8 ;)");
}
else if (numero1_es4 === 8 || numero2_es4 === 8) {
  console.log("uno dei due numeri è 8");
}
else if (numero1_es4 + numero2_es4 === 8 || numero1_es4 - numero2_es4 === 8) {
  console.log("la loro somma/sottrazione è 8");
}
else {
  console.log("niente 8 per te");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 30;

if (totalShoppingCart > 50) {
  console.log("spedizione gratuita yay, totale: ", totalShoppingCart);
}
else {
  console.log("totale: ", totalShoppingCart + 10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let scontoBlackFriday = totalShoppingCart - totalShoppingCart * 20 / 100;

if (scontoBlackFriday > 50) {
  console.log("spedizione gratuita yay, totale: ", scontoBlackFriday);
}
else {
  console.log("totale: ", scontoBlackFriday + 10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let es7numero1 = 1;
let es7numero2 = 2;
let es7numero3 = 3;

if (es7numero1 > es7numero2 && es7numero2 > es7numero3) {
  console.log("numero1, numero2, numero3");
}
else if (es7numero1 > es7numero3 && es7numero3 > es7numero2) {
  console.log("numero1, numero3, numero2");
}
else if (es7numero3 > es7numero2 && es7numero2 > es7numero1) {
  console.log("numero3, numero2, numero1");
}
else if (es7numero3 > es7numero1 && es7numero1 > es7numero2) {
  console.log("numero3, numero1, numero2");
}
else if (es7numero2 > es7numero3 && es7numero3 > es7numero1) {
  console.log("numero2, numero3, numero1");
}
else if (es7numero2 > es7numero1 && es7numero1 > es7numero3) {
  console.log("numero2, numero1, numero3");
}
else {
  console.log("due o più numeri sono uguali!");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let es8 = "numero";

if (typeof es8 == "string") {
  console.log("questa è una stringa");
}
else {
  console.log("questo è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let es9numero = 8;

if (es9numero % 2 == 0) {
  console.log("è pari");
}
else {
  console.log("è dispari")
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

let val = 4
if (val < 5) {
  console.log("Meno di 5");
}
else if (val < 10) {
  console.log("Meno di 10");
}
else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";

console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.splice(2,1)

console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let vuoto = [];

vuoto.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(vuoto);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

vuoto.splice(9,1, 100);

console.log(vuoto)
