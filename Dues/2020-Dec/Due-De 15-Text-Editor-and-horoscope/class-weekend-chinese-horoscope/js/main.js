// click event on the button
const button = document.getElementById("check")
button.addEventListener("click", checkHoroscope)

//place to see the result
const placeToSee = document.getElementById("placeToSee")
const animalImage = document.getElementById("animal-image")
const textContainerSection = document.getElementById("text-container")
const recentYears = document.getElementById("recentYears");
const order = document.getElementById("order");
const personality0 = document.getElementById("personality0");
const personality1 = document.getElementById("personality1");
const personality2 = document.getElementById("personality2");
const personality3 = document.getElementById("personality3");
const luckyNumbers = document.getElementById("luckyNumbers");
const luckyColors = document.getElementById("luckyColors");
const luckyFlowers = document.getElementById("luckyFlowers");
const luckyDays = document.getElementById("luckyDays");
const luckyMonths = document.getElementById("luckyMonths");

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

}

function renderSignInfo(sign){
  console.log(sign)
  //image
  animalImage.classList.remove("hidden")
  animalImage.src = sign.img
  //text
  textContainerSection.classList.remove("hidden")
  recentYears.innerText = sign.recentYears;
  order.innerText = sign.order;
  personality0.innerText = sign.personality0;
  personality1.innerText = sign.personality1;
  personality2.innerText = sign.personality2;
  personality3.innerText = sign.personality3;
  luckyNumbers.innerText = `Lucky Numbers: ${sign.luckyNumbers}`;
  luckyColors.innerText =  `Lucky Colors: ${sign.luckyColors}`;
  luckyFlowers.innerText = `Lucky Flowers: ${sign.luckyFlowers}`;
  luckyDays.innerText =  `Lucky Days: ${sign.luckyDays}`;
  luckyMonths.innerText = `Lucky Months: ${sign.luckyMonths}`;
}

