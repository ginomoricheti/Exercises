// Get DOM elements.
let selectField = document.getElementById('select-field');
let selectText = document.getElementById('select-text');
let arrowIcon = document.getElementById('arrow');
let list = document.getElementById('list');
let options = document.getElementsByClassName('options');

// Changing the display text function.
for (option of options) {
  option.onclick = (event) => {
    selectText.innerHTML = event.target.textContent;
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
  };
}

// Hide/Unhide list function.
selectField.onclick = ()=>{
  list.classList.toggle('hide');
  arrowIcon.classList.toggle('rotate');
}
