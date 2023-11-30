'use strict';

let show = prompt(`Write the show name you want to watch: `)

// error handler when prompt is null
if (!show) {
    show = `bikbok`;
}
fetch('https://api.tvmaze.com/search/shows?q=' + show).

    then(response => response.json()).
    then(data => info(data));

const p = document.getElementById('tvMazeShow');
function info(data) {
    console.log(`Name of the show:`)
    console.log(data[0]['show']['name']);
    console.log(`Show link:`)
    console.log(data[0]['show']['url']);
    console.log(`Show summary:`)
    console.log(data[0]['show']['summary']);
    console.log(`Poster:`)
    console.log(data[0]['show']['image']['medium']);
}
