

    // Creates an array that lists out all of the words. and arrays to list letters of each word
    // var papaya = ["p", "a", "p", "a", "y", "a"]
    // var mango = ["m", "a", "n", "g", "o"]
    // var guava = ["g", "u", "a", "v", "a"]
    // var pineapple = ["p", "i", "n", "e", "a", "p", "p", "l", "e"]
    // var coconut = ["c", "o", "c", "o", "n", "u", "t"]
    // var dragonfruit = ["d", "r", "a", "g", "o", "n", "f", "r", "u", "i", "t"]
    // var banana = ["b", "a", "n", "a", "n", "a"]
    
    
    var startingGuesses=10;
    var letterAppearsInWord;
    var youGuessedTheWord;
     
    
    // newGuessesRemaining = function(){
    //     var x=0
    //     var guessesRemaining = startingGuesses - x

    //     if (letterAppearsInWord === false){
    //         x++
            
    //     }
    //     if (letterAppearsInWord === true){
            
    //     }
            
        
    //     document.getElementById("remainingGuesses").innerHTML = guessesRemaining
    // }




var wordOptions = ["papaya", "mango", "guava", "pineapple", "coconut", "dragonfruit", "banana"];

var lettersAlreadyGuessed = [ ];
var chosenWord;
var randomWordArray;
var blanksArray = [];
var wins = 0
//var possibleGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]




    chooseWord = function(){
        blanksArray = [ ]
        chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
        randomWordArray = chosenWord.split("");
        for (var i = 0; i < randomWordArray.length; i++){
            blanksArray[i] = ["_"];
        }
        document.getElementById("areaOfHTMLForWord").innerHTML = blanksArray.join(" ");
        
        
    }
    chooseWord();

    nextGame = function(){
        
    
        chooseWord();
        
        startingGuesses=10;
        lettersAlreadyGuessed = [];

        document.getElementById("remainingGuesses").innerHTML = startingGuesses
        document.getElementById("pastGuessesGoHere").innerHTML=lettersAlreadyGuessed;
        // document.getElementById("areaOfHTMLForWord").innerHTML = "new game";
        document.getElementById("areaOfHTMLForWord").innerHTML = blanksArray.join(" ");
        
    }

        
        

    

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        

      // Determines which key was pressed.
      var userGuess = event.key;
       

      //checkword = function() {
    letterAppearsInWord=false;
    for (var i = 0; i < randomWordArray.length; i++){
        if (userGuess === randomWordArray[i]){
            blanksArray[i] = userGuess;

            document.getElementById("areaOfHTMLForWord").innerHTML = blanksArray.join(" ");
            //
            letterAppearsInWord=true;
            
        }       
    }

    if (letterAppearsInWord===true){
        console.log("good guess")
    }
    else {
        lettersAlreadyGuessed.push(userGuess);
        startingGuesses--;
    }
            //letterAppearsInWord===false};
            
                
            //newGuessesRemaining();
            
        //}
        //checkword();
        
        // if (letterAppearsInWord===false){
        //     startingGuesses--
    document.getElementById("remainingGuesses").innerHTML = startingGuesses

    letterAppearsInWord = true
        // }


    // for (var i = 0; i < possibleGuesses.length; i++){
    //     if (userGuess === possibleGuesses[i]){
    //         possibleGuesses.
    //     }
    // }
              
              
            
            
            
            
      
        


        // Alert the userGuess and computerGuess
        console.log("User guess: " + userGuess);
        console.log("Answer: " + chosenWord);

        


        console.log(lettersAlreadyGuessed);
               
        document.getElementById("pastGuessesGoHere").innerHTML=lettersAlreadyGuessed;


        if (startingGuesses < 1){
            alert("You Lose")
            nextGame();
        }
        
        youGuessedTheWord=true;
        for (i = 0; i < randomWordArray.length; i++){
            if (blanksArray[i]!==randomWordArray[i]){
                youGuessedTheWord=false;
            }
        }

        if(youGuessedTheWord===true){
            console.log("You guessed it!");
            wins++;
            document.getElementById("wins").innerHTML=wins;
            nextGame();

        }
            


        
}


    // The only remaining bug there seems to be is that if you keep playing for multiple games it gets really glitchy :/
