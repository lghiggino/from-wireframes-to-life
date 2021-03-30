const express = require ("express");
const app = express();
const PORT = 2222;
const morgan = require("morgan")

//database
let persons = require ("./persons");

//middleware
app.use(express.json())
const requestLogger = (request, response, next) => {
    console.log("Method:", request.method)
    console.log("Path:", request.path)
    console.log("Body:", request.body)
    console.log("-=-=-=-=-")
    next()
}
//app.use(requestLogger)

app.use(morgan('tiny'))

//routing
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
        response.json("404 - file not found")
        response.status(404)
    }
    response.end()
    app.use(morgan())
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

app.delete("/api/persons/:id", (request, response) => {
    const requestedId = Number(request.params.id)
    persons = persons.filter(el => el.id !== requestedId)
    response.status(204).end()
})

app.post("/api/persons/:name/:number", (request, response) => {
    function generateId(){
        let mappedIds = persons.map(el => el.id)
        let maxId = Math.max(...mappedIds)
        return maxId+1
    }
    let name = request.params.name
    let number = request.params.number
    if(!name || !number){
        return response.status(404).json({error : "content missing"})
    }else if(persons.some(el => el.name === name)){
        return response.status(404).json({error : "name already exists"})
    }
    // console.log(name, number)
    const newPerson = {id:generateId(), name:name, number:number}
    persons.push(newPerson)
    response.json(persons)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: "unknown endpoint"})
}

app.use(unknownEndpoint)

//INIT the server
app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`)
})