////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


/* Write an expression that operates on a variable called `move`
If a `move` has a value, your expression should evaluate to that value.
However, if `move` is not specified / is null, your expression should equal `getInput()`*/
function getPlayerMove(move) {
    move = getInput();
	return move;
}

/* Write an expression that operates on a variable called `move`
If a `move` has a value, your expression should evaluate to that value.
However, if `move` is not specified / is null, your expression should equal `randomPlay()`*/
function getComputerMove(move) {
    move = randomPlay();
	return move;
}

/* Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.*/
function getWinner(playerMove,computerMove) {
    var winner;
	if ((playerMove === "rock" && computerMove === "paper") || 
		(playerMove === "paper" && computerMove === "scissors") ||
		(playerMove === "scissors" && computerMove === "rock")){
		winner = "computer";
	} else if (playerMove === computerMove){
		winner = "tie";
	} else {
		winner = "player";
	}    
	return winner;
}

/* Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.*/
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    // use while loop, keep playing games if neither player nor computer has won 5 times.
    while (playerWins < 5 && computerWins < 5){
        
        // in each round, get player move, computer move and the winner
        var player = getPlayerMove();
        var computer = getComputerMove(); 
        var winner = getWinner(player, computer); 
        
        // increment the number of wins according to the winner. 
        if (winner === "player"){
	        playerWins++;
	    }else if (winner === "computer"){
	        computerWins++;
	    }
	    console.log('Player chose ' + player + ' while Computer chose ' + computer);
	    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
	    
	    /* after each round, check the result. 
	    if either player or computer has won 5 times, stop the game; 
	    otherwise, continue.*/
	    if (playerWins === 5 || computerWins === 5){
            return [playerWins, computerWins];
        }
    }
}

// start the game
playToFive(); 

function playTo(x){
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < x && computerWins < x){
        var player = getPlayerMove();
        var computer = getComputerMove(); 
        var winner = getWinner(player, computer); 
        if (winner === "player"){
	        playerWins++;
	    }else if (winner === "computer"){
	        computerWins++;
	    }
	    console.log('Player chose ' + player + ' while Computer chose ' + computer);
	    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
	    
	    if (playerWins === x || computerWins === x){
            return [playerWins, computerWins];
        }
    }
}
