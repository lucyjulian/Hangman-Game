

    // Creates an array that lists out all of the words. and arrays to list letters of each word
    var papaya = ["p", "a", "p", "a", "y", "a"]
    var mango = ["m", "a", "n", "g", "o"]
    var guava = ["g", "u", "a", "v", "a"]
    var pineapple = ["p", "i", "n", "e", "a", "p", "p", "l", "e"]
    var coconut = ["c", "o", "c", "o", "n", "u", "t"]
    var dragonfruit = ["d", "r", "a", "g", "o", "n", "f", "r", "u", "i", "t"]
    var banana = ["b", "a", "n", "a", "n", "a"]
    var wordOptions = [papaya, mango, guava, pineapple, coconut, dragonfruit, banana];


    //This will start the game
    var guessesRemaining = 10;
    var lettersAlreadyGuessed = [ ];

    


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        

      // Determines which key was pressed.
      var userGuess = event.key;
        

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

        if (chosenWord === papaya) {
        for (i=0; i<papaya.length; i++){
      // Only run the following code block if the user presses "r" or "p" or "s".
    if ((userGuess === papaya[i])) {

        // Alert the userGuess and computerGuess
        alert("User guess: " + userGuess);
        alert("Answer: " + chosenWord);


        lettersAlreadyGuessed.push(userGuess);
        console.log(lettersAlreadyGuessed);
       
        //.appendChild(lettersAlreadyGuessed);
       }
    }
}
    };