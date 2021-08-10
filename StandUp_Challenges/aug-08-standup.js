//Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

//Parameters
//will receive a string of characters
//Returns
//expect the same string, reversed
//Examples
//In: "abc" 
//Out: "cba"
//In: "1a ,8b"
//Out "b8, a1"


let string = "abc"
let string2 = "djsajhdkjsahkjdhs, dsadsadsadds, dsjakljsdaj! lorem10!!!"

function stringReverser(str){
    let reversed = str.split("").reverse().join("")
    console.log(reversed)
}

function reverser(str){
    let reversed = ""
    for (let i = str.length-1; i > -1; i--){
        reversed += str[i]
    }

    console.log(reversed)
}

stringReverser(string)
reverser(string)

stringReverser(string2)
reverser(string2)