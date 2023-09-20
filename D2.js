/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const a = 5
const b = 7
if (a > b) {
console.log('il numero maggiore è ' + a)
} else if (b > a) {
  console.log('il numero maggiore è ' + b)
} else {
  console.log(' i due numeri sono uguali')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const alfa = 10
if (alfa !== 5) {
  console.log('not equal')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è 
  perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const beta = 20
if (beta % 5 === 0) {
  console.log("divisibile per 5")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di 
  essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const x = 2
const y = 6
if (x === 8 || y === 8 || x + y === 8 || x - y === 8 || y - x === 8) {
  console.log('verificato')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in 
  una variabile "totalShoppingCart". C'è una promozione in corso: se il totale del carrello supera 50, 
  l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
const totalShoppingCart = 50
const spedizione = 10
if (totalShoppingCart > 50) {
console.log('costo ', totalShoppingCart)
} else {
  console.log('costo totale ', totalShoppingCart + spedizione)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart1 = 40
totalShoppingCart1 = totalShoppingCart1* 0.8
const spedizione1 = 10
if (totalShoppingCart1 <= 50) {
  console.log(totalShoppingCart1)
} else {
  console.log(totalShoppingCart1 +  spedizione1)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const npt = 1
const dreri = 5
const cheb = 9
if (npt > dreri && npt > cheb && dreri > cheb ) {
console.log( npt, dreri, cheb)
} else if (npt > dreri && npt > cheb && cheb > dreri) {
 console.log(npt, cheb, dreri)
}else if (cheb > dreri && cheb > npt && dreri > npt) {
  console.log(cheb, dreri, npt)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: 
  cerca su un motore di ricerca "typeof").
*/
const sacky = 'ciao'
if (typeof sacky === 'number') {
  console.log('numero')
} else {
  console.log('stringa')
} 
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const mamalova = 7
if (mamalova % 2 === 0) {
  console.log('num pari')
} else {
  console.log('num dispari')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7 */
  /*
  if (val < 5){
      console.log("Meno di 10");
    } else if (val < 10)  {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere 
  l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const arr = []
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(5)
arr.push(6)
arr.push(7)
arr.push(8)
arr.push(9)
arr.push(10)
console.log(arr)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
arr[9] = 100
console.log(arr)
/* SCRIVI QUI LA TUA RISPOSTA */
