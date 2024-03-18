//somma//

let somma = 100 + 50;
document.getElementById("somma").innerHTML = somma; //stampare su html//
console.log(somma); //stampare in console//

//variabile//

let x = 12;
document.getElementById("variabile").innerHTML = x;
console.log(x);

//nome//

let name = "Vincenzo";
document.getElementById("Vincenzo").innerHTML = name;
console.log(name);

//negativo//

let z = 12;
let negativo = 4 - z;
document.getElementById("sottrazione").innerHTML = negativo;
console.log(negativo);

/* Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).*/

let name1 = "jhon";
let name2 = "Jhon";
if (name1 === name2) {
  document.getElementById("name").innerHTML = name1 + " è uguale " + name2;
  console.log("Sono uguali!");
} else {
  document.getElementById("name").innerHTML = name1 + " è diverso " + name2;
  console.log("Non uguali!");
}

let name3 = name1.toLowerCase(); /* let name3 variavile */
let name4 = name2.toLowerCase(); /*name2.toLowerCase è la funzione della variavile che rende le stringhe minuscole*/
if (name3 === name4) {
  document.getElementById("name2").innerHTML = name3 + " è uguale " + name4;
  console.log("Sono uguali!");
} else {
  /* if verifica la condizione mentre else la controcondizione */
  document.getElementById("name2").innerHTML = name3 + " è diverso " + name4;
  console.log("Non uguali!");
}

function bottoneStringa() {
  let element = document.getElementById("stringa");
  /* element.classList.add("stringa"); /*aggiunge classe stringa */
  /* element.classList.remove("stringa"); /*rimuove classe stringa */
  element.classList.toggle("stringa"); /*rimuove/agginge classe stringa se la tiene */
}

function bottoneBoolean() {
  let element = document.getElementById("boolean");
  element.classList.toggle("boolean");
}

function bottoneNumber() {
  let element = document.getElementById("number");
  element.classList.toggle("number");
}

function bottoneData() {
  let element = document.getElementById("data");
  element.classList.toggle("data");
}

function bottoneNull() {
  let element = document.getElementById("null");
  element.classList.toggle("null");
}
