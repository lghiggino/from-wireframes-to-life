const button = document.querySelector("button")

button.addEventListener("click", fetch)

async function fetch(){
    const res = await fetch("http://127.0.0.1:3000/coinFlip")
    const data = await res.json()
    console.log(data)
}