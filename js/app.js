console.log("start app.js");
//TODO: use style guide
// START PAGE CODE //

/*
-TODO: I can press space to start the game
	-display:none on .start-page
	-display: flex on .player-area


-Bonus:
	animate screen change
	countdown to game start
	gameplay instructions

	link to youtube for music
*/

let playing = false;
let gameStart = false;

// GAME PLAY CODE //

/*
-A message will display the winning player



*/


// Player object constructor ADT
// (the player actually moves just by increasing the height of 
//    its light trail #trail-1 or #trail-2)
/*
Properties:
	trail element - doc queryselect #trail-1 and #trail-2
	   this.element = document.querySelector(id)

Methods:
	increase height
*/

class Player {
	constructor(id, moveKey){
		// select DOM element and initialize its height
		this.name = "Player " + id[id.length -1];
		this.element = document.getElementById(id);
		this.moveKey = moveKey;
		this.height = 0;
		this.setPxHeight(this.height);
	}

	setPxHeight(heightInt){
		//Convert intiger to pixel height and apply it to the element
		this.element.style.height = heightInt + 'px';
	}

	increaseHeight(incriment=10){
		// increase the player height
		this.height += incriment;
		this.setPxHeight(this.height);	

		// Check if height is enough to win
		if (this.height > 360){
			gameOver(this.name);
		}
	}

	playerMove(whatKey){
		if (playing && whatKey == this.moveKey){
			this.increaseHeight();
		}
	}
}


let player1 = new Player('trail-1', 'a');
let player2 = new Player('trail-2', 'l');

// let game = new Game(player1, player2);
// Game has listener, playing, gameOver and movePlayers

document.addEventListener('keydown', userInputs);

function userInputs(event){ // move players when their key is pressed
	player1.playerMove(event.key);
	player2.playerMove(event.key);
	// Start game
	if (event.key === " " && !gameStart && !playing){
		playing = true;
		//.start-page=>none .player-area=>flex
		document.querySelectorAll('.start-page')[0].style.display = "none";
		[].forEach.call(document.querySelectorAll('.player-area'), function(el){
			el.style.display = 'flex';
		});
	}
}

function gameOver(name){
	playing = false;
	let winMessage = document.querySelectorAll('.win-message')[0];
	// TODO: display winner to players
	console.log(name + " wins!");
	winMessage.style.display = 'block';
	if (name === "Player 1"){
		winMessage.innerHTML = '<p class="blue">Player 1 Wins</p>';
	} else if (name === 'Player 2'){
		winMessage.innerHTML = '<p class="orange">Player 2 Wins</p>';
	}
	
}
