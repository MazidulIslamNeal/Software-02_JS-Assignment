'use strict';



const numbers = [3, 8, 7, 22, 19, 5];

function even(numbers) {
    const evenNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num % 2 === 0) {
            evenNumber.push(num);
        }
    }
    return evenNumber;
}


console.log(numbers);
console.log(even(numbers))
