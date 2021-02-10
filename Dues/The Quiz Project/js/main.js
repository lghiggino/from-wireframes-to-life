//question0 consts
const question0Submit = document.querySelector("#question0-submit");
const question0Result = document.querySelector("#question0-result");
const question0MdnLink = `<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="blank">query selector</a>`
question0Submit.addEventListener("click", question0checker)

//question1 consts...
const question1 = document.querySelector("#question1")



function question0checker(){
    const question0Answer = document.querySelector("#question0-answer").value;
    console.log(question0Answer)
    if (question0Answer.includes("document.querySelector")){
        question0Result.innerText = "This is the correct answer"
        question1.classList.remove("hidden")
    } else {
        question0Result.innerHTML = `
        check this MDN article : ${question0MdnLink}`
        
    }
}


const database = [
    {"question0-question": "How to setup a query Selector",
     "question0Answer": "document.querySelector",
     "question0ResultCorrect": "This is the correct answer",
     "question0ResultWrong" : `<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="blank">query selector</a>`,
     "question0NextQuestion": "question1"},
     {"question1-question": "How to add an event listener",
     "question1Answer": "addEventListener",
     "question1ResultCorrect": "This is the correct answer",
     "question1ResultWrong" : `<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/eventListener" target="blank">event listener</a>`,
     "question1NextQuestion": "question2"},
]