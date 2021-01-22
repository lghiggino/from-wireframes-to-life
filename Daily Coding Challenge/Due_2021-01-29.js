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
