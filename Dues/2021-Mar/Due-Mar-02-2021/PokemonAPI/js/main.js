console.log("JS is on");

const main = document.querySelector("main")
const allCards = document.getElementById("all-cards")
const submitBtn = document.querySelector("button")
submitBtn.addEventListener("click", fetchSingle)
window.addEventListener("DOMContentLoaded", fetchAll)

async function fetchAll(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36&offset=20");  
    const data = await response.json()
    fetchDataArray(data.results)
}

function fetchDataArray(array){
    allCards.innerHTML = ""
    array.forEach(async function(pokemon){
        const response = await fetch(pokemon.url)
        const data = await response.json()
        renderCard(data)
    })
}

async function fetchSingle(){
    const input = document.querySelector("input")
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
    allCards.innerHTML = ""
    renderCard(await response.json())
}

function renderCard(data){
    //console.log(data)
    const numOfTypes = !data.types[1] ? data.types[0].type.name : (data.types[0].type.name, data.types[1].type.name)
    const typesMapped = data.types.map(el => `<span class="type1">${el.type.name}</span>`)
        allCards.innerHTML +=`
        <article id="${data.id}" class="card" style=${cardBgColor(numOfTypes)}>
            <img src="../assets/dlf.pt-pokemon-ball-png-4253969.png" alt="" class="bg-image">
            <div class="text-content">
                <h2 class="poke-name">${data.name}</h2>
                ${typesMapped}
            </div>
            <div class="image-content">
                <img src="${data.sprites.front_default}" alt="${data.name}">
            </div>
        </article>
    `
}

function cardBgColor(type, type2){
    if (type === "normal" && type2 ){
        type = type2
    }
    const bgColors = {
        grass: "green",
        fire:"#b7581e",
        electric: "yellow",
        bug: "brown",
        poison:"#800070",
        rock:"gray",
        water:"#8bacd5",
        fairy:"#ffc5b4",
        ghost:"lightblue",
        ground:"#a45a5a",
        steel:"",
        ice:"",
        dark:"",
        psychic:"",
        dragon:"",
        fighting:"",
        flying:"lightskyblue",
    }
    return !bgColors[type] ? `background:#d9f1ff` : `background:${bgColors[type]}`
}
