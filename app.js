//collect all cards an make an array of them(elements)
let card = document.getElementsByClassName('card');
let cards = [...card];
//created arrays for opened/matched cards
let opened = [];
let match = [];
//take the whole grid
const structure = document.querySelector('#structure');
//number value for moves counter
let number = 0;
let starNumber = 'ALL stars';

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

///new board of cards
function newGrid(){
	cards = shuffle(cards)
	for (let i = 0; i < cards.length; i++){
		structure.innerHTML = '';
		[].forEach.call(cards, function(item){
			structure.appendChild(item);
		});
		cards[i].classList.remove("show", "open", "match");
	}
	//create stars
	$('.stars').html(`
				<li><i class='fa fa-star one'></i></li>
                <li><i class='fa fa-star two'></i></li>
                <li><i class='fa fa-star three'></i></li>`);
}

//when player click card
$('.card').on('click', function (){  
	if(!this.classList.contains('match')){
		if(opened.length === 0){
			timer();
	        counter();
			$( this ).addClass( 'show open clicked' );
	    	opened.push(this);
		}else if(opened.length === 1){
	        if(!this.classList.contains('clicked')){
	        	opened[0].classList.remove('clicked');
	        	$( this ).addClass( 'show open' );
	            	counter();
					opened.push(this);
	          		if(opened.length === 2 && opened[0].firstElementChild.className === opened[1].firstElementChild.className){
	            		matched();
	    			}else {
	    				opened[0].classList.add('shake');
	    				opened[0].classList.remove('clicked');
	    				opened[1].classList.add('shake');
	    				opened[1].classList.remove('clicked');
	      				setTimeout(function(){
	      					unmatched();     		
	      				},650);
	    			}
	        }

	 	}
	}
});
//matched cards
function matched() {
	match.push(opened[0].classList.add('match'));
    match.push(opened[1].classList.add('match'));
	opened = [];  
//if all matched open final screen and the number of moves
	if(match.length === 16) {
		win();
	}
}
 //unmatched cards
function unmatched() {
	for (let i=0; i < 2; i++){
		opened[i].classList.remove('show', 'open', 'match','shake','clicked');
	}
	opened = [];  	
}
///reload board on click
function restart () {
	$('.restart').on('click', function reload (){
		number = 0; 
		newGrid();
		$('.moves').html(`<span>${number.valueOf()}</span>`);
		match = [];
	})
}
//counter and stars
function counter() {
	number++;
	$('.moves').html(`<span>${number.valueOf()}</span>`);
	//stars accordingly to moves number
	switch (number){
		case 20: 
			$('.stars').html(`
			<li><i class='fa fa-star one'></i></li>
	        <li><i class='fa fa-star two'></i></li>
	        <li><i class="fa fa-star-half-o" aria-hidden="true"></i></li>`);
	        starNumber = '2.5 stars';
		break;
		case 25:
			$('.stars').html(`
			<li><i class='fa fa-star one'></i></li>
	        <li><i class='fa fa-star two'></i></li>
	        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>`);
  	        starNumber = '2 stars';
		break;
		case 30: 
			$('.stars').html(`
			<li><i class='fa fa-star one'></i></li>
	        <li><i class="fa fa-star-half-o" aria-hidden="true"></i></li>
	        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>`);
	        starNumber = '1.5 stars';
		break;
		case 35: 
			$('.stars').html(`
			<li><i class='fa fa-star one'></i></li>
	        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
	        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>`);
	        starNumber = '1 star';
		break;
		case 40: 
			$('.stars').html(`
			<li><i class="fa fa-star-half-o" aria-hidden="true"></i></li>
	        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
	        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>`);
	        starNumber = '0.5 stars';	
		break;
	}
}
//open win window and close
function win() {
		let modal = document.getElementById('myModal');
		modal.style.display = 'block';
		$('.fnumber').html(`<p class='wonwords2'>In ${number} moves and ${starNumber}!</p>
							<p class='wonwords2'>Time: ${time.innerHTML}!</p>`);
		//refresh grid after win
		$('.btn').on('click',function() {
			$('.moves').text('0');
			number = 0; 
			newGrid();
	 		modal.style.display = "none";
	 		match = [];
	   });
}
//timer function
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;	     
        if (++timer < 0) {}
    }, 1000);
        
    if (++timer < 0) {}
}
function timer() {
	timer = function(){};
    let fiveMinutes = 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

restart();
//create a new game when the page reloads
document.body.onload = newGrid();