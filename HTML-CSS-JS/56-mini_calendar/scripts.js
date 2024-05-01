// Get DOM elements.
const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

// Game variables.
const today = new Date();

console.log(today);

date.innerHTML = (today.getDate() < 10 ? '0':'') + today.getDate();
day.innerHTML = today.getDDay();
month.innerHTML = today.getDMonth();
year.innerHTML = today.getYear();