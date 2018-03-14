

    // Creates an array that lists out all of the words. and arrays to list letters of each word
    // var papaya = ["p", "a", "p", "a", "y", "a"]
    // var mango = ["m", "a", "n", "g", "o"]
    // var guava = ["g", "u", "a", "v", "a"]
    // var pineapple = ["p", "i", "n", "e", "a", "p", "p", "l", "e"]
    // var coconut = ["c", "o", "c", "o", "n", "u", "t"]
    // var dragonfruit = ["d", "r", "a", "g", "o", "n", "f", "r", "u", "i", "t"]
    // var banana = ["b", "a", "n", "a", "n", "a"]
    
    var letterAppearsInWord
    var startingGuesses=10
    
    newGuessesRemaining = function(){

        if (letterAppearsInWord === false){
            guessesRemaining= startingGuesses - 1
            
        }
        if (letterAppearsInWord === true){
            guessesRemaining= startingGuesses
        }
            
        
        document.getElementById("remainingGuesses").innerHTML = guessesRemaining
    }




var wordOptions = ["papaya", "mango", "guava", "pineapple", "coconut", "dragonfruit", "banana"];
var guessesRemaining = newGuessesRemaining();
var lettersAlreadyGuessed = [ ];
var chosenWord;
var randomWordArray;
var blanksArray = [];
//var possibleGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]




    

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
                letterAppearsInWord = true;
                
            }
            
            else (letterAppearsInWord=false);
                
            newGuessesRemaining();
            }


    // for (var i = 0; i < possibleGuesses.length; i++){
    //     if (userGuess === possibleGuesses[i]){
    //         possibleGuesses.
    //     }
    // }
              
              
            
            
            
            
      
        


        // Alert the userGuess and computerGuess
        console.log("User guess: " + userGuess);
        console.log("Answer: " + chosenWord);

        lettersAlreadyGuessed.push(userGuess);


        console.log(lettersAlreadyGuessed);
               
        document.getElementById("pastGuessesGoHere").innerHTML=lettersAlreadyGuessed;
    
    
        }
    ;
