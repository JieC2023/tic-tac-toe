console.log("Testing testing")
// ---------------------------------------------
var boxes = document.querySelectorAll(".box")

// test whether 'box9' could be accessed
console.log(boxes[8]) 

function loadGame() {
    var gameState = 0
	var clickCount = 0

    for (let i = 0; i < boxes.length; i++) { 
		// add event listener for every box on a click
		boxes[i].addEventListener("click", function () {

			if (clickCount % 2 === 0 && boxes[i].textContent === " " && gameState === 0) {
				boxes[i].textContent = "X"
				clickCount++
			} else if (boxes[i].textContent === " " && gameState === 0) {
				boxes[i].textContent = "O"
				clickCount++
			}
			
			// the playRound() takes 3 arguments (3 boxes in a row with the same symbol, either "X" or "O")
			function playRound (position1, position2, position3) {
				gameState = 1
				console.log("Congrats! Player " + document.querySelector(position1).textContent + " wins!")

				document.querySelector(position1).style.backgroundColor = "green"
				document.querySelector(position2).style.backgroundColor = "green"
				document.querySelector(position3).style.backgroundColor = "green"

				// To check whether the winner is X or O
				var winner = document.querySelector(position1).textContent

				if (winner == "X") {
					document.querySelector('.playerOne').style.color="green"
					document.querySelector('.playerOne').textContent ="Congratulations! Player 'X' wins!"
					document.querySelector('.playerTwo').style.color="red"
					document.querySelector('.playerTwo').textContent ="Sorry, player 'O' you lost. Better luck next time!"
					document.querySelector('.playerOne').style.fontSize = "25px"
					document.querySelector('.playerTwo').style.fontSize = "25px"
				} else {
					document.querySelector('.playerOne').style.color="red"
					document.querySelector('.playerOne').textContent ="Sorry, player 'X' you lost this time."
					document.querySelector('.playerTwo').style.color="green"
					document.querySelector('.playerTwo').textContent ="Good job! Player 'O' you win!"
					document.querySelector('.playerOne').style.fontSize = "25px"
					document.querySelector('.playerTwo').style.fontSize = "25px"
				} 
				// when there was a winner, the button would be visible on the webpage.
				document.querySelector(".reset").removeAttribute("hidden")				
			}

			// test to see what box1's content is
			console.log(boxes[0].textContent) 

			// 8 winning combinations (3 boxes in a row with the same symbol):
			if (document.querySelector("#box1").textContent !== " " && document.querySelector("#box1").textContent === document.querySelector("#box2").textContent && document.querySelector("#box3").textContent === document.querySelector("#box1").textContent) {
				playRound("#box1", "#box2", "#box3")
            	// it takes box1, box2 and box3 to win the game.

        	} else if (document.querySelector("#box4").textContent !== " " && document.querySelector("#box4").textContent === document.querySelector("#box5").textContent && document.querySelector("#box6").textContent === document.querySelector("#box4").textContent) {
            	playRound("#box4", "#box5", "#box6")
            	// it takes box4, box5 and box6 to win the game.

        	} else if (document.querySelector("#box7").textContent !== " " && document.querySelector("#box7").textContent === document.querySelector("#box8").textContent && document.querySelector("#box9").textContent === document.querySelector("#box7").textContent) {
            	playRound('#box7', '#box8', '#box9')
            	// it takes box7, box8 and box9 to win the game.

       	 	}  else if (document.querySelector("#box1").textContent !== " " && document.querySelector("#box1").textContent === document.querySelector("#box4").textContent && document.querySelector("#box7").textContent === document.querySelector("#box1").textContent) {
            	playRound("#box1", "#box4", "#box7")
            	// it takes box1, box4 and box7 to win the game.

        	}  else if (document.querySelector("#box2").textContent !== " " && document.querySelector("#box2").textContent === document.querySelector("#box5").textContent && document.querySelector("#box8").textContent === document.querySelector("#box2").textContent) {
            	playRound("#box2", "#box5", "#box8")
            	// it takes box2, box5 and box8 to win the game.

        	} else if (document.querySelector("#box3").textContent !== " " && document.querySelector("#box3").textContent === document.querySelector("#box6").textContent && document.querySelector("#box9").textContent === document.querySelector("#box3").textContent) {
            	playRound("#box3", "#box6", "#box9")
            	// it takes box3, box6 and box9 to win the game.

        	}  else if (document.querySelector("#box1").textContent !== " " && document.querySelector("#box1").textContent === document.querySelector("#box5").textContent && document.querySelector("#box9").textContent === document.querySelector("#box1").textContent) {
            	playRound("#box1", "#box5", "#box9")
            	// it takes box1, box5 and box9 to win the game.

        	} else if (document.querySelector("#box3").textContent !== " " && document.querySelector("#box3").textContent === document.querySelector("#box5").textContent && document.querySelector("#box7").textContent ===  document.querySelector("#box3").textContent) {
            	playRound("#box3", "#box5", "#box7")
            	// it takes box3, box5 and box7 to win the game.

            // when it is a tied game (all 9 boxes were occupied without getting three in a row):
        	}  else if (boxes[0].textContent !== " " && boxes[1].textContent !== " " && boxes[2].textContent !== " " && boxes[3].textContent !== " " && boxes[4].textContent !== " " && boxes[5].textContent !== " " && boxes[6].textContent !== " " && boxes[7].textContent !== " " && boxes[8].textContent !== " ") {
				gameState = 1

				// message displayed in the console, when it's a draw game.
				console.log("It's a draw! No one wins.")
				
				// The message displayed on the page if it is a draw.
        		document.querySelector('.msg-when-draw').textContent = "The game is tied. Try again!"
				document.querySelector('.msg-when-draw').style.color = "orange"
				document.querySelector('.msg-when-draw').style.fontSize = "25px"

				// If the game was tied, the reset button would be visible on the webpage.
        		document.querySelector(".reset").removeAttribute("hidden")
			}
		})
	}
}

function resetBoard() {
	boxes[0].textContent = " "
	boxes[1].textContent = " "
	boxes[2].textContent = " "
	boxes[3].textContent = " "
	boxes[4].textContent = " "
	boxes[5].textContent = " "
	boxes[6].textContent = " "
	boxes[7].textContent = " "
	boxes[8].textContent = " "

	// When the game was reset, the button would be hidden.
	document.querySelector(".reset").setAttribute("hidden", "hidden")

	// clear the background color from the previous round
	boxes[0].style.backgroundColor = "white"
    boxes[1].style.backgroundColor = "white"
    boxes[2].style.backgroundColor = "white"
    boxes[3].style.backgroundColor = "white"
    boxes[4].style.backgroundColor = "white"
    boxes[5].style.backgroundColor = "white"
    boxes[6].style.backgroundColor = "white"
    boxes[7].style.backgroundColor = "white"
    boxes[8].style.backgroundColor = "white"

	// when reset, the messages from last round were cleared. Only "Player 1 'X'" and "Player 2 '0'" were displayed.
	// when reset, the font color of two players was set back to default color
    document.querySelector('.playerOne').textContent = "Player 1 'X'"
    document.querySelector('.playerOne').style.color= "black"
	document.querySelector('.playerOne').style.fontSize = "25px"

    document.querySelector('.playerTwo').textContent = "Player 2 '0'"
    document.querySelector('.playerTwo').style.color= "black"
	document.querySelector('.playerTwo').style.fontSize = "25px"

	// clear the draw game message
    document.querySelector('.msg-when-draw').textContent=" "

	// when everything was reset, the game was loaded again
	loadGame()
}

