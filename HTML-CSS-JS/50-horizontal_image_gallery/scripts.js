// Get DOM elements.
let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');

// Scroll function.
scrollContainer.addEventListener('wheel', (e)=> {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = 'auto';
})

// Next/Prev Button Function.
backBtn.addEventListener('click', ()=> {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= 900;
})

nextBtn.addEventListener('click', ()=> {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += 900;
})