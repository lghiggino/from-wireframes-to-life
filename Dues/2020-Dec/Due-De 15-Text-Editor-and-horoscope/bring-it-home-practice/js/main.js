// *Variables*


// Create a variable and console log the value
let variable = "banana"
console.log(variable)
// Create a variable, add 10 to it, and alert the value
let newVariable
newVariable = newVariable + 10
//alert(newVariable)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(numA, numB, numC, numD){
    //alert(numA - numB - numC - numC)
}

subtractFourNumbers(10,2,1,3)
// Create a function that divides one number by another and returns the remainder
function dividesTwoReturnRemainder(numA, numB){
    return numA % numB
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addsTwoForJumanji(numA, numB){
    let over50 = numA + numB
    if (over50 > 50){
        //alert("jumanji")
        return over50
    }else return over50
}

addsTwoForJumanji(25,26)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeRestZebra(numA, numB, numC){
    let value = numA * numB * numC
    if (value % 3 === 0){
        //alert("ZEBRA")
        return value
    }else return value
}

multiplyThreeRestZebra(3,6,9)

/********************
 Form fool around
********************/


const submit = document.querySelector("#submit");
submit.addEventListener("click", displayAnswer);

function displayAnswer(e){
    e.preventDefault()

    //capture the values
    const checkQ1 = document.querySelectorAll(".check-q1");
    const radioQ2 = document.querySelectorAll(".radio-q2");
    const color = document.getElementById("color").value;
    const datetime = document.getElementById("datetime").value;
    const month = document.getElementById("month").value;
    const week = document.getElementById("week").value;
    const time = document.getElementById("time").value;
    const number = document.getElementById("number").value;
    const range = document.getElementById("range").value;
    const search = document.getElementById("search").value;
    const url = document.getElementById("url").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const selectDays = document.getElementById("select-days").value;
    // let day = selectDays.value

    checkQ1.forEach(el => {
        if (el.checked){
            console.log("question1 answer:",el.value)
        }
    })
    
    radioQ2.forEach(el => {
        if (el.checked){
            console.log("question2 answer:", el.value)
        }
    })

     console.log("color:", color , "datetime:", datetime, "month:",month , "week:", week , "time:", time, "number:", number, "range:", range , "search:",search , "url:", url, "tel:", tel , "email:", email , "password:", password, "select:", selectDays)
}



