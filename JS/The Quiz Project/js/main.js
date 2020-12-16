//question1 consts
const question1Submit = document.querySelector("#question1-submit");
const question1Result = document.querySelector("#question1-result");
const question1MdnLink = `<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="blank">query selector</a>`
question1Submit.addEventListener("click", question1checker)

//question2 consts...
const question2 = document.querySelector("#question2")



function question1checker(){
    const question1Answer = document.querySelector("#question1-answer").value;
    console.log(question1Answer)
    if (question1Answer.includes("document.querySelector")){
        question1Result.innerText = "This is the correct answer"
        question2.classList.remove("hidden")
    } else {
        question1Result.innerHTML = `
        check this MDN article : ${question1MdnLink}`
        
    }
}