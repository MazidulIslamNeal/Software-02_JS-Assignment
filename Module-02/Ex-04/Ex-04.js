'use strict';

let numbers = [];
let number = 1

for (let i = 0; number > 0; i++) {
    number = parseInt(prompt("Enter a number until zero:"));
    numbers.push(number);
}

numbers.sort(function (a, b) { return b - a; });
console.log(numbers);
