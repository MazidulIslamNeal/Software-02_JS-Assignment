'use strict';


const p = document.querySelector('p');


p.addEventListener('mouseover', over);
p.addEventListener('mouseout', out);


function over() {
    document.getElementById('target').src = 'img/picB.jpg';
}

function out() {
    document.getElementById('target').src = 'img/picA.jpg';
}
