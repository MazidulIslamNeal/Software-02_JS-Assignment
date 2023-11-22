'use strict';

const people = parseInt(prompt(`How many people are attending?`));
let parts = [];
 
for (let i = 0; i < people; i++) {
    let name = prompt("Enter the names of participants:");
    parts.push(name);
}
parts.sort();

var el = document.getElementById('list');
var ol = document.createElement('ol');
el.appendChild(ol);
parts.forEach(function (part) {
  var f = document.createElement('li');
  f.appendChild(document.createTextNode(part));
  ol.appendChild(f);
});
