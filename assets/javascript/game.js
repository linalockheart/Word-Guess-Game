// Hangman Pokemon edition (first 150, well some of them anyway)

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
var loseCount = 0;
var guessesLeft = 9;

//////////////

function startGame () {
    var selectedPokemon = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log(selectedPokemon);
    lettersInWord = selectedPokemon.split("");
        console.log(lettersInWord);
    blankSpaces = lettersInWord.length;
        console.log(blankSpaces);


var guessesLeft = 9;
var wrongLetters = [];
var spacesAndCorrectLetters = [];

for (var i = 0; i<blankSpaces; i++) {
    spacesAndCorrectLetters.push("_");
console.log(spacesAndCorrectLetters);
}



}

//////////////
startGame()




///////////





// l = answerArray.join(" ");
// document.getElementById("answer").text = l;

// var remainingLetters = pokemon.length;
// console.log(remainingLetters);

// document.onkeyup = function(event) {
//     var userGuess = event.key;
//     userGuess.textContent = event.key;
//     // .toLowerCase
// }


    // blackSpaces.push("_");
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

// document.querySelector("#game").innerHTML = html;