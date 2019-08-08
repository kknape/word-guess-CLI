/*
*The **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
   * An array of `new` Letter objects representing the letters of the underlying word
   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
*/

var Letter = require("./Letter");

function Word(answer) {
   this.wordArray = [];
   //creates a letter variable from our letter constructor and push the letter to the word array
      for (var i = 0; i < answer.length; i++){
         var letter = new Letter(answer[i]);
         this.wordArray.push(letter);
         }
      //   console.log(this.wordArray);
   this.log = function(){
     var showResults = "";
     for (var i = 0; i<this.wordArray.length; i++){
        showResults += this.wordArray[i] + " ";
         }
      console.log(showResults + "\n*******************************\n");
       }; 
   this.userGuess = function(input){
     for(var i=0; i<this.wordArray.length; i++){
        this.wordArray[i].guess(input);
     }
  }
}

module.exports = Word;