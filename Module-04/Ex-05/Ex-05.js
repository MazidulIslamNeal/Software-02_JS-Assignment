// Make the API request
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    // Print only the joke to the console
    console.log(data.value);
  })
  .catch(error => console.error('Error:', error));
