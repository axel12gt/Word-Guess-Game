
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
]

var alphabet = [ 'a', 'b', 'c', 'd',  'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// #endregion


// chooses a pokemon and initializes the game
var chosenPokemon = pokemon[Math.floor(Math.random()* pokemon.length)].toLowerCase()
//sets variable for wins and losses
var wins = 0
var losses = 0
var outputArray = Array.from(chosenPokemon)
var dash = []
var lettersLeft = 0


//#region functions
function compChoice(){
    chosenPokemon = pokemon[Math.floor(Math.random()* pokemon.length)]
}

function directionStartText(){
    document.querySelector("#directions-text").innerHTML = "Guess letters for the names of the first generation"
}
function directionsText(){
    document.querySelector("#directions-text").innerHTML = ""
}
function updateWins(){
    document.querySelector("#wins").innerHTML = "Wins:" + wins
}
function updateLosses(){
    document.querySelector("#losses").innerHTML ="Losses: " + losses
}
function generate(){
    for (i = 0; i < chosenPokemon.length; i++){
        dash.push("_")    
}    
}
function updateDashArray(){    
    document.querySelector("#pokemon").innerHTML = dash
}

//#endregion

//#region function calls
directionStartText()
updateWins()
updateLosses()
generate()
updateDashArray()

document.write(pokemon[chosenPokemon])
//#endregion

//#endregion


//#region logic
document.onkeyup = function(event){
    var letterChosen = event.key
    console.log(letterChosen)

    if(alphabet.indexOf(letterChosen) !== -1 ){
        directionsText()
        if(chosenPokemon.indexOf(letterChosen) !== -1){
            // here I want something that iterates over the name and checks for duplicates and then removes
            // the dash at that index and puts letter chosen

            dash.splice(chosenPokemon.indexOf(letterChosen))

            

        }

        else if(){
            // here if guesses left =0 update losses to 1 and reset guesses left to 9 as well as choose new pokemon name
            // and reset dash array
            } else {
                         // here I want to check if guessesleft = 0 if not update remainguesses to guessesleft --
            }


           
        





    }

    
}

//#endregion
