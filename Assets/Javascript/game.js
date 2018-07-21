

// Creating variables/counters to hold the number of wins, losses, and ties. They start at 0.
    var Wins = 0;
    var Guesses = 0;
    var GuessesRemaining = 12;


// This function is run whenever the user presses a key
// document.onkeyup = function(event) {

//     // Determines which key was pressed 
//     var userGuess = event.key;

var letters = ["__", "__", "__", "__","__"];

for (i=0; i < 4; i++){
    var spaces = document.getElementById("Mystery_Spaces");
    spaces.text(letters[i]);
}

// Spelling the word baby

  if ((userGuess === "b") || (userGuess === "a") || (userGuess === "y")) {
    // Make a command that inputs letter into space blanks
    var userGuess = document.getElementById("Mystery_Spaces");

    document.onkeyup = function(event) {
        userGuess.textContent = event.key;
    }}

//  else () {
//     // Make a command that changes the decreases the score of the user tries 
//     GuessesRemaining --;
//   }
// 
//   Make a command that once all key spaces are filled, the win values increase one up
