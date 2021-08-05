//parameters
//always a string missing a vowel
//returns
//returns the index of the vowel according to the dictionary
//examples

//pseudo
//receive the string, transform into lowercase, check index of a, e, i, o, u

let example1 = "John Doe hs seven red pples under his bsket"  
let example2 = "Bb Smith sent us six neatly arranged range bicycles"
let example3 = "aioubcdfghjklmnpqrstvwxyz"

function checkMissingVowel(string){
  string = string.toLowerCase()
  
  let a = string.indexOf("a")
  let e = string.indexOf("e")
  let i = string.indexOf("i")
  let o = string.indexOf("o")
  let u = string.indexOf("u")
  if (a === -1){
    console.log(0)
    return
  }
  if (e === -1){
    console.log(1)
    return
  }
  if (i === -1){
    console.log(2)
    return
  }
  if (o === -1){
    console.log(3)
    return
  }
  if (u === -1){
    console.log(4)
    return
  }
  else{
    console.log("string has all vowels")
  }
}

// checkMissingVowel(example1)
// checkMissingVowel(example2)
checkMissingVowel(example3)