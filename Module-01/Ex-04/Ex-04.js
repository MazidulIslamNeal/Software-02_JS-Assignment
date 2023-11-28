'use strict';

let name = prompt(`What is your name?`);

let place = (Math.floor(Math.random() * 4) + 1); 
console.log(place);

switch(place) {
    case 1 :
        document.querySelector('.place').innerHTML = (`${name}!, you are Gryffindor!`);
        break;
    case 2:
        document.querySelector('.place').innerHTML = (`${name}!, you are Hufflepuff!`);
        break;
    case 3:
        document.querySelector('.place').innerHTML = (`${name}!, you are Ravenclaw!`);
        break;
    case 4:
        document.querySelector('.place').innerHTML = (`${name}!, you are Slytherin!`);
        break;
}
