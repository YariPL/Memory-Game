
let card = document.getElementsByClassName('card');//get all cards
let cards = [...card];// make an array of the cards
let opened = [];
let number = 0;
const structure = document.querySelector('#structure');
let match = [];


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
		cards[i].classList.remove("show", "open", "match");
	}
}

////open/close cards on click

function open () {
  $( '.card' ).on('click', function() {
    $( this ).addClass( 'show open' );
  number++;
	$('.moves').html(`<span>${number.valueOf()}</span>`);

	  opened.unshift(this);
	  if (opened.length === 2){
	  	if (opened[0].firstElementChild.className === opened[1].firstElementChild.className){
			matched();
	  	} else {
			  setTimeout(function(){
			   
			  unmatched();
		
			  },550);
			}
  	}

	});
} 

/////matched cards
function matched() {
	for (let i=0; i < 2; i++){
    	match.unshift(opened[i].classList.add('match'))
  }
  opened = [];  
  let modal = document.getElementById('myModal');
///if all matched open final screen and the number of moves
    if(match.length === 16) {
      modal.style.display = 'block';
      $('.win').append(`<div class='fnumber'>You finished in ${number} moves!</div>`);
      $('.win').append(`<div class='startButton'> Want to try again?</div><button class='button btn'>START</button>`);
    
      $('.btn').on('click',function() {
        modal.style.display = "none";
        newGame();

       });
    }
}
 /////unmatched cards
function unmatched() {
	for (let i=0; i < 2; i++){
    opened[i].classList.remove('show', 'open', 'match');
    }
    opened = [];   
}

///reload board on click
$('.restart').on('click', function reload (){
  newGame();
  number = 0; 
$('.moves').html(`<span>${number.valueOf()}</span>`);
})

open();
document.body.onload = newGame();