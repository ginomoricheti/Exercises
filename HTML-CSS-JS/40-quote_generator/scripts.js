// Get DOM elements.
const quote = document.getElementById('quote');
const author = document.getElementById('author');
// Api url.
const apiUrl = 'https://api.quotable.io/random';

// Principal function.

async function getQuote(url){
  // Getting the json.
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);

  // Modify the HTML documment.
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

// Calling the function in the first load.
getQuote(apiUrl)

// Twitter Button Share.
function tweet() {
  // Define the width and height of the popup window
  const width = 600;
  const height = 300;

  // Calculate the x and y coordinates to center the popup window
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  // Open the popup window with centered coordinates
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}`, 'Tweet Window', `width=${width}, height=${height}, left=${left}, top=${top}`);
}