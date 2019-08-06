//Guess the Word

/* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
     * Randomly selects a word and uses the `Word` constructor to store it
     * Prompts the user for each guess and keeps track of the user's remaining guesses
*/

//Requirements
var Word = require("./Word");
var inquirer = require('inquirer');

//Variables
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// Create a new VWord object
//var word = new Word();

//Guess these 80s movies
var wordList = [
  "Ghostbusters", "Gremlins", "Aliens", "Heathers", "Poltergeist", "Platoon", "Caddyshack", "The Breakfast Club", "Ferris Bueller's Day Off", "E.T. the Extra-terrestrial", "Die Hard", "Fast Times at Ridgemont High", "The Princess Bride", "Pretty in Pink", "Trading Places", "Aliens", "Poltergeist", "Coming to America"
];

//Pick random index of word from list
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
  
  //Creates a new ramdom word when true
  if(requireNewWord){
      wordIndex = Math.floor(Math.random() * wordList.length);
      wordInPlay = wordList[wordIndex];
      showResults = new Word(wordInPlay);
      requireNewWord = false;
  }

  var wordComplete = [];
  showResults.objArray.forEach(completeCheck);

  if (wordComplete.includes(false)) 
    {
        inquirer.prompt ([
          {
            type: "input",
            message: "Select letter from A to Z",
            name: "userInput"
            }
          ])
          .then(function(input) {
            if (!letterArray.includes(input.userInput) || input.userInput.length >1) {
              console.log("\nTry again.\n");
              playGame();
            }
            else {
              if(incorrectLetters.includes(input.userInput) || correctLetters.includes(input.userInput) || input.userInput === "")
              {
                console.log("\nAlready guessed.\n");
                playGame();           
              }
              else {
                var wordCheckArray = [];

                showResults.userGuess(input.userInput);

                showResults.objArray.forEach(wordCheck);
                if (wordCheckArray.join("") === wordComplete.join("")) {
                  console.log("\nIncorrect\n");

                  incorrectLetters.push(input.userInput);
                  guessesLeft --;
                      }
                  else {
                    console.log("\nCorrect!\n");

                    correctLetters.push(input.userInput);
                  }
                  showResults.log();

                  console.log("Guesses left: " + guessesLeft + "\n");
                  console.log("Letters guessed: " + incorrectLetters.join("") + 
                  "\n");

                  if(guessesLeft > 0) {
                    playGame();
                    }
                  else {
                    console.log("Sorry, you lost.\n");
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
        } 
    
        function completeCheck(key) {
          wordComplete.push(key.guessed);
        }
      }

      function restartGame() {
        inquirer.prompt([
          { 
            type: "list",
            message: "What would you like to do?",
            choices: ["Play again.","Exit"],
            name: "restart"
          }
        ])
        .then(function(input){
          if (input.restart === "Play again."){
            reuireNewWord = true;
            incorrectLetters = [],
            correctLetters = [],
            guessesLeft = 10,
            playGame();
          }
          else {
            return;
          }
        });
      }
      
      playGame();


















