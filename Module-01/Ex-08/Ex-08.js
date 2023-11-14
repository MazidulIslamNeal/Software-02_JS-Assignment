'use strict';


let start = parseInt(prompt(`The year you want to start with:`));
let end = parseInt(prompt(`The year you want to end with:`));
let ul = document.createElement('ul');

while (start <= end) {
    if (start % 4 === 0 && start % 100 !== 0 || start % 400 === 0) {
        var li = document.createElement('li');
        li.innerHTML = start;
        ul.appendChild(li);
    }
    start++;
}
document.getElementById('list').appendChild(ul);
