// API Settings.
const apiKey = 'NLdG4UT0i-y6TPOPZ8Kp84QlLc62s9zc9bP75d07-kw';

// Get DOM elements.
let searchForm = document.getElementById('search-form');
let searchBox = document.getElementById('search-box');
let searchRlt = document.getElementById('search-result');
let btnMore = document.getElementById('show-more');

// Others vars.
let keyword = '';
let page = 1;


// Fetching the api.
async function searchImages(){
  keyword = searchBox.value;
  const apiURL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}`;

  const response = await fetch(apiURL);
  const data = await response.json();

  if(page === 1){
    searchRlt.innerHTML = '';
  }

  const results = data.results;

  // Showing the Images.
  results.map((result)=>{
    const image = document.createElement('img');
    image.src = result.urls.small;

    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';

    imageLink.appendChild(image);
    searchRlt.appendChild(imageLink);

    // btnMore.style.display = 'block';
  });

// console.log(data); // Testing.
}

// Doing the search.
searchForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  page = 1;
  searchImages();

});

// btnMore.addEventListener('click', ()=>{
//   page ++;
//   searchImages();
// });

// Charging more photos
window.addEventListener('scrollend',()=>{
  page ++;
  searchImages();
});
