// Get DOM elements.
const passwordBox = document.getElementById('password');


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