var wordList = [
  ["S", "K", "Y", "W", "A", "L", "K", "E", "R"],
  ["C", "O", "R", "U", "S", "C", "A", "N", "T"],
  ["T", "I", "E", "F", "I", "G", "H", "T", "E", "R"],
  ["W", "O", "O", "K", "I", "E", "E", "S"],
  ["E", "W", "O", "K", "S"],
  ["M", "U", "S", "T", "A", "F", "A", "R"]
]
var random = Math.floor((Math.random()*(wordList.length-1))); 

var currentWord = wordList[random]; // a word will be choosen from the wordlist
var word = new Array(currentWord.length);
var miss = 0;
var wins = 0;

//each space will be underscored
for (var i = 0; i <word.length; i++){
	word[i] = "_ ";
}

// prints the word in the current word area
function printWord(){
	for (var i = 0; i <word.length; i++){
	var spaces = document.getElementById("spaces");
	var letters = document.createTextNode(word[i]);
	spaces.appendChild(letters);
	}
}

//checks if the the guess matches one or more of the letters in the word
	
	/*document.onkeyup = function(event) {
	var guess = event.key;
	guess = guess.toUpperCase();
	for (var i = 0; i <currentWord.length; i++){
		if(currentWord[i] === guess){
			word[i] = guess+ " ";
			var correct = true;
		}
	event.key = "";
	}
}*/


 var checker = function(){
	var f = document.idk; 
	var b = f.elements["userGuess"]; 
	var guess = b.value; // the letter provided by the user
	guess = guess.toUpperCase();
	for (var i = 0; i <currentWord.length; i++){
		if(currentWord[i] === guess){
			word[i] = guess+ " ";
			var correct = true;
		}
	b.value = "";
	}
	
	//deletes the word and replaces it with the new one
	var spaces = document.getElementById("spaces");
	spaces.innerHTML=""; 
	printWord();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!correct){
		var wrongLetters = document.getElementById("wrongLetters");
		var letters = document.createTextNode(" " + guess);
		wrongLetters.appendChild(letters); 
		miss++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + miss + ".png";
	}
	
	//checks if all letters have been found
	var winner = true;
	for (var i = 0; i < word.length; i++){
		if(word[i] === "_ "){
			winner = false;
		}
	}
	if(winner){
		alert("I’m one with the Force. The Force is with me. You win!");
		wins++
	}
		
	//once you got six wrong letters, you lose
	if(miss === 6){
		alert("I find your lack of faith disturbing. You Lose.");
	}
	wins = document.getElementByID('wins');
}

function init(){
	printWord();
}

window.onload = init;
//undoes my win count don't know how to fix it