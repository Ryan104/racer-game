console.log("start app.js");

// START PAGE CODE //

/*
-I can press space to start the game
	-display:none on .start-page
	-display: flex on .player-area


-Bonus:
	animate screen change
	countdown to game start
	gameplay instructions

	link to youtube for music
*/

let playing = true;

// GAME PLAY CODE //

/*
-I can press a button and the player will advance
-I can press another button and player two will advance

-The game will end when a player reaches the end

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
// Game has listener, playing, and movePlayers

document.addEventListener('keydown', movePlayers);

function movePlayers(event){ // move players when their key is pressed
	player1.playerMove(event.key);
	player2.playerMove(event.key);
}

function gameOver(name){
	playing = false;
	console.log(name + " wins!");
}





