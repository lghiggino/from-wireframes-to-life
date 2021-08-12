/*
Given a string of words or phrases, count the number of vowels.

No Regex! Unless that is your brute force...

Parameters
Will receive a string of words or phrases

Returns
Will return the number of vowels added up 

Examples:
IN: "banana"
OUT: 3
IN: "banana, apple"
OUT: 5
*/

let example1 = "banana"
let example2 = "banana, apple"

function countVowels(string) {
    let counter = 0
    string.toLowerCase().split("").map(el => {
        if (el === "a" || el === "e"  || el === "i" || el === "o"  || el === "u"){
            counter++
        }
    })
    console.log(counter)
}

countVowels(example1)  //expect 3
countVowels(example2)  //expect 5