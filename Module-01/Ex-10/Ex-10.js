'use strict';

function calculateProbability() {
    // Ask the user for the number of dice and the sum of eye numbers
    const numDice = parseInt(prompt('Enter the number of dice:'));
    const targetSum = parseInt(prompt('Enter the sum of eye numbers to find:'));

    // Validate input
    if (isNaN(numDice) || isNaN(targetSum) || numDice <= 0 || targetSum <= 0) {
        document.getElementById('result').innerHTML = 'Invalid input. Please enter positive integers.';
        return;
    }

    // Simulate rolling the dice for a certain number of repetitions
    const totalRepetitions = 10000; // You can adjust this value based on your preference
    let successfulOutcomes = 0;

    for (let i = 0; i < totalRepetitions; i++) {
        let sum = 0;
        for (let j = 0; j < numDice; j++) {
            // Generate a random number between 1 and 6 for each die
            const dieResult = Math.floor(Math.random() * 6) + 1;
            sum += dieResult;
        }

        // Check if the sum matches the target sum
        if (sum === targetSum) {
            successfulOutcomes++;
        }
    }

    // Calculate and display the probability
    const probability = (successfulOutcomes / totalRepetitions) * 100;
    const formattedProbability = probability.toFixed(2);

    document.getElementById('result').innerHTML = `Probability to get sum ${targetSum} with ${numDice} dice is ${formattedProbability}%`;
}
