function takesTwoNumbersDivideAndRoundDown(numA, numB){
    console.log(Math.floor(numA / numB));
}

console.log("from takesTwoNumbersDivideAndRoundDown(7,2) expect: 3")
takesTwoNumbersDivideAndRoundDown(7,2)


function takesWordAndNumber(word, number){
    if ((word.length * number) > 100){
        alert("WINNER");
    }
}

console.log("from takesWordAndNumber('banana', 22) expect: alert WINNER")
takesWordAndNumber("banana", 22)

function arrayFirstAndLast(array){
    console.log(array[0] + array[array.length-1]);
}

console.log("from arrayFirstAndLast([7,3,4,5,6,7]) expect: 14")
arrayFirstAndLast([7,3,4,5,6,7])

//Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 
let nameList = []

function addPersonToList(name){
	nameList.push(name)
	console.log(`Your name (${name}) is in the postion ${nameList.indexOf(name) + 1} of the list`)
}

console.log("from addPersonToList('John') expect: `Your name (John) is in the postion 1 of the list`")
addPersonToList("John")
console.log("from addPersonToList('Barbara') expect: `Your name (Barbara) is in the postion 2 of the list`")
addPersonToList("Barbara")


function oddArrayMaker(array){
    let oddArray = []
    array.forEach(element => {
        if(element % 2 !== 0){
            oddArray.push(element)
        }
    })
    return oddArray
}

console.log("from oddArrayMaker([1,2,3,4,5,6,7,8,9,10,32,33,34]) expect: [1,3,5,7,9,33]")
console.log(oddArrayMaker([1,2,3,4,5,6,7,8,9,10,32,33,34]))


// Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2.
function weirdBuzz(number){
    //using while for practice purpose
    let i = 1;
    while(i <= number){
        if ((i * 3) % 2 !== 0){
            console.log(i)
        }
        i++;
    }; 
}

console.log("from weirdBuzz(10) expect: 1, 3, 5, 7, 9")
weirdBuzz(10)