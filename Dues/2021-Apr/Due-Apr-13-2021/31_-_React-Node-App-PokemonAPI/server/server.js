const express = require("express");
const app = express();
const cors = require("cors")


const PORT = process.env.PORT || 3001;

const options = {
  origin: 'http://localhost:3000'
}

app.use(cors(options))

app.get("/apiOne", (request,response) => {
    response.json( {
      message: "Hello from server!",
      name: "Leonardo",
      surname: "Ghiggino",
      dob: "13/11/1980"
    } )
})

app.get("/apiTwo", (request,response) => {
  response.json( { 
    message: "lorem ipsum", 
    name: "João",
    surname: "Flor Ghiggino",
    dob: "01/04/2021"
  } )
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});