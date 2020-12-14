// click event on the button
const button = document.getElementById("check")
button.addEventListener("click", checkHoroscope)

//place to see theresult
const placeToSee = document.getElementById("placeToSee")
const animalImage = document.getElementById("animal-image")

function checkHoroscope(){
  //check the user input date
  const birthDate = document.querySelector("#day").value;

  //split the string into day, month and year
  const year = Number.parseInt(birthDate.slice(0, 4))
  const month = Number.parseInt(birthDate.slice(5, 7))
  const day = Number.parseInt(birthDate.slice(8, birthDate.length))
  console.log("year:", year, "month:", month,"day:", day)

  //determine the chineseYear
  let chineseYear = year % 12

  //checking the exceptions
  for (i = 0; i < exceptions.length; i++){
    if ((year === exceptions[i][0]) && (month === exceptions[i][1]) && (day <= exceptions[i][2])){
      chineseYear--
    }
  }

  switch(true){
    case (chineseYear === 0):
      placeToSee.innerText = "Monkey"
      renderSignInfo(monkey)
      break;
    case (chineseYear === 1):
      placeToSee.innerText = "Rooster"
      renderSignInfo(rooster)
      break;
    case (chineseYear === 2):
      placeToSee.innerText = "Dog"
      renderSignInfo(dog)
      break;
    case (chineseYear === 3):
      placeToSee.innerText = "Pig"
      renderSignInfo(pig)
      break;
    case (chineseYear === 4):
      placeToSee.innerText = "Rat"
      renderSignInfo(rat)
      break;
    case (chineseYear === 5):
      placeToSee.innerText = "Ox"
      renderSignInfo(ox)
      break;
    case (chineseYear === 6):
      placeToSee.innerText = "Tiger"
      renderSignInfo(tiger)
      break;  
    case (chineseYear === 7):
      placeToSee.innerText = "Rabbit"
      renderSignInfo(rabbit)
      break;
    case (chineseYear === 8):
      placeToSee.innerText = "Dragon"
      renderSignInfo(dragon)
      break;
    case (chineseYear === 9):
      placeToSee.innerText = "Snake"
      renderSignInfo(snake)
      break;
    case (chineseYear === 10):
      placeToSee.innerText = "Horse"
      renderSignInfo(horse)
      break;
    case (chineseYear === 11):
      placeToSee.innerText = "Goat"
      renderSignInfo(goat)
      break; 
  }

  //compare its year to see chinese

}

function renderSignInfo(sign){
  console.log(sign)
  animalImage.src = sign.img
}

