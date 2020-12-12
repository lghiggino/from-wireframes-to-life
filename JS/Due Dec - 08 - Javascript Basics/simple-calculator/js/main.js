let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector("#double").addEventListener("click", double);
document.querySelector("#one-third").addEventListener("click", oneThird);
document.querySelector("#round").addEventListener("click", round);

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total += 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total += 9
  document.querySelector('#placeToPutResult').innerText = total
}

function sub2() {
  total -= 2
  document.querySelector('#placeToPutResult').innerText = total
}

function double(){
  total *= 2;
  document.querySelector("#placeToPutResult").innerText = total
}

function  oneThird(){
  total /= 3;
  document.querySelector("#placeToPutResult").innerText = total
}

function round(){
  total = Math.round(total)
  document.querySelector("#placeToPutResult").innerText = total
}