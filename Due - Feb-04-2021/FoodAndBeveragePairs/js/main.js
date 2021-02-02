
// let drinks = 'https://api.punkapi.com/v2/beers?'

// fetch(drinks)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       //console.log(data)
//       data.forEach(brew => {
//         console.log(brew)
//         console.log(brew.food_pairing[0])
//         let foods1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${brew.food_pairing[0]}`
//         let foods2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${brew.food_pairing[1]}`
//         let foods3 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${brew.food_pairing[2]}`
//         fetch(foods1)
//           .then(res => res.json())
//           .then(data => {
//             console.log(data)
//           })
//           .catch(err => console.log(err))
//         fetch(foods2)
//           .then(res => res.json())
//           .then(data => {
//             console.log(data)
//           })
//           .catch(err => console.log(err))
//         fetch(foods3)
//           .then(res => res.json())
//           .then(data => {
//             console.log(data)
//           })
//           .catch(err => console.log(err))
//       })
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });




//FOODS
// Optional Parameters:
// i : comma delimited ingredients
// q : normal search query
// p : page
// format=xml : if you want xml instead of json 

fetch("https://api.edamam.com/search?q=chicken&app_id=ef2a1231&app_key=b5a595d2db9574be00b6f9d446c03184")
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))