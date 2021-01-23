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