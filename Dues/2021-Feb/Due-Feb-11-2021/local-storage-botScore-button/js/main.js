//enter our books on the API and store them on the localStorage
const submitBtn = document.getElementById("submitISBN")
const bookShelf = document.getElementById("book-shelf")
const bookTitle = document.getElementById("book-title")
// const bookAuthor = document.getElementById("book-author")
const firstLine = document.getElementById("first-line")

//renderShelf()

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let choice = document.getElementById("bookISBN").value
    if(!localStorage.getItem("bookLibrary")){
        fetchOpenLibrary(choice)
    }else if(localStorage.bookLibrary.includes(choice)){
        renderShelf()
        throw new Error ("That book is already present in your local book shelf")
    }else {
        fetchOpenLibrary(choice)
    }
})

async function fetchOpenLibrary(choice) {
    const res = await fetch(`https://openlibrary.org/isbn/${choice}.json`);
    const data = await res.json();
    createBookInfoCard(data, choice)
}

function createBookInfoCard(data, choice){
    const title = data.title;
    let bookInfoCard = `
        <article class="book-card" id="book-id-${choice}">
            <h3 class="book-title">${title}</h3>
            <button class="delete">X</button>
        </article>
    `
    appendToLocalStorage(bookInfoCard)
}

function appendToLocalStorage(bookInfoCard){
    if (!localStorage.getItem("bookLibrary")){
    localStorage.setItem("bookLibrary", bookInfoCard)
    renderShelf()
    }else {
        let aditionalBookCard = localStorage.getItem("bookLibrary") + "," + bookInfoCard
        localStorage.setItem("bookLibrary", aditionalBookCard)
        renderShelf()
    }
}


function renderShelf(){
    let storageArray = localStorage.bookLibrary.split(",")
    bookShelf.innerHTML = "";
    storageArray.forEach(book => {
        bookShelf.innerHTML += book;
    })    
}
//9780140328721
//9783161484100

//console.log(localStorage)

// function fetchOpenLibrary(choice){
//     let apiAdress = `https://openlibrary.org/isbn/${choice}.json`
//     fetch(apiAdress)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             createBookInfoCard(data)
//         })
//         .catch(err => console.log(err))
// }
