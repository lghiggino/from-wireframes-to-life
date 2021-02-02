
let drinks = 'https://api.punkapi.com/v2/beers?'

fetch(drinks)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      //console.log(data)
      data.slice(1,2).forEach(brew => {
        console.log(brew)
        console.log(brew.food_pairing[0], brew.food_pairing[1], brew.food_pairing[2])
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
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });






//EDAMAN BASIC FETCH
// fetch(`https://api.edamam.com/search?q=chicken&app_id=ef2a1231&app_key=b5a595d2db9574be00b6f9d446c03184`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.hits)
//   })
//   .catch(err => console.log(err))
