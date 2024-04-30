// Get DOM elements.
let pass = document.getElementById('password');
let msg = document.getElementById('message');
let str = document.getElementById('strength');

// Constants for minimum password length and strength colors.
const minLength = 4;
const colors = {
  weak: 'red',
  regular: 'yellow',
  strong: 'green'
};

// Function to update password strength.
function updatePasswordStrength() {
  // Get the length of the password
  const length = pass.value.length;
  
  // Show or hide the message depending on whether there is text in the password field.
  if (length > 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }

  // Determine the password strength and update the message and corresponding color.
  if (length < minLength) {
    setStrength('weak');
  } else if (length < 8) {
    setStrength('regular');
  } else {
    setStrength('strong');
  }
}

// Function to set the message and color of the password strength.
function setStrength(strength) {
  str.innerHTML = strength + '.';
  str.style.color = colors[strength];
}

// Event triggered when text is entered in the password field.
pass.addEventListener('input', updatePasswordStrength);
