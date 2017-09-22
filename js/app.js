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
	constructor(id){
		// select DOM element and initialize its height
		this.element = document.getElementById(id);
		this.height = 5;
		this.setPxHeight(this.height);

		//initialize click listener for element
	}

	setPxHeight(heightInt){
		//Convert intiger to pixel height and apply it to the element
		this.element.style.height = heightInt + 'px';
	}

	increaseHeight(incriment=1){
		// increase the player height
		if (playing){
			this.height += incriment;
			this.setPxHeight(this.height);
		}
	}
}


let player1 = new Player('trail-1');
player1.increaseHeight(200);
