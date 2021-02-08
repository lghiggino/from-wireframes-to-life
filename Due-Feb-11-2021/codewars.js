//Feb-06-2021 - 34
//Remove the minimum
function removeSmallest(numbers) {
    if (numbers.length == 0){ return []}
    else{
      let smallest = numbers[0]
      let index = 0
      for (let i = 1; i < numbers.length; i++){
        if(numbers[i] < smallest){
          smallest = numbers[i]
          index = i
        }
      }
      numbers.splice(index,1)
      return numbers
    }
  }
  
  //Remove the minimum best
  const removeSmallestBest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
  //Feb-06-2021 - 35
  //Two to One
  function longest(s1, s2) {
    let fullStr = s1+s2
    let outputArr = []
    fullStr = fullStr.split("").forEach(el => {
       if(outputArr.indexOf(el) == -1){
          outputArr.push(el)
       }
    })
   
    outputArr.sort((a,b)=>{
      if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
    })
    return outputArr.join("")
  }
  
  //best
  function longestBest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }
  
  //Feb-06-2021 - 36
  //Find the unique number
  function findUnique(numbers) {
    for (el of numbers) {
      if (numbers.lastIndexOf(el) === numbers.indexOf(el)){
        return el
      }
    }
  }
  
  //Feb-07-2021 - 37
  //Evens and Odds
  function evensAndOdds(num){
      return num % 2 === 0 ? num.toString(2) : num.toString(16);
  }
  //Feb-07-2021 - 38
  //
  function rgb(r, g, b){
    if (r <=0){r = 0}
    if (g <=0){g = 0}
    if (b <=0){b = 0}
    if (r > 255){r = 255}
    if (g > 255){g = 255}
    if (b > 255){b = 255}
    r = r.toString(16).toUpperCase()
    g = g.toString(16).toUpperCase()
    b = b.toString(16).toUpperCase()
    console.log(r.toString(16).toUpperCase(), g.toString(16).toUpperCase(), b.toString(16).toUpperCase())
    if (r === "0"){r = "00"}
    if (g === "0"){g = "00"}
    if (b === "0"){b = "00"}
    console.log(r.toString(16).toUpperCase(), g.toString(16).toUpperCase(), b.toString(16).toUpperCase())
    return `${r}${g}${b}`
  }
  console.log(rgb(13,299,92))
  
  
  //Feb-07-2021 - 39
  //RGB To Hex Conversion
  function rgb(r, g, b){
    if (r <=0){r = 0}
    if (g <=0){g = 0}
    if (b <=0){b = 0}
    if (r > 255){r = 255}
    if (g > 255){g = 255}
    if (b > 255){b = 255}
    r = r.toString(16).toUpperCase().padStart(2,"0")
    g = g.toString(16).toUpperCase().padStart(2,"0")
    b = b.toString(16).toUpperCase().padStart(2,"0")
    
    return `${r}${g}${b}`
  }
  
  //best
  function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
  }
  
  function toHex(d) {
      if(d < 0 ) {return "00";}
      if(d > 255 ) {return "FF";}
      return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
  }
  
  
  //Feb-07-2021 - 40
  //Pete, the baker
  function cakes(recipe, inventory) {
    let ammount = []
    for (item in recipe){
      if (!inventory.hasOwnProperty(item)){
        return 0
      }else {
        ammount.push(Math.floor(inventory[item] / recipe[item]))
      }
    }
    return Math.min(...ammount)
  }
  
  //pete the basker best
  function cakesBest(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }
  //Feb-08-2021 - 41
  //Bit Counting
  var countBits = function(n) {
    let count = 0
    n = n.toString(2).split("").forEach(el => {if (el === "1"){count++}})
    return count
  };
  
  //best
  countBitsBest = n => n.toString(2).split('0').join('').length;
  
  //Feb-08-2021 - 42
  //Remove String Spaces
  function noSpace(x){
    return  x.split("").filter(el => {return el!==" "}).join("")
  }
  
  //best 
  function noSpaceBest(x){return x.split(' ').join('')}
  //Feb-08-2021 - 43
  //Grasshopper - Summation
  var summationBest = function (num) {
    return (num > 1) ? num + summation(num - 1):num;
  }
  //Feb-08-2021 - 44
  //Counting sheep...
  function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(el => el===true).length
  }
  
  //Feb-08-2021 - 45
  //Unique In Order
  function uniqueInOrder(iterable){
    if (typeof(iterable) === "string"){
      iterable = Array.from(iterable)
    }
    let collector = []
    for(let i = 0; i <= iterable.length; i++){
      console.log(iterable[i], iterable[i+1])
      if (iterable[i] !== iterable[i+1]){
        collector.push(iterable[i])
      }
    }
    return collector
  }
  
  //best
  var uniqueInOrderBest=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
  }
  
  
  //Feb-09-2021 -46
  //
  
  //Feb-09-2021 -47
  //
  
  //Feb-09-2021 -48
  //
  
  //Feb-09-2021 -49
  //
  
  //Feb-09-2021 -50
  //