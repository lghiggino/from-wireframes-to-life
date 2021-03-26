const button = document.querySelector("button")
const span = document.querySelector("span")

button.addEventListener("click", getFlip)

async function getFlip(){
    const res = await fetch("http://localhost:3000/api/coinflip")
    const data = await res.json()
    console.log(data)
    span.innerText = data
}