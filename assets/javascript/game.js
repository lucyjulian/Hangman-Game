var startingGuesses=10;
var letterAppearsInWord;
var youGuessedTheWord;
var wordOptions = ["papaya", "mango", "guava", "pineapple", "coconut", "dragonfruit", "banana"];
var lettersAlreadyGuessed = [ ];
var chosenWord;
var randomWordArray;
var blanksArray = [];
var wins = 0

document.getElementById("wins").innerHTML=wins;


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
        
    document.getElementById("areaOfHTMLForWord").innerHTML = blanksArray.join(" ");
        
}

        
        

    

    
document.onkeyup = function(event) {
      
    var userGuess = event.key;
       
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
    
    document.getElementById("remainingGuesses").innerHTML = startingGuesses

    letterAppearsInWord = true
    
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