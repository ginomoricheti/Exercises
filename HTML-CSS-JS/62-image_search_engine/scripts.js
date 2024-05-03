// API Settings.
const apiKey = 'NLdG4UT0i-y6TPOPZ8Kp84QlLc62s9zc9bP75d07-kw';

// Get DOM elements.
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchRlt = document.getElementById('search-result');

// Other variables.
let keyword = '';
let page = 1;

// Function to fetch images from the API.
async function searchImages() {
  keyword = searchBox.value;
  const apiURL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}`;

  try {
    const response = await fetch(apiURL);

    // if (!response.ok) {
    //   // Handle specific error cases
    //   if (response.status === 404) {
    //     throw new Error('API endpoint not found');
    //   } else if (response.status === 403) {
    //     throw new Error('Unauthorized access - check your API key');
    //   } else {
    //     throw new Error('Network response was not ok');
    //   }
    // }

    const data = await response.json();

    if (page === 1) {
      searchRlt.innerHTML = '';
    }

    const results = data.results;
    results.forEach(result => {
      const image = document.createElement('img');
      image.src = result.urls.small;

      const imageLink = document.createElement('a');
      imageLink.href = result.links.html;
      imageLink.target = '_blank';
      imageLink.appendChild(image);

      searchRlt.appendChild(imageLink);
    });
  } catch (error) {
  //   console.error('Error fetching images:', error.message);
  //   searchRlt.innerHTML = `Error fetching images: ${error.message}`;
  // 
}}


// Event listener for form submission.
searchForm.addEventListener('submit', e => {
  e.preventDefault(); // Prevent default form submission behavior.
  page = 1; // Reset page to 1 when submitting the form.
  searchImages(); // Trigger image search.
});

// Event listener for window scroll to implement infinite scrolling.
window.addEventListener('scroll', () => {
  // Check if the user has scrolled to the bottom of the page.
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    page++; // Increment page number.
    searchImages(); // Load more images.
  }
});