const structure = document.querySelector('#structure')
console.log(structure);
  structure.addEventListener('click', function (event) {
  if(event.target.nodeName === 'LI') {
    
    event.target.setAttribute('style', 'width:500px');  
  } else{
    console.log('fuuccckkkkk');
  }
});