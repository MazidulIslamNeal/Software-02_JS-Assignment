'use strict';

let numbers = [];

while (true) {
    let number = parseInt(prompt("Enter a number:"));
    if (numbers.includes(number)) {
        numbers.sort(function (a, b) { return a - b; });
        console.log(numbers);
        break;
    }
    else {
        numbers.push(number);
    }
}
