import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

//components
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Login from "./components/Login.js"
import Submit from "./components/Submit.js"
import DeleteButton from "./components/DeleteButton.js"

const ListItem = (props) => {
  return (
    <li onClick={props.handleClick} key={props.key} id={props.id} className={props.className}>{props.todo} <DeleteButton id={`del-${props.id}`} handleClick={props.deleteAction}/></li>
  )
}

const List = (props) => {
  return (
    <ul>
      {props.data.map((singleElement, idx) => 
      //ternary controls the CSS classes
        singleElement.completed ? 
          <ListItem handleClick={props.handleClick} todo={singleElement.todo} key={idx} id={singleElement._id} className="" deleteAction={props.deleteAction}></ListItem> :
          <ListItem handleClick={props.handleClick} todo={singleElement.todo} key={idx} id={singleElement._id} className="simple-todo" deleteAction={props.deleteAction}></ListItem>
      )}
    </ul>
  )
}

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
        const res = await fetch ("http://localhost:2121/api")
        const data = await res.json()
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
      // window.location.reload() - react saves us from reloading the window by using useEffect handling the data re-render
    }

    //refatorar essa função para usar o id como parâmetro, não a relação dos elementos da DOM
    async function deleteOneTodo(e){
      console.log(e.target)
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
      }catch (err){
        console.error(err)
      }
    }

    async function deleteOneTodoTwo(e){
      const todoId = e.target.id.slice(4)
      console.log(typeof todoId)
      try{
        const response = await fetch("http://localhost:2121/deleteTodoReactId", {
            method: "delete",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "todoIdFromReact" : `ObjectId("${todoId}")`,
            })
        })
      }catch(err){
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
          <List data={data} handleClick={markOneComplete} deleteAction={deleteOneTodoTwo}></List>
        </div>
        <div>
          <p>To enter new data click submit on the menu</p>
        </div>
      </main>
    </div>
  );
}



export default App;
