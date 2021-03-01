function Rabbit(type) {
    this.type = type
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird")
weirdRabbit.speak("hello")

weirdRabbit.toString()


Rabbit.prototype.toString = function() {
    return `From changed prototype toString: a ${this.type} rabbit`;
};
console.log(weirdRabbit.toString())


/*******************
 MAPS (methods: get, set, has, size)
 ******************/
let inventory = new Map()
inventory.set("banana", 12)
inventory.set("apple", 5)
inventory.set("avocado", 6)
inventory.set(5, "five")

console.log("avocados:", inventory.get("avocado"))
console.log("prop 5 of map", inventory.get(5))

console.log("inventory has apple?", inventory.has("apple"))
console.log("inventory has 5?",inventory.has(5))

console.log("inventory size is:", inventory.size)

/*******************
 SYMBOLS!
 ******************/

let sym = Symbol("name")
console.log(sym == Symbol("name")); //false
Rabbit.prototype[sym] = 55;
//console.log(blackRabbit[sym]); //55

const toStringSymbol = Symbol("banana") //can be whatever inside the parentheses
Array.prototype[toStringSymbol] = function(){
    return `${this.length} cm of blue yarn`
}

console.log([1,2].toString())
//console.log([1,2].banana()) -> method does not exist, as expected.
console.log([1,2][toStringSymbol]())

let okIterator = "OKABCD"[Symbol.iterator]();
console.log(okIterator.next())

let arrayIterator = [1,2,3,4,5,6,7][Symbol.iterator]()
//works for strings and arrays, not objects

class Temperature{
    constructor(celsius){
        this.celsius = celsius;
    }

    get fahrenheit(){
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value){
        return new Temperature((value - 32) / 1.8);
    }

    static randomX(value){
        console.log(Math.random() * value)
    }
}

let temp = new Temperature(100)

class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    plus(a,b){
        return {"x": this.x + a, "y": this.y + b}
    }

    plusVector(vector){
        return {"x": this.x + vector.x, "y": this.y + vector.y}
    }

    minus(a,b){
        return {"x": this.x - a, "y": this.y - b}
    }

    minusVector(vector){
        return {"x": this.x - vector.x, "y": this.y - vector.y}
    }

    get length(){
        return Math.sqrt(this.x**2 + this.y**2)
    }
    
}

let v1 = new Vec(3,4)
let v2 = new Vec(1,1)

class Group{
    constructor(){
        this.data = []
    }
    add(value){
        if(!this.data.includes(value)){
            this.data.push(value)
        }else throw new Error (`This group already has ${value}`)
    }
    delete(value){
        if(this.data.includes(value)){
            let index = this.data.indexOf(value);
            console.log(index)
            this.data.splice(index,1);
        }else throw new Error(`This group does not have ${value}`)
    }
    has(value){
        return this.data.includes(value)
    }
    static from(iterable){
        let group = new Group()
        for (let value of iterable){
            group.add(value)
        }
        return group
    }
    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}

let groupinho = new Group()
groupinho.add(10)
groupinho.add(20)

class GroupIterator{
    constructor(group){
        this.group = group
        this.index = 0
    }
    next(){
        if (this.index === this.group.data.length) return {done: true};
        let value = this.group.data[this.index];
        this.index++
        return {value, done: false}
    }
}

for (let value of Group.from(["a", "b", "c"])){
    console.log(value)
}


let map = {one: true, two: true, hasOwnProperty: true};
console.log(Object.prototype.hasOwnProperty.call(map, "one"))