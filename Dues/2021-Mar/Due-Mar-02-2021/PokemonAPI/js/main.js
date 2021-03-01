console.log("JS is on");

const main = document.querySelector("main")
const input = document.querySelector("input")
const submit = document.querySelector("button")
submit.addEventListener("click", makeFetch)

let pokemonData

async function makeFetch(){
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${input.value}`
    const response = await fetch(apiURL);  
    const data = await response.json()
    //do something with data
    pokemonData = data
}


