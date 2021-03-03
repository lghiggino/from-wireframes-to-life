console.log("JS is on");

const main = document.querySelector("main")
const allCards = document.getElementById("all-cards")
const input = document.querySelector("input")
const submit = document.querySelector("button")
window.addEventListener("DOMContentLoaded", fetchAll)

let pokemonData

async function fetchAll(){
    const apiFirst50Pokemon = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
    const response = await fetch(apiFirst50Pokemon);  
    const data = await response.json()
    //do something with data
    pokemonData = data.results
    renderCards(pokemonData)
}

function renderCards(dataArray){
    allCards.innerHTML = ""
    dataArray.forEach(pokemon => {
        console.log(pokemon)
    })
}



async function singleFetch(){
   // const apiURL = `https://pokeapi.co/api/v2/pokemon/${input.value}`
   const response = await fetch(apiURL);
   const data = await response.json()
   pokemonData = data.results //?
   renderCards(pokemonData)
}