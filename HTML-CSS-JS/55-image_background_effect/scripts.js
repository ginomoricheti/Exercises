window.onload = function() {
  // Get DOM elements.
  var imgBox = document.querySelector('.img-box');
  var imgWrap = document.querySelector('.img-wrap');
  var ogImg = document.getElementById('original-img');
  var line = document.getElementById('line');

  // Check if the elements exist
  console.log('imgBox:', imgBox);
  console.log('imgWrap:', imgWrap);
  console.log('ogImg:', ogImg);
  console.log('line:', line);

  // Do static height for the original img.
  ogImg.style.width = imgBox.offsetWidth + 'px';

  // Other Variables.
  var leftSpace = imgBox.getBoundingClientRect().left;

  // Wrap effect function.
  imgBox.addEventListener('mousemove', function(e) {
    var boxWidth = (e.clientX - leftSpace) + 'px';
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
    
    console.log('Box width:', boxWidth); // Debugging: Log the box width
  });
}
