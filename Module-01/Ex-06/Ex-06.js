'use strict';

const answer = confirm(`Should I calculate the square root?`);

if (answer === true) {
    const number = parseFloat(prompt(`Provide a number!`));

    if (!isNaN(number)) {
        if (number >= 0) {
            const root = Math.sqrt(number);
            document.querySelector(`.root`).innerHTML = (`The square root of that number is: ${root}.`);
        } else {
            document.querySelector(`.root`).innerHTML = (`The square root of a negative number is not defined!`);
        }
    } else {
        document.querySelector(`.root`).innerHTML = (`Invalid input. Please enter a valid number.`);
    }
} else {
    document.querySelector(`.root`).innerHTML = (`The square root is not calculated.`);
}
