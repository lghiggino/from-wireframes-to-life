const main = document.querySelector("main")

let drinksAPI = 'https://api.punkapi.com/v2/beers?'

fetch(drinksAPI)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      
      // data.forEach(brew => {
      //   console.log(brew)
      //   console.log(brew.food_pairing[0], brew.food_pairing[1], brew.food_pairing[2])
      //   //fetchFoods(brew.food_pairing[0])
      //   //fetchFoods(brew.food_pairing[1])
      //   //fetchFoods(brew.food_pairing[2])
      // })
      renderData(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

function renderData(data){
  main.innerHTML = "";
  data.forEach(brew => {
    console.log(brew)
    console.log(brew.food_pairing[0], brew.food_pairing[1], brew.food_pairing[2])
    main.innerHTML += `
    <section class="single-brew" id="b${brew.id}">
      <img src="${brew.image_url}" alt="${brew.tagline}">
      <h2 class="name">${brew.name}</h2>
      <p class="description">${brew.description}.</p>
      <p class="abv">${brew.abv}% ABV</p>
      <ul class="pairings">
        <li><h4>Food Pairings:</h4></li>
        <li class="dish"><a href="">${brew.food_pairing[0]}</a></li>
        <li class="dish"><a href="">${brew.food_pairing[1]}</a></li>
        <li class="dish"><a href="">${brew.food_pairing[2]}</a></li>
      </ul>
    </section>
    `
  })
}

function fetchFoods(food1, food2, food3){
  fetch(`https://api.edamam.com/search?q=${brew.food_pairing[0]}&app_id=ef2a1231&app_key=b5a595d2db9574be00b6f9d446c03184`)
    .then(res => res.json())
    .then(data => {
      console.log(data.hits)
    })
    .catch(err => console.log(err))
  fetch(`https://api.edamam.com/search?q=${brew.food_pairing[1]}&app_id=ef2a1231&app_key=b5a595d2db9574be00b6f9d446c03184`)
    .then(res => res.json())
    .then(data => {
      console.log(data.hits)
    })
    .catch(err => console.log(err))
  fetch(`https://api.edamam.com/search?q=${brew.food_pairing[2]}&app_id=ef2a1231&app_key=b5a595d2db9574be00b6f9d446c03184`)
    .then(res => res.json())
    .then(data => {
      console.log(data.hits)
    })
    .catch(err => console.log(err))
}



//EDAMAN BASIC FETCH
// fetch(`https://api.edamam.com/search?q=chicken&app_id=ef2a1231&app_key=b5a595d2db9574be00b6f9d446c03184`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.hits)
//   })
//   .catch(err => console.log(err))
