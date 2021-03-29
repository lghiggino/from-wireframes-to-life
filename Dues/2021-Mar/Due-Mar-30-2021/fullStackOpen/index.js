const express = require ("express");
const app = express();
const PORT = 2222;

const persons = require ("./persons");

app.use(express.json())

app.get("/", (request, response) => {
    response.send("<h1>Hello from Home /</h1>")
    response.end()
})
app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/api/persons/:id", (request, response) => {
    const idParam = Number(request.params.id)
    let answer = persons.find(el => el.id === idParam)
    if (answer){
        response.json(answer)
    }else{
        response.status(404)
    }
    response.end()
})

app.get("/info", (request, response) => {
    const length = persons.length
    const date = new Date
    response.send(`
        <h1> Phonebook info </h1>
        <p> Phonebook has info for ${length} people </p>
        <p> ${date}</p>
    `)
    response.end()
})


//INIT the server
app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`)
})