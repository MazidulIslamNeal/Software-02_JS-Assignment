'use strict';

let show = prompt(`Write the show name you want to watch: `);

if (!show) {
    show = `bikbok`;
}
fetch('https://api.tvmaze.com/search/shows?q=' + show)
    .then(response => response.json())
    .then(data => displayResults(data));

const resultsContainer = document.getElementById('results');

function displayResults(data) {
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Display information for each TV series
    data.forEach(tvShow => {
        // Create an article element to hold the TV series information
        const article = document.createElement('article');

        // Display the name in an <h2> element
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = tvShow.show.name;
        article.appendChild(nameHeading);

        // Display the link to details in a <div> element
        const detailsDiv = document.createElement('div');
        detailsDiv.innerHTML = `<strong>Details: </strong><a href="${tvShow.show.url}" target="_blank">Link</a>`;
        article.appendChild(detailsDiv);

        // Display the medium image with <img> element (using optional chaining)
        const imageUrl = tvShow.show.image?.medium || 'placeholder-image.jpg'; // Use a placeholder if no image is available
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = tvShow.show.name;
        article.appendChild(imageElement);

        // Display the summary in a <div> element
        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = tvShow.show.summary;
        article.appendChild(summaryDiv);

        // Append the article to the results container
        resultsContainer.appendChild(article);
    });
}
