'use strict';

let show = prompt(`Write the show name you want to watch: `);

if (!show) {
  show = `bikbok`;
}
fetch('https://api.tvmaze.com/search/shows?q=' + show).
    then(response => response.json()).
    then(data => info(data));

const p = document.getElementById('tvMazeShow1');

function info(data) {
  //name
  document.getElementById('tvMazeShow').innerHTML = data[0]['show']['name'];
  //lnk
  const k = document.createElement('a');
  p.appendChild(k);
  const soo = document.createAttribute('href');
  soo.value = data[0]['show']['url'];
  document.querySelector('a').setAttributeNode(soo);
  const kim = document.createAttribute('tvMazeShow');
  // blank opens in new tab
  kim.value = '_blank';
  document.querySelector('a').setAttributeNode(kim);
  document.querySelector('a').innerHTML = data[0]['show']['url'];
  //poster
  const img = document.createElement('img');
  img.src = data[0]['show']['image']['medium'];
  img.alt = `Poster`;
  document.getElementById('tvMazeShow2').appendChild(img);
  //summery
  document.getElementById('tvMazeShow3').innerHTML = data[0]['show']['summary'];
}
