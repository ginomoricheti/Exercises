// Get DOM elements.
const inputText = document.getElementById('link');
const imgQR = document.getElementById('qr-image');

// API url.
const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

// Generate QR.
function getQR(){
  imgQR.src = `${apiUrl}${inputText.value}`;
  imgQR.style.display = 'block';
  inputText.value = '';
}
