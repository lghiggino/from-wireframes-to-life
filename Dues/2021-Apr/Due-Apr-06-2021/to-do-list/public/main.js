const deleteBtns = document.querySelectorAll(".del")

Array.from(deleteBtns).forEach(el => {
    el.addEventListener("click", deleteOneTodo)
})

async function deleteOneTodo(){
    const todoText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch("deleteTodo", {
            method: "delete",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "rainbowUnicorn" : todoText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch (err){
        console.log(err)
    }
}

const todoItems = document.querySelectorAll(".todo-item span")

Array.from(todoItems).forEach(el => {
    el.addEventListener("click", markOneComplete)
})

async function markOneComplete(){
    const todoText = this.parentNode.childNodes[1].innerText
    console.log(todoText)
    try{
        const response = await fetch("markComplete", {
            method: "put",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "rainbowUnicorn" : todoText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch (err){
        console.log(err)
    }
}