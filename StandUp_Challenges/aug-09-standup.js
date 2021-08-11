/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 


- Parameters
    will receive a string, with ANY character in it
- Returns
    will return the character that is repeated the most
- Examples
    IN: "Hello World"
    OUT: "l"
    IN: "abc"
    OUT: "a, b, c"
    IN: "Hello, baby, zxy,"
    OUT: ","
*/

let example1 = "abcada, djsahjhsda =,hjk3421 ydsioa hjdsahjk ! jdksa 8d sa 8e217*&@#79832qn &&&&&&&&&&&&&&&&&&&& aaaaaaaaaaaa " 
//expect "a"

function characterCounter(string){
    string = string.split(" ").join("")
    let map = {}
    for (char of string){
        if (!map[char]){
            map[char] = 0
            map[char]++
        }
        else {
            map[char]++
        }
    }
    console.log(map)
    let biggest = 0
    let character = null
    for (key in map){
        // console.log("key", key)
        // console.log("map[key]", map[key])
        if (map[key] > biggest){
            biggest = map[key]
            character = key
        }
    }
    console.log(character)
}

characterCounter(example1)