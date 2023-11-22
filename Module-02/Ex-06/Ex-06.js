'use strict';


let rolls = [];
const ul = document.createElement('ul');

function rolling() {
    return Math.floor(Math.random() * 6) +1;
}

while (rolls.includes(6) !== true) {
    let rollin = rolling();
    rolls.push(rollin);
    ul.innerHTML += `<li> ${rollin} </li>`;
    }


document.body.appendChild(ul);
