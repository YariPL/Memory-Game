
const structure = document.querySelector('#structure');
let arr = [];
    
    structure.addEventListener('click', function (event) {
        if(event.target.nodeName === 'LI') {
       event.target.classList.add('show', 'open');
         
          
          if(arr[0]===event.target.innerHTML || arr.length <1){
              arr.unshift(event.target.innerHTML);
              } else {
            event.target.classList.remove('show', 'open');
          }
        }
    console.log(arr);
    });

