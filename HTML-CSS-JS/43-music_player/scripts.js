// Get DOM elements.
let progress = document.getElementById('progress');
let song = document.getElementById('song');
let controlIcon = document.getElementById('control-icon');

// Others variables.

// Matching the progress bar with the song.
song.onloadedmetadata = ()=>{
  progress.max = song.duration;
  progress.value = song.currentTime;
}

// Play Pause Function.
function playPauseSong(){
  if(controlIcon.classList.contains('fa-pause')){
    song.pause();
    controlIcon.classList.remove('fa-pause');
    controlIcon.classList.add('fa-play');
  } else {
    song.play()
    controlIcon.classList.remove('fa-play');
    controlIcon.classList.add('fa-pause');
  }
}

// Progress bar.
if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime;
  }, 500);
}

// Moving the time song in the progress bar.
progress.onchange = ()=>{
  song.play();
  song.currentTime = progress.value
  controlIcon.classList.remove('fa-play');
  controlIcon.classList.add('fa-pause');
}