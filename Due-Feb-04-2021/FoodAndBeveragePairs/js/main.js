const main = document.querySelector("main")
let drinksAPI = 'https://api.punkapi.com/v2/beers?'
//let foodAPI = `https://api.edamam.com/search?q=${foodName}&app_id=ef2a1231&app_key=b5a595d2db9574be00b6f9d446c03184`

fetch(drinksAPI)
    .then(res => res.json())
    .then(data => {
      renderAllDrinks(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

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
          <li class="dish"><a href="" target="blank" data-id="b${id}" data-food="${food_pairing[0]}">${food_pairing[0]}</a></li>
        </ul>
    </section>
      ` )
  })
}

function fetchFoodPairing(foodName){
  let foodAPI = `https://api.edamam.com/search?q="${foodName}"&app_id=ef2a1231&app_key=b5a595d2db9574be00b6f9d446c03184`
  fetch(foodAPI)
    .then(res => res.json())
    .then(data => {
      let foodLink = data.hits[1].recipe.shareAs
      // console.log(data.hits[1])
      console.log(foodLink)
      createFoodLink()
    })
    .catch(err => console.error(err))
}



function createFoodLink(){
  let allDishes = document.querySelectorAll(".dish")
  allDishes.forEach(dish => {
    console.log(dish.dataset)
  })
}