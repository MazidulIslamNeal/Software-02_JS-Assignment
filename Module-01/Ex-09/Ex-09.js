'use strict';

const num = parseInt(prompt(`Enter the number to check Prime Number:`));

if (num === 1) {
    document.querySelector(`.prime`).innerHTML = (`1 is not a prime number!`);
} else if (num === 0) {
    document.querySelector(`.prime`).innerHTML = (`0 is neither prime nor composite`);
} else if (num === 2) {
    document.querySelector(`.prime`).innerHTML = (`2 is a prime number!`);
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            isPrime = false;
            break; 
        }
    }

    if (isPrime) {
        document.querySelector(`.prime`).innerHTML = (`${num} is a prime number.`);
    } else {
        document.querySelector(`.prime`).innerHTML = (`${num} is not a prime number.`);
    }
}
