// Others variables.
let countDownDate = new Date('September 15, 2024 00:00:00').getTime();

// Counter Function
let x = setInterval(()=>{
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let d = days < 10 ? '0' + days : days;
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('days').innerHTML = d;
  document.getElementById('hours').innerHTML = h;
  document.getElementById('minutes').innerHTML = m;
  document.getElementById('seconds').innerHTML = s;

}, 1000);
