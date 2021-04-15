import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

//components
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Login from "./components/Login.js"
import Submit from "./components/Submit.js"
import List from "./components/List.js"

function App() {
  //stateManagement for the navigation
  const [page, setPage] = useState("home")
  //stateManagement for API stuff
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    getDataFetch()
    }, [data]);

    async function getDataFetch() {
      try{
        const response = await fetch ("http://localhost:2121/api")
        const data = await response.json()
        setData(data)
        setLoading(false)
        setError(false)
      }catch(err){
        console.error(err)
      }
    }

      if (loading) return "Loading data...";
      if (error) return "Error fetching data!";
      
    async function postData(e){
      e.preventDefault()
      const inputValue = document.querySelector("input").value
      const response = await fetch("http://localhost:2121/createTodoReact", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          "rainbowUnicornCupcake" : inputValue
        })
      })
      console.log("data was posted", inputValue)
      // window.location.reload() - react saves us from reloading the window by using useEffect handling the data re-render on state change
    }

    async function deleteOneTodo(e){
      const todoText = e.target.parentNode.childNodes[0].textContent
      try{
        const response = await fetch("http://localhost:2121/deleteTodoReact", {
            method: "delete",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "rainbowUnicornOatmeal" : todoText
            })
        })
      }catch (err){
        console.error(err)
      }
    }

    async function markOneComplete(e){
      e.target.classList.toggle("simple-todo")
      const todoText = e.target.childNodes[0].textContent
      try{
          const response = await fetch("http://localhost:2121/markCompleteReact", {
              method: "put",
              headers: {"Content-type": "application/json"},
              body: JSON.stringify({
                  "rainbowUnicornCoffee" : todoText
              })
          })
      }
      catch (err){
          console.error(err)
      }
    }

    function manageLogin(e){
      e.preventDefault()
      console.log("Login button was clicked")
    }

  return (
    <div className="App">
      <Header logo={logo} altText={"logo"} className="Banana" setPage={setPage}/>
      <div className="content">
        {page === "login" ? <Login handleClick={manageLogin} /> : page === "list" ? <Home /> :  <Submit handleClick={postData}/>}
      </div>
      <main className="App-main">
        <h1> React to-do-list</h1>
        <div>
          <List data={data} handleClick={markOneComplete} deleteAction={deleteOneTodo}></List>
        </div>
        <div>
          <p>To enter new data click submit on the menu</p>
        </div>
      </main>
    </div>
  );
}

export default App;
