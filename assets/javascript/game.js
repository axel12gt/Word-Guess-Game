
    // #region array
var pokemon = ["Bulbasaur", "Ivysaur", "Venusaur",
"Charmander", "Charmeleon", "Charizard", "Squirtle",
"Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
"Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
"Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu",
"Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen",
"Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix",
"Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish",
"Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth",
"Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey",
"Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath",
"Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout",
"Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler",
"Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton",
"Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster",
"Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler",
"Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee",
"Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela",
"Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther",
"Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee",
"Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl",
"Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
];

var alphabet = [ 'a', 'b', 'c', 'd',  'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// #endregion

//#region variables
// chosenPokemon returns a random integer between 0 to length of pokemon -1
var chosenPokemon = Math.floor(Math.random()* pokemon.length);

var wins = 0;
var losses = 0;

// splits chosenPokemon string into char array
var outputArray = Array.from(chosenPokemon);

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var guessesRemainingText = document.getElementById("guessesremaining-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


document.write(pokemon[chosenPokemon]);

//#endregion

// for loop that generates underlines
for (i = 0; i < pokemon[chosenPokemon].length; i++){
    document.writeln("_")
}

//#region logic
document.onkeyup = function(event){
    var letterChosen = event.key;
    console.log(letterChosen);

    
}

//#endregion
