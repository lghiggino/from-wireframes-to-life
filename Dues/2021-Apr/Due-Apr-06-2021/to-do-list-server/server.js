const express = require ("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
require("dotenv").config();
const PORT = 2121;

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'todos'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        //db is the connection to the database
        db = client.db(dbName)
    })
    .catch(error => console.log(error))


app.use(cors("http://localhost:3000/"))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
    

app.get("/", async (request, response) => {
    try{
        const data = await db.collection("todos").find().toArray()
        response.render("index.ejs", {zebra:data})
    }
    catch(err){
        console.log(err)
    }
})

app.get("/api", async (request, response) => {
    try{
        const data = await db.collection("todos").find().toArray()
        response.json(data)
    }
    catch(err){
        console.log(err)
    }
})

app.post("/createTodo", async (request, response) => {
    console.log(request.body.todoItem)
    try{
        const insert = await db.collection("todos").insertOne({todo: request.body.todoItem, completed: false})
        console.log("added todo to DB", request.body.todoItem)
        response.redirect("/")
    }
    catch(err){
        console.log(err)
    }
})

app.post("/createTodoReact", async (request, response) => {
    console.log(request.body.rainbowUnicornCupcake)
    try{
        const insert = await db.collection("todos").insertOne({todo: request.body.rainbowUnicornCupcake, completed: false})
        console.log("added todo to DB", request.body.rainbowUnicornCupcake)
        response.redirect("/")
    }
    catch(err){
        console.log(err)
    }
})

app.delete("/deleteTodo", async (request, response) => {
    try{
        const hitDelOne = await db.collection("todos").deleteOne({todo: request.body.rainbowUnicorn})
        console.log("deleted todo", request.body.rainbowUnicorn)
        response.json("deleted it")
    }
    catch(err){
        console.log(err)
    }
})

app.delete("/deleteTodoReact", async (request, response) => {
    try{
        const hitDelOne = await db.collection("todos").deleteOne({todo: request.body.rainbowUnicornOatmeal})
        console.log("deleted todo", request.body.rainbowUnicornOatmeal)
        response.json("deleted it")
    }
    catch(err){
        console.log(err)
    }
})

app.put("/markComplete", async(request, response) => {
    try{
        const hitCompleteOne = await db.collection("todos").updateOne({todo: request.body.rainbowUnicorn},{
            $set: {
                completed: true
            }
        })
        console.log("marked complete", request.body.rainbowUnicorn)
        response.json("marked complete")
    }catch(err){
        console.log(err)
    }
})

app.put("/markCompleteReact", async(request, response) => {
    try{
        const document = await db.collection("todos").findOne({todo: request.body.rainbowUnicornCoffee})
        console.log("line 112:", document.completed)
        const hitCompleteOne = await db.collection("todos").updateOne({todo: request.body.rainbowUnicornCoffee},{
            $set: {
                completed: !document.completed
            }
        })
        console.log("marked complete", request.body.rainbowUnicornCoffee)
        response.json("marked complete")
    }catch(err){
        console.log(err)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running, you better catch it on http://localhost:${PORT}`)
})



