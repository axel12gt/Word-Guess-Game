
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
// #endregion

//#region chosen pokemon logic
// chosenPokemon returns a random integer between 0 to length of pokemon -1
var chosenPokemon = Math.floor(Math.random()* pokemon.length);

// for loop that generates underlines
for (i = 0; i < pokemon[chosenPokemon].length; i++){
    document.writeln("_")
}
// splits chosenPokemon string into char array
var output = Array.from(chosenPokemon);

document.write(pokemon[chosenPokemon]);

//#endregion



document.onkeyup = function(event){
    console.log(event);
    var letterChosen = event.key;
    console.log(letterChosen);
    
}
