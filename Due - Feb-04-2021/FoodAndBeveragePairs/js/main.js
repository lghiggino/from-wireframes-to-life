
let drinks = 'https://api.punkapi.com/v2/beers?'

fetch(drinks)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      //console.log(data)
      data.forEach(brew => {
        console.log(brew)
        console.log(brew.food_pairing[0])
        let foods = `https://www.themealdb.com/api/json/v1/1/search.php?s=${brew.food_pairing[0]}`
        fetch(foods)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
          .catch(err => console.log(err))
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });




//FOODS
// Optional Parameters:
// i : comma delimited ingredients
// q : normal search query
// p : page
// format=xml : if you want xml instead of json 