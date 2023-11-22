'use strict';

let num_of_candidates = prompt('Enter the number of candidates:');

let candidates = [];
append_candidates(num_of_candidates);

let candidates_array = [];

function createCandidate(num_of_candidate) {
  let cand_name = prompt('Enter the name of the candidate number ' +
    num_of_candidate + ':');
  let votes = 0;
  return {
    cand_name,
    votes
  };
}

function append_candidates(num_of_candidates) {
  for (let i = 1; i <= num_of_candidates; i++) {
    let candidate = createCandidate(i);
    candidates.push(candidate);
  }
}

let num_of_voters = prompt('Enter the number of voters:');

for (let j = 1; j <= num_of_voters; j++) {
  let selected_candidate = prompt('Enter the name. Vote for the candidate from the list: ' +
    candidates.map(candidate => candidate.cand_name).join(', '));

  if (selected_candidate === '') {
    continue;
  } else {
    let candidateIndex = candidates.findIndex(candidate =>
      candidate.cand_name.toLowerCase() ===
      selected_candidate.toLowerCase());

    if (candidateIndex !== -1) {
      candidates[candidateIndex].votes += 1;
    } else {
      console.log('Invalid candidate name: ' + selected_candidate);
    }
  }
}

candidates.sort((a, b) => b.votes - a.votes);
results_to_console();

function results_to_console() {
  console.log('The winner is ' + candidates[0].cand_name + ' with ' +
    candidates[0].votes + ' votes.');
  console.log('Results: ');
  for (let i = 0; i < num_of_candidates; i++) {
    console.log(candidates[i].cand_name + ': ' + candidates[i].votes + ' votes');
  }
}
