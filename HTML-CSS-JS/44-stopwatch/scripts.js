// Get DOM elements.
let displayTime = document.getElementById('display-time');
let buttonPlayPause = document.getElementById('play-pause');

// Game variables.
let [seconds, minutes, hours] = [0,0,0];
let timer = null;

// Stopwatch function.
function stopWatch(){
  seconds++;
  if(seconds == 60) {
    seconds = 0;
    minutes++;
    if(minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  // For adding a '0' in the clock when the number is less than 10.
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  displayTime.innerHTML = `${h}:${m}:${s}`;
}

// Function to start the counter.
function watchStart(){
  if(timer !== null){
    clearInterval(timer);
  }
  timer = setInterval(stopWatch,1000);
}

// Function to stop the counter.
function watchStop(){
  clearInterval(timer);
}

// Function to reset the counter.
function watchReset(){
  clearInterval(timer);
  [seconds, minutes, hours] = [0,0,0];
  displayTime.innerHTML = '00:00:00';
}