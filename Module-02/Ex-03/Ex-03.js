'use strict';

let dogs = [];

for (let i = 0; i < 7; i++) {
    let name = prompt(`Enter the dog's name?`);
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

var el = document.getElementById('dog');
var ol = document.createElement('ul');
el.appendChild(ol);
dogs.forEach(function (dog) {
  var f = document.createElement('li');
  f.appendChild(document.createTextNode(dog));
  ol.appendChild(f);
});
