'use strict';


let rolls = [];
const ul = document.createElement('ul');
let side = prompt(`how many sides do you want?`)

function rolling(side) {
    return Math.floor(Math.random() * side) +1;
}

while (rolls.includes(side) !== true) {
    let rollin = rolling();
    rolls.push(rollin);
    ul.innerHTML += `<li> ${rollin} </li>`;
    }


document.body.appendChild(ul);
