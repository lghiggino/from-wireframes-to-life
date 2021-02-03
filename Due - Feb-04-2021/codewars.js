//Jan-30-2021 - 1
//Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  if (!input || input.lenght < 1){
    return []
    }else{
      let positives = input.filter(x => x > 0).length
      let negatives = input.filter(x => x < 0).reduce((acc,curr) => acc + curr, 0)
      if (positives === 0 && negatives === 0){
        return []
      }
      return [positives, negatives]
    }
}

//best solution
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

//Jan-30-2021 - 2
//Get the Middle Character
function getMiddle(string){
  if (string.length === 1){
    return string
  }else if (string.length % 2 === 0){
    let firstLetter = string.substr((string.length/2)-1,1)
    let secondLetter = string.substr(string.length/2,1)
    let answer = firstLetter+secondLetter
    return answer
  }else {
    return string.substr((string.length/2),1)
  }
}

//best solution
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

//Jan-31-2021 -3
//The highest profit wins!
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]; 
}

//Jan-31-2021 - 4
//Stop gninnipS My sdroW!
function spinWords(string){
  let answerArray = [];
  string.split(" ").map(word => {
     if(word.length < 5){
      answerArray.push(word)
   } else {
     answerArray.push(word.split("").reverse().join(""))
   }
  })
 return answerArray.join(" ")
}

//best solution - a return within a return with map
function spinWordsBest(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

//rewriting
function spinWordsRe(string){
  return string.split(" ").map(word => {
    return word.length > 4 ? word.split("").reverse().join("") : word;
  }).join(" ")
}


//Jan-31-2021
//Find The Parity Outlier - 5
function findOutlier(integers){
  let odd = []
  let even = []
  integers.filter(number => {
    if(number % 2 === 0) {
      even.push(number)
    }else{
      odd.push(number)
    }
  })
  return odd.length === 1 ? odd[0] : even[0]
}

//best solution
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
//aha! Parabens pra mim!

//Jan-31-2021
//Moving Zeros To The End - Couldnt do it

//best solution
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}

//Jan-31-2021
//Even or Odd - 6
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd"
 }

 //Jan-31-2021
 //disenvowell trolls - 7
 function disemvowel(str) {
  let filterArray = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
  let answer = []
  str.split("").filter(letter => {
    if (!filterArray.includes(letter)){
      answer.push(letter)
    }
  })
  console.log(answer.join(""))
}

//best solution
function disemvowelBest(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

function disenvowelRe(str){
  let vowels = ["a", "e", "i", "o", "u"]
  return str.split("").filter(el => {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join("")
}

//Jan-31-2021 - 8
//You're a square!
var isSquare = function(num){
  if (num < 0){
    return false
  }else {
    if (Math.sqrt(num) - Math.floor(Math.sqrt(num)) === 0){
      return true
    }else return false
  }
}

//best practices
const isSquareBest = n => Number.isInteger(Math.sqrt(n)); //couldnt remember the type test, but wanted to do that - method was on my anki

//Feb-01-2021 - 9
//Shortest Word
function findShort(string){
  let smallest = string.split(" ")[0]
  string.split(" ").forEach(word => {
    if (word.length < smallest.length){
      smallest = word
    }
  })
  return smallest.length
}

//best practice
function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}


//Feb-01-2021 - 10
//Descending Order
function descendingOrder(num){
  return Number(num.toString().split("").sort( (a,b) => {return a < b}).join(""))
}

//Feb-01-2021 - 11
//Exes and Ohs
function XO(str) {
  let x = 0
  let o = 0
  str.toLowerCase().split("").forEach(letter => {
    if(letter === "x"){x++}
    else if (letter === "o"){o++}
  })
  if (x === o) {return true}
  else return false
}

//best practice without regex
const XOBest = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


//Feb-01-2021 -12
//Complementary DNA
function DNAStrand(dna){
  let dnaMap = {"A":"T", "C":"G", "T":"A", "G":"C"}
  let complimentary  = ""
  dna.split("").forEach(letter => {
    complimentary += dnaMap[letter]
  })
  return complimentary
}

//best practice 
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

//Feb-01-2021 -13
/*Problem from http://rosalind.info/problems/dna/

A string is simply an ordered collection of symbols selected from some alphabet and formed into a word; the length of a string is the number of symbols that it contains.
An example of a length 21 DNA string (whose alphabet contains the symbols 'A', 'C', 'G', and 'T') is "ATGCTTCAGAAAGGTCTTACG."
Given: A DNA string s
of length at most 1000 nt.
Return: Four integers (separated by spaces) counting the respective number of times that the symbols 'A', 'C', 'G', and 'T' occur in s
.
Sample Dataset
AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC

Sample Output - will change to return an object with the letter and the count - wes bos array cardio style
20 12 17 21
*/
function dnaBasesCount(string){
  let reducedBases = string.split("").reduce((obj, item) => {
    if(!obj[item]){
      obj[item] =0
    }
      obj[item]++
      return obj
  }, {})
  console.log(reducedBases)
}

dnaBasesCount("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")


//Feb-01-2021 - 14
//Take a Ten Minute Walk
function isValidWalk(walk) {
  if (walk.length !== 10){
    return false
  }else{
    let reduced = walk.reduce((obj, item) => {
    if (!obj[item]){
      obj[item] = 0
      }
        obj[item]++
        return obj
    }, {})
    if (reduced.n === reduced.s  && reduced.e === reduced.w){
      return true
    } else return false
  }
}

//best practice - but it loops the array 4 times (only if it has 10 elements)
function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

//Feb-02-2021 - 15
//Replace With Alphabet Position
function alphabetPosition(text){

  text.split("");
  let char = "";
  let arr = [];
  let arr2
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  
  for(let i = 0; i < text.length; i++){
    char = text.charAt(i).toLowerCase();
    
    if(alphabet.indexOf(char) > -1){
      arr.push(alphabet.indexOf(char) + 1);
      arr2 = arr.join(" ");
    }
  }
   if(arr2 === undefined){
    return ""
   }
  return arr2;
}

//best solution
function alphabetPositionBest(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

//Feb-02-2021 - 16
//Your order, please
function order(words){
  if (!words){return ""}
  else{
     let array = words.split(" ")
     let ordered = []
     console.log(array)
     for(let j = 1; j<=9; j++){
       for(let i = 0; i < array.length; i++){
         if(array[i].includes(j)){
            ordered.push(array[i])
         }
       }
     }
    return ordered.join(" ")
  }
}

//best solution - regex onceagain
function orderBest(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    


//Feb-02-2021 - 17
//Beginner Series #3 Sum of Numbers
function getSum( a,b ){
  if (a === b){return a}
  else{
    let reduced = 0
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++){
      reduced += i
    }
    return reduced
  }
}

//best solution - quick mafs
const GetSumBest = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

//Feb-03-2021 - 18
//Square Every Digit
function squareDigits(num){
  return Number(num.toString().split("").map(el => el**2).join(""))
}

//Feb-03-2021 - 19
//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort( (a,b) => a-b)
  return numbers[0] + numbers[1]
}

//Feb-03-2021 - 20
//Multiplicative Persistence... What's special about 277777788888899?
function per(n) {
  let res = []
  while(n.toString().length > 1) {
    n = n.toString().split('').reduce(
      (p,c) => p * c
    )
    res.push(n)
  }
  return res
}

//Feb-03-2021 - 21
//Persistent Bugger.
function persistence(n) {
  let res = 0
  while(n.toString().length >1){
     n = n.toString().split("").reduce(
       (p,c) => p * c
     )
    res++
  }
 return res
}

//Feb-03-2021 - 22
//

//Feb-03-2021 - 23
//