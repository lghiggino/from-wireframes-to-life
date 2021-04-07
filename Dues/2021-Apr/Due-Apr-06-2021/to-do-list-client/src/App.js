import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

//components
import Header from "./components/Header.js"

const DeleteButton = (props) => {
  return(
    <button id={props.id} onClick={props.handleClick}>del</button>
  )
}


function App() {
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
      window.location.reload()
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
        console.log(data)
        window.location.reload()
      }catch (err){
        console.log(err)
      }
    }

    // this beats the purpose of react, but its working in tandem with the server
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
          console.log(data)
          window.location.reload()
      }
      catch (err){
          console.log(err)
      }
    }

  return (
    <div className="App">
      <Header logo={logo} altText={"logo"}/>
      <main className="App-main">
        <h1> to-do-list</h1>
        <div>
          <ul>
            {data.map((element,idx) => {
              if (element.completed){
                return(
                  <li onClick={markOneComplete} key={idx} id={`li-${idx}`} className="">{element.todo} <DeleteButton id={`del-${idx}`} handleClick={deleteOneTodo}></DeleteButton></li>
                )
              } else{
                return (
                  <li onClick={markOneComplete} key={idx} id={`li-${idx}`} className="simple-todo">{element.todo} <DeleteButton id={`del-${idx}`} handleClick={deleteOneTodo}></DeleteButton></li>
                )
              }
            })}
          </ul>
        </div>
        <div>
          <form>
            <input type="text" name="todoItem" placeholder="enter item to submit" />
            <button onClick={postData}>Create Todo</button>
          </form>
        </div>
      </main>
    </div>
  );
}



export default App;
