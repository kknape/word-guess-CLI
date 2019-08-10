# word-guess-CLI

# What is Word Guess CLI?

This is a Word Guess command-line game using constructor functions. Guess the 80s movie by selecting a letter.

# How the App is Organized
 - The App uses npm package Inquirer to process the user iputs
 - Three files: a contructor Letter, a constructor Word, and an index file
    - Letter constructor displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. It includes...
      - A string value to store the underlying character for the letter
      - A boolean value that stores whether that letter has been guessed yet
      - A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
      - A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    - Word constructor - depends on the Letter constructor. Used to create an object representing the current word the user is attempting to guess. It includes...
      - An array of `new` Letter objects representing the letters of the underlying word
      - A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
      - A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    - Index file - contains the game logic, which depends on `Word.js` and includes:
      - Randomly selects a word and uses the `Word` constructor to store it
      - Prompts the user for each guess and keeps track of the user's remaining guesses

# How to Use the App
Goal of the game: Guess the 80s movie title within 10 tries.

 1- Key in a letter. Click enter.
   - ![User keys in their guessed letter.](https://kknape.github.io/word-guess-CLI/images/Word_Guess_CLI_001.png)
 2- Feedback is displayed "Correct" or "Incorrect". A space for each letter and any guessed letters are displayed. Incorrect guesses are displayed.
   - ![Correct or incorrect feedback displayed.](https://kknape.github.io/word-guess-CLI/images/Word_Guess_CLI_002.png)
 3- User continues to key in guessed letters. Correct guesses will fill-in the spaces of the word and until the word is complete or the user has made 10 incorrect guesses.
   - ![Correct or incorrect results are displayed.](https://kknape.github.io/word-guess-CLI/images/Word_Guess_CLI_003.png)
 4- If the user completes the word within 10 guesses, "You Win!" displays. If the user does not complete the word within 10 guesses, "You lose." message displays
   - ![Correct or incorrect results are displayed.](https://kknape.github.io/word-guess-CLI/images/Word_Guess_CLI_004.png) 
 5- User is asked if they want to play again.
     - ![Correct or incorrect results are displayed.](https://kknape.github.io/word-guess-CLI/images/Word_Guess_CLI_005.png) 
 6- If user chooses Yes, then restart the game. The app chooses a new word from the word list. And user guesses letters until game is completed.
     - ![Correct or incorrect results are displayed.](https://kknape.github.io/word-guess-CLI/images/Word_Guess_CLI_006.png) 
 7- If user chooses No, game ends.
     - ![Correct or incorrect results are displayed.](https://kknape.github.io/word-guess-CLI/images/Word_Guess_CLI_007.png) 

