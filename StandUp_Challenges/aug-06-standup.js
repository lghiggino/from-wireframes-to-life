//P
//will receive an array with length > 1
//R
//will return a number, rounded UP
//E
/* 
['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
*/
//P

function avgLenght(array){
    let digits = 0
    array.forEach(element => {
        digits += element.length
    });
    console.log(Math.round(digits/array.length))
}

// avgLenght(["a", "abc"]) //4
avgLenght(['aa', 'bb', 'ddd', 'eee'])