//Odd or Even?
//JavaScript:

function oddOrEven(array) {
   let reduced = array.reduce( (a,b) => a+b,0)
   if (reduced % 2 === 0) return "even"
   else return "odd"
}

oddOrEven([])
oddOrEven([1,3,6,9])
oddOrEven([1,3])


//Vowel Count
//JavaScript:

function getCount(str) {
  var vowelsCount = 0;
  str.toLowerCase().split("").forEach(character => {
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
      vowelsCount++
    }
  })
  return vowelsCount;
}


getCount("banana")
getCount("xzz")


//Mumbling
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"


// best solution
function accumBest(string){
  return string.split("").map((char, idx) => (char.toUpperCase() + char.toLowerCase().repeat(idx))).join("-")
}
//my solution
function accum(string) {
  let newString = ""
  for (i = 0; i < string.length; i++){
    newString += `${string[i].toUpperCase()}${string[i].toLowerCase().repeat(i)}-`
  }
  return newString.slice(0, -1)
}

console.log(accum("RqaEzty"))

// Highest and Lowest
// Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
function highAndLow(numbers){
  return `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`
}


//Who likes it?
/*likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this" */

//my solution
function likes(names) {
  if (!names.length) {return "no one likes this"}
  else if (names.length === 1){return `${names[0]} likes this`}
  else if (names.length === 2){return `${names[0]} and ${names[1]} like this`}
  else if (names.length === 3){return `${names[0]}, ${names[1]} and ${names[2]} like this`}
  else {
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }
}

//best solution
function likesSwitch(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

//the one that is different
function likesRegEx (names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}

//Counting Duplicates

//my solution
function duplicateCount(text){
  let lowerArray = text.toLowerCase().split("")
  
  const reducedLetters = lowerArray.reduce(function(obj, item){
  if (!obj[item]) {
        obj[item] = 0
    } 
      obj[item]++;
      return obj;
  }, {})
  let sum = 0
  for (value in reducedLetters){
    console.log(reducedLetters[value])
    if (reducedLetters[value] > 1){
      sum++
    }
  }
  return sum
}

//best solution
function duplicateCount(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];
  
  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });
  
  return count;
}


//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


//25/jan/2021
//Jaden Casing Strings
//to figure out the this....
String.prototype.toJadenCase = function (str) {
  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
    return this.split(' ').map(capitalizeFirstLetter).join(' ');
};

//26/jan/2021
//Detect Pangram - https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript - returns true or false
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}