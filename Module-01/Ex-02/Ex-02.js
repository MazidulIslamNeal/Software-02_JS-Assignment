'use strict';

let name = prompt('Enter your name:');
document.querySelector(`.greet`).innerHTML = (`Hello, ${name}!`);
