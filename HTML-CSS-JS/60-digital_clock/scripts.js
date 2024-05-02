// Get DOM elements.
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

// Others variables.
let currentTime = new Date();


// Clock function.
setInterval(()=>{

  hours.innerText = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
  minutes.innerText = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
  seconds.innerText = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();

}, 1000)
