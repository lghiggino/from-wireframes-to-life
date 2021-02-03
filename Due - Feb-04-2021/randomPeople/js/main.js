const url = `https://randomuser.me/api/?exc=nat&origin=*`;

function makeUserCard(data) {
  /* destructured variables
  const {
    user: {first, last},
    picture,
    email, 
    phone} = data.results[0]
  */

  const result = data.results[0];
  const first = result.name.first;
  const last = result.name.last;
  const picture = result.picture;
  const email = result.email;
  const phone = result.phone;
  const city = result.location.city
  const country = result.location.country

  return `
  <article class="card">
    <div class="card-img-container">
      <img class="card-img" src="${picture.large}" alt="${first} ${last} profile picture">
    </div>
    <div class="card-info-container">
      <h3 class="card-name cap">${first} ${last}</h3>
      <p class="card-text">${email}</p>
      <p class="card-text cap">${phone}</p>
      <p class="card-text cap">${city}, ${country}</p>
    </div>
  </article>`;
}

function getUsers(num) {
  for (let i = 0; i < num; i++) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        document
          .querySelector(".people-gallery")
          .insertAdjacentHTML("afterbegin", makeUserCard(data));
      })
      .catch((err) => console.error("Error: " + err.message));
  }
}

getUsers(9);
