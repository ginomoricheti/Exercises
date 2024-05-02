// Get DOM elements.
let number = document.getElementById('number');

// Others variables.
let counter = 0;

// Counter function.
setInterval(()=>{
  if (counter == 65){
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = `${counter}%`;
  }
},30);
