// Get DOM elements.
let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

// Validating the name.
function validateName(){
  var name = document.getElementById('name').value;
  
  // Validate if the user write anything
  if(name.lenght === 0){
    nameError.innerHTML = 'Name is required';
    return false
  }
  
  // Validate if the user write corrects characters or write his full name
  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
    nameError.innerHTML = 'Write full name';
    return false
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true
}

function validatePhone() {
  var phone = document.getElementById('phone').value;

  // Validate if the user entered anything
  if (phone.length === 0) {
    phoneError.innerHTML = 'Phone is required';
    return false;
  }
  
  // Validate if the phone number has exactly 10 digits
  if (phone.length !== 10) {
    phoneError.innerHTML = 'Invalid phone number';
    return false;
  }
  
  // Validate if the phone number contains only digits
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Invalid phone number';
    return false;
  }
  
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// Validating the email.
function validateEmail(){
  var email = document.getElementById('email').value;

  if (email.length === 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = 'Invalid email';
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true
}


// Validating the message.
function validateMessage(){
  var message = document.getElementById('message').value;
  var minimum = 30;
  var left = minimum - message.length;
  
  if(left > 0){
    messageError.innerHTML = `${left} more characters required`;
    return false;
  }
  
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// Validating all inputs for submit

function validateForm(){
  if  (!validateName() ||
      !validatePhone() || 
      !validateEmail() || 
      !validateMessage()
      ){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please, fix the error to submit';

    setTimeout(()=>{
      submitError.style.display = 'none';
    }, 3000)
    
    return false
  }
}
