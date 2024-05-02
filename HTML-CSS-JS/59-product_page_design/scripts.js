// Get DOM elements.
let img = document.getElementById('product-img');
let btn = document.getElementsByClassName('btn');

// Changing photo function.
btn[0].onclick = ()=>{
  img.src = '/HTML-CSS-JS/59-product_page_design/images/image1.png'
  for(bt of btn){
    bt.classList.remove('active');
  }
  this.classList.add('active');
}
btn[1].onclick = ()=>{
  img.src = '/HTML-CSS-JS/59-product_page_design/images/image2.png'
  for(bt of btn){
    bt.classList.remove('active');
  }
  this.classList.add('active');
}
btn[2].onclick = ()=>{
  img.src = '/HTML-CSS-JS/59-product_page_design/images/image3.png'
  for(bt of btn){
    bt.classList.remove('active');
  }
  this.classList.add('active');
}
