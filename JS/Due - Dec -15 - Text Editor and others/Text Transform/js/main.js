console.log("text editor is on")

//buttons
const boldButton = document.querySelector("#button-bold");
const italicButton = document.querySelector("#button-italic");
const underlineButton = document.querySelector("#button-underline");
const lowercaseButton = document.querySelector("#button-lowercase");
const uppercaseButton = document.querySelector("#button-uppercase");
const capitalizeButton = document.querySelector("#button-capitalize");
const alignLeftButton = document.querySelector("#button-align-left");
const alignCenterButton = document.querySelector("#button-align-center");
const alignRightButton = document.querySelector("#button-align-right");
const alignJustifyButton = document.querySelector("#button-align-justify");
const textIndentButton = document.querySelector("#button-text-indent");
const lineHeightButton = document.querySelector("#button-line-height");

const renderedText = document.querySelector("#rendered-text");

//event listeners
boldButton.addEventListener("click", makeBold)
italicButton.addEventListener("click", makeItalic)
underlineButton.addEventListener("click", makeUnderline)
lowercaseButton.addEventListener("click", makeLowercase)
uppercaseButton.addEventListener("click", makeUppercase)
capitalizeButton.addEventListener("click", makeCapitalize)
alignLeftButton.addEventListener("click", makeAlignLeft)
alignCenterButton.addEventListener("click", makeAlignCenter)
alignRightButton.addEventListener("click", makeAlignRight)
alignJustifyButton.addEventListener("click", makeAlignJustify)
textIndentButton.addEventListener("click", makeTextIndent)
lineHeightButton.addEventListener("click", makeLineHeight)

//functions
function makeBold(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //transform
    renderedText.classList.toggle("bold")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}

function makeItalic(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //transform
    renderedText.classList.toggle("italic")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}

function makeUnderline(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //transform
    renderedText.classList.toggle("underline")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}

function makeLowercase(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //text transform
    renderedText.classList.remove("uppercase", "capitalize")
    renderedText.classList.toggle("lowercase")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}

function makeUppercase(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //text transform
    renderedText.classList.remove("lowercase", "capitalize")
    renderedText.classList.toggle("uppercase")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}

function makeCapitalize(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //text transform
    renderedText.classList.remove("lowercase", "uppercase")
    renderedText.classList.toggle("capitalize")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}

function makeAlignLeft(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //text align
    renderedText.classList.remove("align-center", "align-right", "align-justify")
    renderedText.classList.toggle("align-left")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}


function makeAlignCenter(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //text align
    renderedText.classList.remove("align-left", "align-right", "align-justify")
    renderedText.classList.toggle("align-center")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}

function makeAlignRight(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //text align
    renderedText.classList.remove("align-left", "align-center", "align-justify")
    renderedText.classList.toggle("align-right")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}

function makeAlignJustify(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //text align
    renderedText.classList.remove("align-left", "align-right", "align-center")
    renderedText.classList.toggle("align-justify")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}

function makeTextIndent(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //text indent
    renderedText.classList.toggle("text-indent")
    //display the text input on the paragraph
   renderedText.innerText = userText();
}

function makeLineHeight(){
    //grab the text input
    const userText = document.querySelector("textarea").value;
    //line height
    renderedText.classList.toggle("line-height")
    //display the text input on the paragraph
    renderedText.innerText = userText();
}
