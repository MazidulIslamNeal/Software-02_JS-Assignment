'use strict';


let array = [`Root`, `nut`, `veggie`, `sausage`];
let result = '';


function concatenate(array) {
    for (let i = 0; i < array.length; i++)
        result = result.concatenate(array[i]);
    return result;
}


document.querySelector(`.list`).innerHTML = concatenate(array);
