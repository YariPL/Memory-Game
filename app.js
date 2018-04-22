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

//array of cards
let card = document.getElementsByClassName('card');
let cards = [...card];

///smth
const structure = document.querySelector('#structure');
console.log(structure);



///reload board
$('.restart').on('click', function reload (){
  newGame();
})

///new game on page load
document.body.onload = newGame();
