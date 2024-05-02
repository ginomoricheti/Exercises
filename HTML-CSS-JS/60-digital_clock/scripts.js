// Get DOM elements.
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

// Clock function.
setInterval(()=>{
  let currentTime = new Date();
  
  hours.innerText = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
  minutes.innerText = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
  seconds.innerText = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
},1000);