// Hangman Pokemon edition (first 150, well some of them anyway)

//Global Variables

var wordBank = ["pikachu", "eevee", "bulbasaur", "charmander", "squirtle", "meowth", "ekans", "koffing", 
"dewgong", "mewtwo", "articuno", "polywag", "vaporeon", "jolteon", "flareon", "zapdos", "moltres", "raichu",
"ivysaur", "venusaur", "charmeleon", "charizard", "wartortle", "blastoise", "vulpix", "ninetales", "butterfree",
"clefairy", "clefable", "jigglypuff", "wigglytuff", "ghastly", "haunter", "gengar", "oddish", "gloom", "vileplume",
"venonat", "horsea", "dratini"];

var selectedPokemon = "";
var lettersInWord = [];
var blankSpaces = 0;
var spacesAndCorrectLetters = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

// Functions 

function startGame() {
    var selectedPokemon = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = selectedPokemon.split("");
    blankSpaces = lettersInWord.length;

var guessesLeft = 10;
var wrongLetters = [];
var spacesAndCorrectLetters = [];

for (var i=0; i<blankSpaces; i++) {
    spacesAndCorrectLetters.push("_");
}

window.addEventListener('DOMContentLoaded', function(){
    document.getElementById("dashes").innerHTML = spacesAndCorrectLetters.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;
    });

console.log(selectedPokemon);
console.log(lettersInWord);
console.log(blankSpaces);
console.log(spacesAndCorrectLetters);

}

function letterChecker(letter) {
    var isLetterInWord = false;
    // alert(letter);


    for (var i=0; i<blankSpaces; i++) {
        if (lettersInWord[i] === letter) {
            isLetterInWord = true;
            // alert("letter found");
        }
    }

    if (isLetterInWord) {
        for (i=0; i<blankSpaces; i++) {
            if (lettersInWord[i] === letter) {
                spacesAndCorrectLetters[i] = letter;
            }

        }
    }

    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }

    console.log(spacesAndCorrectLetters);
    // console.log(lettersInWord);
    // console.log(selectedPokemon);

}

function roundOver() {

    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("dashes").innerHTML = spacesAndCorrectLetters.join(" ");

    console.log("Win Count: " + winCount + "Loss Count: " + lossCount + "Guesses Left: " + guessesLeft);

    if (lettersInWord.toString() === spacesAndCorrectLetters.toString()) {
        winCount++;
        alert("You won!");
        document.getElementById("winCount").innerHTML = winCount;
        startGame();
    }

    else if (guessesLeft <= 0) {
        lossCount++;
        alert("You lose!");
        document.getElementById("lossCount").innerHTML = lossCount;
        startGame();
    }
}

//////////////
startGame();

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letterChecker(userGuess);
    roundOver();



console.log(userGuess);


}




///////////





// var remainingLetters = pokemon.length;
// console.log(remainingLetters);




    // document.querySelector("mystery-word").innerHTML = userGuess;
    



// while (remainingLetters > 0) {
//     var userGuess = document.getElementById("mystery-word");
//     l = secretWord.innerHtml = blankSpaces.join(" ");
// }
//one or the other here, not both?


//CHECK THIS



// var userText = document.getElementById("userGuess");

// Next, we give JavaScript a function to execute when onkeyup event fires.
// document.onkeyup = function(event) {
//   userText.textContent = event.key;
// };

/////////

