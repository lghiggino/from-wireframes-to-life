//enter our books on the API and store them on the localStorage
const submitBtn = document.getElementById("submitISBN")
const bookShelf = document.getElementById("book-shelf")
const bookTitle = document.getElementById("book-title")
// const bookAuthor = document.getElementById("book-author")
const firstLine = document.getElementById("first-line")

renderShelf()

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let choice = document.getElementById("bookISBN").value
    console.log(choice)

    let apiAdress = `https://openlibrary.org/isbn/${choice}.json`
    fetch(apiAdress)
        .then(res => res.json())
        .then(data => {
            //check if book is already at localStorage
            // if(!localStorage.getItem("bookLibrary")){
                
            // }
            // else if (localStorage.bookLibrary.includes(`book-id-${choice}`)){
            //     console.log("book is already in library")
            //     return
            // }else{
                
                console.log(data);
                const title = data.title;

                let bookInfo = `
                    <article class="book-card" id="book-id-${choice}">
                        <h3 class="book-title">${title}</h3>
                        <button class="delete">X</button>
                    </article>
                `

                bookShelf.innerHTML = localStorage.bookInfo

                //store
                if (!localStorage.getItem("bookLibrary")){
                    localStorage.setItem("bookLibrary", bookInfo)
                }else {
                    let aditionalBook = localStorage.getItem("bookLibrary") + "," + bookInfo
                    localStorage.setItem("bookLibrary", aditionalBook)
                }

                renderShelf()
            //}
        })
        .catch(err => console.log(err))
})


function renderShelf(){
    if (!localStorage.getItem("bookLibrary")){
        return
    }else{
        let storageArray = localStorage.bookLibrary.split(",")
        bookShelf.innerHTML = "";
        storageArray.forEach(book => {
            bookShelf.innerHTML += book;
        })
       
    }
    

}
//9780140328721
//9783161484100

//console.log(localStorage)
