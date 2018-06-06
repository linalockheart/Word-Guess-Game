// Hangman Pokemon edition (first 150, well some of them anyway)

var wordBank = ["pikachu", "eevee", "bulbasaur", "charmander", "squirtle", "meowth", "ekans", "koffing", 
"dewgong", "mewtwo", "articuno", "polywag", "vaporeon", "jolteon", "flareon", "zapdos", "moltres", "raichu",
"ivysaur", "venusaur", "charmeleon", "charizard", "wartortle", "blastoise", "vulpix", "ninetales", "butterfree",
"clefairy", "clefable", "jigglypuff", "wigglytuff", "ghastly", "haunter", "gengar", "oddish", "gloom", "vileplume",
"venonat", "horsea", "dratini"];

var pokemon = wordBank[Math.floor(Math.random() * wordBank.length)];

var blankSpaces = [];

var remainingLetters = pokemon.length;

document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuess.textContent = event.key;
    // .toLowerCase
}

for (var i = 0; i<pokemon.length; i++) {
    blankSpaces[i] = "_";
    blackSpaces.push("_")
    document.querySelector("#answer").innerHTML = userGuess
}


while (remainingLetters > 0) {
    var userGuess = document.getElementById("mystery-word");
    secretWord.innerHtml = blankSpaces.join(" ");
}
//one or the other here, not both?


//CHECK THIS



var userText = document.getElementById("userGuess");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
  userText.textContent = event.key;
};

/////////

document.querySelector("#game").innerHTML = html;