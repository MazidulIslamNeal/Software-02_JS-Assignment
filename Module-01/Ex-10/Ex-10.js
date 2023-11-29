'use strict';

function calculateProbability() {
    const numDice = parseInt(prompt('Enter the number of dice:'));
    const targetSum = parseInt(prompt('Enter the sum of eye numbers to find:'));

    if (isNaN(numDice) || isNaN(targetSum) || numDice <= 0 || targetSum <= 0) {
        document.getElementById('result').innerHTML = 'Invalid input. Please enter positive integers.';
        return;
    }

    const totalRepetitions = 10000; 
    let successfulOutcomes = 0;

    for (let i = 0; i < totalRepetitions; i++) {
        let sum = 0;
        for (let j = 0; j < numDice; j++) {
            const dieResult = Math.floor(Math.random() * 6) + 1;
            sum += dieResult;
        }
        if (sum === targetSum) {
            successfulOutcomes++;
        }
    }
    const probability = (successfulOutcomes / totalRepetitions) * 100;
    const formattedProbability = probability.toFixed(2);

    document.getElementById('result').innerHTML = `Probability to get sum ${targetSum} with ${numDice} dice is ${formattedProbability}%`;
}
