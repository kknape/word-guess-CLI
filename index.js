//Guess the Word

/* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
     * Randomly selects a word and uses the `Word` constructor to store it
     * Prompts the user for each guess and keeps track of the user's remaining guesses
*/

//Requirements
var Word = require("./Word");
var inquirer = require('inquirer');

//Variable to check if user enters a letter, else they'll need to try again.
var letterArray = "abcdefghijklmnopqrstuvwxyz";

//Guess these 80s movies
var wordList = [
  "ghostbusters", "gremlins", "aliens", "heathers", "poltergeist", "platoon", "caddyshack", "the breakfast club", "die hard", "fast times at ridgemont high", "the princess bride", "pretty in pink", "trading places", "aliens", "poltergeist", "coming to america"
];

//Pick random index of word from list to get the us the word to guess
var wordIndex  = Math.floor(Math.random() * wordList.length);
var wordInPlay = wordList[wordIndex];
console.log(wordInPlay);

//Pass random word through Word constructor
var showResults = new Word(wordInPlay);
var requireNewWord = false;

//array for the incorrect letters guessed
var incorrectLetters = [];
//array for the correct letters guessed
var correctLetters = [];
//Guesses left variable for counter
var guessesLeft = 10;

function playGame() {
  
  //Creates a new ramdom word
  if(requireNewWord){
      wordIndex = Math.floor(Math.random() * wordList.length);
      wordInPlay = wordList[wordIndex];
      showResults = new Word(wordInPlay);
      requireNewWord = false;
  }

  var wordComplete = [];
  showResults.wordArray.forEach(completeCheck);

  if (wordComplete.includes(false)) 
    {
        inquirer.prompt ([
          {
            type: "input",
            message: "Guess the 80s movie. Select a letter.",
            name: "userGuess"
            }
          ])
          .then(function(input) {
            //converts user input to lowercase, if it's not already
            var userGuessLC= input.userGuess.toLowerCase();
            console.log(userGuessLC);
            if (!letterArray.includes(userGuessLC) || userGuessLC.length >1) {
              console.log("\nTry again.\n");
              playGame();
            }
            else {
              if(incorrectLetters.includes(input.userGuess) || correctLetters.includes(input.userGuess) || input.userGuess === "")
              {
                console.log("\nAlready guessed.\n");
                playGame();           
              }
              else {
                var wordCheckArray = [];

                showResults.userGuess(input.userGuess);

                showResults.wordArray.forEach(wordCheck);
                if (wordCheckArray.join("") === wordComplete.join("")) {
                  console.log("\nIncorrect\n");

                  incorrectLetters.push(input.userGuess);
                  guessesLeft --;
                      }
                  else {
                    console.log("\nCorrect!\n");

                    correctLetters.push(input.userGuess);
                  }
                  showResults.log();

                  console.log("Guesses left: " + guessesLeft + "\n");
                  console.log("Letters guessed: " + incorrectLetters.join("") + 
                  "\n");

                  if(guessesLeft > 0) {
                    playGame();
                    }
                  else  {
                    console.log("Sorry, you lost.\n");
                    restartGame();
                      }
                  function wordCheck(key) {
                    wordCheckArray.push(key.guessed);
                  }
                  }
                  }
                })
              }
        else {
          console.log("You win!\n");
          restartGame();
        } 
    
        function completeCheck(key) {
          wordComplete.push(key.guessed);
        }
      }

function restartGame() {
        inquirer.prompt([
          { 
            type: "list",
            name: "restart",
            message: "Do you want to play again?",
            choices: ["Yes", "No thanks."]
          }
        ])
        .then(function(input){
          if (input.restart === "Yes")
          {
            requireNewWord = true;
            incorrectLetters = [];
            correctLetters = [];
            guessesLeft = 10;
            playGame();
          }
          else {
            console.log("Ok. Thanks for playing.")
            return;
          }
        });
      }
      
      playGame();


















