// console.log('JS OK');

/* 
Data una lista della spesa, 
stampare in pagina gli elementi della lista individualmente 
con un ciclo while.
*/

// Prendo l'elemento dal Dom
const targetElement = document.getElementById('target')

// Creo un array con la lista della spesa
const shoppingList = [
    'latte',
    'pasta',
    'zucchine',
    'pane',
    'uova',
    'arance',
    'acqua'
]

// Utilizzando while: ----------------------------------------

let product = '';

let i = 0;

while(i < shoppingList.length) {
    product += `<li>${shoppingList[i]}</li>`;
    i++;
}

targetElement.innerHTML = product;



// Utilizzando for: ------------------------------------------

// let product = '';

// for (i = 0; i < shoppingList.length; i++) {
//     product += `<li>${shoppingList[i]}</li>`;
// }

// targetElement.innerHTML = product;