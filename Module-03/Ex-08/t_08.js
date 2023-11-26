'use strict';

const bttn = document.querySelector('button');
const p = document.querySelector('#result');
const select = document.querySelector("#operation");



bttn.addEventListener('click', options);

function options() {
    var a = parseInt(document.querySelector('#num1').value);
    var b = parseInt(document.querySelector('#num2').value);


    if (select.value === 'add') {
        let result = a + b;
        p.innerHTML = result;
    }
    if (select.value === 'sub') {
        let result = a - b;
        p.innerHTML = result;
    }
    if (select.value === 'multi') {
        let result = a * b;
        p.innerHTML = result;
    }
    if (select.value === 'div') {
        let result = a / b;
        p.innerHTML = result;
    }
}
