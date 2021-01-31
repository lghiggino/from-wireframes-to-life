//Example fetch using pokemonapi.co
document.querySelector('#question').addEventListener('click', getFetch)

function getFetch(){
  const url = ` https://catalogue.data.govt.nz/api/action/datastore_search?q=health&resource_id=4c5f6967-6c6d-4981-aa10-6b6790918cb5`

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