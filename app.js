///shuffle function
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


///new board when page loads
function newGame(){
	cards = shuffle(cards)
	for (let i = 0; i < cards.length; i++){
		structure.innerHTML = '';
		[].forEach.call(cards, function(item){
			structure.appendChild(item);
		});
		cards[i].classList.remove("show", "open", "match", "disabled");
	}
}

////open/close cards on click
let opened = [];

function open () {
  $( '.card' ).on('click', function() {
    $( this ).addClass( 'show open' );
    
	opened.unshift(this);
	if (opened.length === 2){
		if (opened[0].firstElementChild.className === opened[1].firstElementChild.className){
			matched();
		} else {
			setTimeOut(function() {
			  setTimeout(unmatched(){
			   
			  
		
			},650);
			}
	}

      
  });
} 

////




 
/////matched cards
let match = [];

function matched() {
  //function open/close cards
	for (let i=0; i < 2; i++){
    	opened[i].classList.add('match');
        

    }
    
    opened = [];  
    
  
}
 /////unmatched cards
 
 function doSetTimeout(i) {
  setTimeout(function() { }, 650);
}
 
 function unmatched() {
	for (let i=0; i < 2; i++){
    	
    	        	opened[i].classList.remove('show', 'open', 'match');
    	
    }
    opened = [];   
}




//array of cards
let card = document.getElementsByClassName('card');
let cards = [...card];

///smth
const structure = document.querySelector('#structure');
console.log(structure);


///reload board on click
$('.restart').on('click', function reload (){
  newGame();
})

///new game on page load
document.body.onload = newGame();


//

open();

