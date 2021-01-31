//Example fetch using pokemonapi.co
document.querySelector('#question').addEventListener('click', getFetch)

function getFetch(){
  const url = `http://jservice.io/api/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
      
}

document.querySelector("#answer")