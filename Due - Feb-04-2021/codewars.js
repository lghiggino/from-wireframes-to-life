//Jan-30-2021
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

//Jan-30-2021
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

//Jan-31-2021
//The highest profit wins!
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]; 
}

//Jan-31-2021
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
//Find The Parity Outlier
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
//Even or Odd
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd"
 }

 //Jan-31-2021
 //disenvowell trolls
 function disemvowel(str) {
  let filterArray = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
  let answer = []
  str.split("").filter(letter => {
    if (!filterArray.includes(letter)){
      answer.push(letter)
    }
  })
  console.log(answer.join(""))
}s

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

//Jan-31-2021
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
const isSquare = n => Number.isInteger(Math.sqrt(n)); //couldnt remember the type test, but wanted to do that - method was on my anki
