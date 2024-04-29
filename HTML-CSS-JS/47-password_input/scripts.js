// Get DOM elements.
let imgPassword = document.getElementById('show-hide');
let inputPassword = document.getElementById('password');
const passwordBox = document.getElementById('gen-password');

// Characters variables.
const length = 15;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = upperCase.toLowerCase();
const symbols = '!@#$%&()*_=+-/<>~|';
const numbers = '0123456789';
const allChars = upperCase + lowerCase + symbols + numbers

// Function for generate password.
function createPassword(){
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password

}

// Function for copy password.
function copyPassword(){
  passwordBox.select();
  document.execCommand('copy');
  passwordBox.value = '';
}

// Show/Hide Password.
function showHidePassword(){
  if(inputPassword.type === 'password'){
    inputPassword.type = 'text';
    imgPassword.src = '/HTML-CSS-JS/47-password_input/images/eye-close.png';
  } else {
    inputPassword.type = 'password';
    imgPassword.src = '/HTML-CSS-JS/47-password_input/images/eye-open.png';
  }
}