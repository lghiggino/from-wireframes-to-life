import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

//components
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Login from "./components/Login.js"
import Submit from "./components/Submit.js"
import DeleteButton from "./components/DeleteButton.js"

function App() {
  //stateManagement for the navigation
  const [page, setPage] = useState("home")
  //stateManagement for API stuff
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    getData()
    }, []);

    async function getData() {
        await axios("http://localhost:2121/api")
          .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
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
      // window.location.reload() - react saves us from reloading the window by using useEffect
      getData()
    }

    async function deleteOneTodo(e){
      const todoText = e.target.parentNode.childNodes[0].textContent
      console.log("todoText:", todoText)
      console.log("same li id:", e.target.parentNode.id)
      try{
        const response = await fetch("http://localhost:2121/deleteTodoReact", {
            method: "delete",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "rainbowUnicornOatmeal" : todoText
            })
        })
        const data = await response.json()
        getData()
      }catch (err){
        console.log(err)
      }
    }

    async function markOneComplete(e){
      e.target.classList.toggle("simple-todo")
      const todoText = e.target.childNodes[0].textContent
      // console.log(todoText)
      try{
          const response = await fetch("http://localhost:2121/markCompleteReact", {
              method: "put",
              headers: {"Content-type": "application/json"},
              body: JSON.stringify({
                  "rainbowUnicornCoffee" : todoText
              })
          })
          const data = await response.json()
          getData()
      }
      catch (err){
          console.log(err)
      }
    }

  return (
    <div className="App">
      <Header logo={logo} altText={"logo"} className="Banana" setPage={setPage}/>
      <div className="content">
        {page === "list" ? <Home /> : page === "login" ? <Login /> : <Submit handleClick={postData}/>}
      </div>
      <main className="App-main">
        <h1> React to-do-list</h1>
        <div>
          <ul>
            {data.map((element,idx) => {
              if (element.completed){
                return(
                  <li onClick={markOneComplete} key={idx} id={`li-${idx}`} className="">{element.todo} <DeleteButton className="del" id={`del-${idx}`} handleClick={deleteOneTodo}></DeleteButton></li>
                )
              } else{
                return (
                  <li onClick={markOneComplete} key={idx} id={`li-${idx}`} className="simple-todo">{element.todo} <DeleteButton className="del" id={`del-${idx}`} handleClick={deleteOneTodo}></DeleteButton></li>
                )
              }
            })}
          </ul>
        </div>
        <div>
          <p>To enter new data click submit on the menu</p>
        </div>
      </main>
    </div>
  );
}



export default App;
