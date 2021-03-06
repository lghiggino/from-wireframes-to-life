const main = document.querySelector("main")

let drinksAPI = 'https://api.punkapi.com/v2/beers?'

async function getDrinkData(){
  let drinksAPI = 'https://api.punkapi.com/v2/beers?'
  const response = await fetch(drinksAPI)
  const data = await response.json()
  //console.log(data)
  renderAllDrinks(data)
} 

function renderAllDrinks(data){
    //console.log(data)
    data.forEach(drink => {
      // console.log(drink)
      const {abv, 
             id,
             description, 
             image_url, 
             food_pairing,
             tagline,
             name,} = drink
      // console.log(food_pairing[0])
      fetchFoodPairing(food_pairing[0])
    
  
        main.insertAdjacentHTML("afterbegin", `
        <section class="single-brew" id="b${id}">
          <img src="${image_url}" alt="${tagline}">
          <h2 class="name">${name}</h2>
          <p class="description">${description}.</p>
          <p class="abv">${abv}% ABV</p>
          <ul class="pairings">
            <li><h4>Food Pairings:</h4></li>
            <li class="dish"><a href="${fetchFoodPairing(food_pairing[0])}" target="blank">${food_pairing[0]}</a></li>
          </ul>
      </section>
        `)
  })
}

async function fetchFoodPairing(foodName){
  let foodAPI = `https://api.edamam.com/search?q="${foodName}"&app_id=ef2a1231&app_key=b5a595d2db9574be00b6f9d446c03184`
  const response = await fetch(foodAPI)
  const data = await response.json()
  console.log(data.hits[0].recipe.shareAs)
  let foodLink = data.hits[0].recipe.shareAs
  return foodLink
}

getDrinkData()