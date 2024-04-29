// Get DOM elements.
let imgIcon = document.getElementById('light-dark-theme');

// Game variables.

imgIcon.onclick = ()=>{
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains('dark-theme')){
    imgIcon.src = '/HTML-CSS-JS/48-dark_mode/images/sun.png';
  } else {
    imgIcon.src = '/HTML-CSS-JS/48-dark_mode/images/moon.png';
  };
}
