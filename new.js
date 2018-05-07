//collect all cards an make an array of them(elements)
let card = document.getElementsByClassName('card');
let cards = [...card];
//created arrays for opened/matched cards
let opened = [];
let matched = [];
//take the whole grid
const structure = document.querySelector('#structure');
//number value for moves counter
let number = 0;
//timer

//stars

//shuffle function
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
//create a new grid using shuffle function
function newGrid(){
	cards = shuffle(cards)
	for (let i = 0; i < cards.length; i++){
		structure.innerHTML = '';
		[].forEach.call(cards, function(item){
			structure.appendChild(item);
		});
		cards[i].classList.remove("show", "open", "match");
	}
}

//open function

function openCard () {
	$('.card').on('click', function(){


		$( this ).addClass('show open');
		number ++;
		$('.moves').html(`<span>${number.valueOf()}</span>`);

		if(opened.length === 0){
			opened.push(this);
		}else if(opened.length === 1 && this.firstElementChild.className === opened[0].firstElementChild.className ){
			opened.push(this);
			opened[0].classList.add('match');
			opened[1].classList.add('match');
			opened = [];
		}else if(opened.length === 1 && this.firstElementChild.className !== opened[0].firstElementChild.className){
			opened.push(this);



			//clear two clicked cards classes
							  setTimeout(function(){

			opened[1].classList.remove('show', 'open');
			opened[0].classList.remove('show', 'open');

			opened[1].classList.add('shake');
			opened[0].classList.add('shake');

			opened[1].classList.remove('shake');
			opened[0].classList.remove('shake');

			//clear the opened array
			opened = [];
							  },550);

		}


	})
}

function unmatched () {
	opened[1].classList.remove('show', 'open');
	opened[0].classList.remove('show', 'open');

	opened[1].classList.add('shake');
	opened[0].classList.add('shake');

	opened[1].classList.remove('shake');
	opened[0].classList.remove('shake');

}

openCard ();

document.body.onload = newGrid();