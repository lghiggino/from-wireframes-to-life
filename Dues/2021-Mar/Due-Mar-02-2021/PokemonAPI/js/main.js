console.log("JS is on");

const main = document.querySelector("main")
const allCards = document.getElementById("all-cards")
const submitBtn = document.querySelector("button")
submitBtn.addEventListener("click", fetchSingle)
window.addEventListener("DOMContentLoaded", fetchAll)

let pokemonData

async function fetchAll(){
    const apiFirst50Pokemon = "https://pokeapi.co/api/v2/pokemon?limit=36&offset=20"
    const response = await fetch(apiFirst50Pokemon);  
    const data = await response.json()
    pokemonData = data.results
    fetchDataArray(pokemonData)
}

function fetchDataArray(array){
    allCards.innerHTML = ""
    array.forEach(pokemon => {
            fetchOne(pokemon.url)
    })
}

async function fetchOne(apiURL){
    const response = await fetch(apiURL)
    const data = await response.json()
    renderCard(data)
}

async function fetchSingle(){
    const input = document.querySelector("input")
    let singlePokemon = ""
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
    const data = await response.json()
    allCards.innerHTML = ""
    singlePokemon = data
    renderCard(singlePokemon)
}

function renderCard(data){
    console.log(data)
    if (!data.types[1]){
        allCards.innerHTML +=`
        <article id="${data.id}" class="card" style=${cardBgColor(data.types[0].type.name)}>
            <img src="../assets/dlf.pt-pokemon-ball-png-4253969.png" alt="" class="bg-image">
            <div class="text-content">
                <h2 class="poke-name">${data.name}</h2>
                <span class="type1">${data.types[0].type.name}</span>
            </div>
            <div class="image-content">
                <img src="${data.sprites.front_default}" alt="${data.name}">
            </div>
        </article>
    `
    }else{
        allCards.innerHTML += `
        <article id="${data.id}" class="card" style=${cardBgColor(data.types[0].type.name, data.types[1].type.name)}>
        <img src="../assets/dlf.pt-pokemon-ball-png-4253969.png" alt="" class="bg-image">
        <div class="text-content">
            <h2 class="poke-name">${data.name}</h2>
            <span class="type1">${data.types[0].type.name}</span>
            <span class="type2">${data.types[1].type.name}</span>
        </div>
        <div class="image-content">
            <img src="${data.sprites.front_default}" alt="${data.name}">
        </div>
        </article>
    `
    }
   
}

function cardBgColor(type, type2){
    if (type === "normal" && type2 ){
        type = type2
    }
    switch(type){
        case("fire"):
        return "background:red";
        case("grass"):
        return "background:green";
        case("fire"):
        return "background:#b7581e";
        case("electric"):
        return "background:yellow";
        case("bug"):
        return "background:brown";
        case("poison"):
        return "background:#800070";
        case("rock"):
        return "background:gray";
        case("water"):
        return "background:#8bacd5";
        case("fairy"):
        return "background:#ffc5b4";
        case("ghost"):
        return "background:lightblue";
        case("ground"):
        return "background:#a45a5a";
        case("steel"):
        return "background:lightblue";
        case("ice"):
        return "background:lightblue";
        case("dark"):
        return "background:lightblue";
        case("psychic"):
        return "background:lightblue";
        case("dragon"):
        return "background:lightblue";
        case("fighting"):
        return "background:lightblue";
        case("flying"):
        return "background:lightskyblue";
        default:
        return "background:#d9f1ff";
    }
    


}
