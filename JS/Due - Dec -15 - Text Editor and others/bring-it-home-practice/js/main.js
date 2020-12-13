// *Variables*
// Create a variable and console log the value
let variable = "banana"
console.log(variable)
// Create a variable, add 10 to it, and alert the value
let newVariable
newVariable = newVariable + 10
alert(newVariable)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(numA, numB, numC, numD){
    alert(numA - numB - numC - numC)
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
        alert("jumanji")
        return over50
    }else return over50
}

addsTwoForJumanji(25,26)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeRestZebra(numA, numB, numC){
    let value = numA * numB * numC
    if (value % 3 === 0){
        alert("ZEBRA")
        return value
    }else return value
}

multiplyThreeRestZebra(3,6,9)