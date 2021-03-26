const express = require ("express")
const app = express()
const cors = require("cors")

app.use(cors())

let savage = {
    age: 28,
    firstName: "Sheyaa Bin Abrham-Joseph",
    birthPlace: "London, England"
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/savage", (request, response) => {
    response.json(savage)
})

app.get("/api/coinflip",(request, response) => {
    function flipper(){
        return ["Heads", "Tails"][Math.round(Math.random())]    
    }
    response.json(flipper())
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on "http://localhost:${PORT}" `)
})