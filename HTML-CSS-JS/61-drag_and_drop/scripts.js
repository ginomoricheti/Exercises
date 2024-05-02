// Get DOM elements.
let lists = document.getElementsByClassName('list');
let leftBox = document.getElementById('left');
let rightBox = document.getElementById('right');

// Drag & Drop Function.

for(list of lists){
  list.addEventListener('dragstart', (e)=>{
    let selected = e.target;

    // FROM LEFT TO RIGHT
    rightBox.addEventListener('dragover', (e)=>{
      e.preventDefault();
    });
    
    rightBox.addEventListener('drop', (e)=>{
      rightBox.appendChild(selected);
      selected = null;
    });
    
    // FROM RIGHT TO LEFT
    leftBox.addEventListener('dragover', (e)=>{
      e.preventDefault();
    });
    
    leftBox.addEventListener('drop', (e)=>{
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}