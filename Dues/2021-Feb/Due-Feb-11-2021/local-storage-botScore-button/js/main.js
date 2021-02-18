//enter our books on the API and store them on the localStorage
const submitBtn = document.getElementById("submitISBN");
const bookShelf = document.getElementById("book-shelf");
const bookTitle = document.getElementById("book-title");
const firstLine = document.getElementById("first-line");

//first time using a self-invoking - woohoo!
(function checksForExistingBookLibrary(){
    if (!localStorage.getItem("bookLibrary")){
        localStorage.setItem("bookLibrary", "this is the book library object index zero")
    }
    renderShelf()
})();

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let bookISBN = document.getElementById("bookISBN").value
    if(localStorage.bookLibrary.includes(bookISBN)){
        renderShelf()
        alert("That book is already present in your local book library")
        throw new Error ("That book is already present in your local book library")
    }else {
        fetchOpenLibrary(bookISBN)
    }
});

async function fetchOpenLibrary(bookISBN) {
    const res = await fetch(`https://openlibrary.org/isbn/${bookISBN}.json`);
    const data = await res.json();
    //console.log(data, bookISBN);
    createBookInfoCard(data, bookISBN);
};

function createBookInfoCard(data, bookISBN){
    const title = data.title;
    let bookInfoCard = `
        <article class="book-card" id="book-id-${bookISBN}">
            <h3 class="book-title">${title}</h3>
            <button class="delete">X</button>
        </article>
    `
    appendToLocalStorage(bookInfoCard);
};

function appendToLocalStorage(bookInfoCard){
    let aditionalBookCard = localStorage.getItem("bookLibrary") + "," + bookInfoCard;
    localStorage.setItem("bookLibrary", aditionalBookCard);
    renderShelf();
}

function renderShelf(){
    let storageArray = localStorage.bookLibrary.split(",");
    bookShelf.innerHTML = "";
    storageArray.forEach(book => {
        bookShelf.innerHTML += book;
    })   
    generateDeleteButton();
}

function generateDeleteButton(){
    let allDeleteButtons = document.querySelectorAll(".delete");
    allDeleteButtons.forEach(button => {
        button.addEventListener("click", (e) =>{
            console.log(e.target.parentElement.id) ;
            let storageArray = localStorage.bookLibrary.split(",");
            storageArray.forEach( (el, idx) => {
                if (el.indexOf(e.target.parentElement.id) >= 0){
                    console.log(storageArray[idx]);
                    storageArray.splice(idx,1);
                }
            })
            console.log(storageArray);
            localStorage.setItem("bookLibrary", storageArray.join(","));
            renderShelf();
        })
    })
}
  
//9780140328721
//9783161484100
//9781405358071
//9781603093859
