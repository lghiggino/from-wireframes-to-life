//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let APIAdress = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const button = document.querySelector("button")
const allDrinksDiv = document.querySelector("div.all-drinks")

button.addEventListener("click", () => {
    const inputValue = document.querySelector("#request").value
    allDrinksDiv.innerHTML = "";
    
    fetch(APIAdress+inputValue)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks);
            data.drinks.forEach(element => {
                const link = document.createElement("a")
                //create a link here to a template page that renders with the data from the idDrink
                //window.location.href="index.html";
                link.href="#"
                link.classList.add("single-drink");
                const div = document.createElement("div");
                const h2 = document.createElement("h2");
                h2.innerText = element.strDrink;
                const img = document.createElement("img");
                img.src = element.strDrinkThumb;
                const instructions = document.createElement("p");
                instructions.innerText = element.strInstructions;

                div.appendChild(h2);
                div.appendChild(img);
                div.appendChild(instructions);

                link.appendChild(div)

                
                allDrinksDiv.appendChild(link);
            });
        })
        .catch(err =>{
            console.log(err)
        })
})





