document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById("white").onclick = backToWhite;
document.getElementById("crazy").onclick = partyCrazy;
document.getElementById("really-crazy").onclick = youHaveNoIdea;

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const image = document.querySelector("img");

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function backToWhite(){
  document.querySelector("body").style.backgroundColor= "rgba(255,255,255,1)";
  document.querySelector("body").style.color = "black";
}

function randomRGB(){
  let red = Math.floor(Math.random()* 255);
  let green = Math.floor(Math.random()* 255);
  let blue = Math.floor(Math.random()* 255);
  return `${red}, ${green}, ${blue}, 1`;
}

function partyCrazy(){
  document.querySelector('body').style.backgroundColor = `rgba(${randomRGB()})`
  document.querySelector('body').style.color = 'white'
  document.getElementById("crazy").innerText = "click again"
}

function youHaveNoIdea(){
  image.classList.add("spinningChair")
  h1.innerText ="I told you not to click there!";
  h1.classList.add("hugeTitle");
  h2.innerText= "Beautiful JS Vomit! Press F5 to exit this mess"

  console.log("Now, this is a smurf party!");
  setInterval(partyCrazy, 500);
}

