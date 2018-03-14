

    // Creates an array that lists out all of the words. and arrays to list letters of each word
    // var papaya = ["p", "a", "p", "a", "y", "a"]
    // var mango = ["m", "a", "n", "g", "o"]
    // var guava = ["g", "u", "a", "v", "a"]
    // var pineapple = ["p", "i", "n", "e", "a", "p", "p", "l", "e"]
    // var coconut = ["c", "o", "c", "o", "n", "u", "t"]
    // var dragonfruit = ["d", "r", "a", "g", "o", "n", "f", "r", "u", "i", "t"]
    // var banana = ["b", "a", "n", "a", "n", "a"]
var wordOptions = ["papaya", "mango", "guava", "pineapple", "coconut", "dragonfruit", "banana"];
var guessesRemaining = 10;
var lettersAlreadyGuessed = [ ];
var chosenWord;
var randomWordArray;
var blanksArray = [];
    

        chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
        randomWordArray = chosenWord.split("");
        for (var i = 0; i < randomWordArray.length; i++){
            blanksArray[i] = ["_"];
        }
        

    

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        

      // Determines which key was pressed.
      var userGuess = event.key;

      for (var i = 0; i < randomWordArray.length; i++){
          if (userGuess === randomWordArray[i]){
              blanksArray[i] = userGuess;

              document.getElementById("areaOfHTMLForWord").innerHTML = blanksArray.join(" ");
              }
              
            
          }
      
        


        // Alert the userGuess and computerGuess
        console.log("User guess: " + userGuess);
        console.log("Answer: " + chosenWord);

        lettersAlreadyGuessed.push(userGuess);


        console.log(lettersAlreadyGuessed);
               
        document.getElementById("pastGuessesGoHere").innerHTML=lettersAlreadyGuessed;
    
    
    }
    ;
