'use strict';

const roll = parseInt(prompt(`How many times do you want to roll the dice?`));

let sum = 0;
for (let i = 1; i <= roll; i++) {
    let dice = (Math.floor(Math.random() * 6) + 1); 
    sum = sum + dice;
    document.querySelector(`.roll`).innerHTML = (`The sum after rolling the dice for ${roll} times is: ${sum}.`);
}
