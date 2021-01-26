//FORM here https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

// const pen = {
//     type: "ballpoint",
//     inkColor: "blue",
//     manufacturer: "bic",
//     presentation : () => {
//         console.log(`I am a ${this.inkColor} ${this.type} ${this.manufacturer} pen`)
//     },
//     whatIsThis : () => {
//         return this
//     }
// };

// class Penmaker {
//     constructor(type, inkColor, manufacturer){
//         this.type = type;
//         this.inkColor = inkColor;
//         this.manufacturer = manufacturer
//     }
//     //methods
//     presentation = () => {
//         console.log(`I am a ${this.inkColor} ${this.type} ${this.manufacturer} pen`)
//     };
//     whatIsThis = () => {
//         return this
//     }
// }

// let savant = new Penmaker("felt tip", "black", "savant");
// let Montegrappa = new Penmaker("ballpoint", "blue", "Monte Grappa")

/********************
 RPG
********************/

// const aurora = {
//     name: "Aurora",
//     health: 150,
//     agility: 8,
//     strength: 7,
//     intelligence: 7,
//     xp: 0,
//     getsHarmed: function(damage){
//         this.health -= damage
//         console.log(`${this.name} was harmed and suffered ${damage} damage points. ${this.name} health is ${this.health}`)
//     },
//     attacks: function(enemy){
//         console.log(`${this.name} attack ${enemy} causing `)
//     },
//     equips: function(property, object, increment){
//         this[property] += increment
//         console.log(`${this.name} equips a(n) ${property} ${object}. They have additional ${property} of ${increment}`)
//     },
//     removesEquipament: function(property, object, decrement){
//         this[property] -= decrement
//         console.log(`${this.name} removes a(n) ${property} ${object}. They have decreassed ${property} by ${decrement}`)
//         console.log(`${this.name} ${property} is ${this[property]}`)
//     },
//     describe : function(){
//         console.log(`${this.name} has ${this.health} health points and ${this.strength} as strength`)
//     },
//     // otherDescribe(){
//     //     console.log(`${this.name} has ${this.health} health points and ${this.strength} as strength`)
//     // }, THIS SYNTAX ALSO WORKS
// };


class Character{
    constructor(name, health, agility, strength, intelligence){
        this.name = name;
        this.health = health;
        this.agility = agility;
        this.strength = strength;
        this.intelligence = intelligence;
        this.xp = 0;
    };
    //methods
    getsHarmed(damage){
        this.health -= damage
        console.log(`${this.name} was harmed and suffered ${damage} damage points. ${this.name} health is ${this.health}`)
    };
    attacks(enemy){
        console.log(`${this.name} attacks ${enemy.name} causing ${this.strength / 2} damage`)
        enemy.health -= this.strength / 2;
    };
    equips(property, object, increment){
        this[property] += increment
        console.log(`${this.name} equips a(n) ${property} ${object}. They have additional ${property} of ${increment}`)
    };
    removesEquipament(property, object, decrement){
        this[property] -= decrement
        console.log(`${this.name} removes a(n) ${property} ${object}. They have decreassed ${property} by ${decrement}`)
        console.log(`${this.name} ${property} is ${this[property]}`)
    };
    describe(){
        console.log(`${this.name} has ${this.health} health points and ${this.strength} as strength`)
    };
}

let aurora = new Character("Aurora", 150, 8, 7, 7)
let glacius = new Character("Glacius", 225, 6, 10, 7)
aurora.describe()


class BankAccount{
    constructor(name, balance, uid){
        this.name = name;
        this.balance = balance;
        this.uid = uid;
    }
    //methods
    credit(value){
        this.balance += value;
        console.log(`${this.name} receives a credit in the value of ${value}`);
        this.describe();
        return `${this.name} receives a credit in the value of ${value}`
    };
    debit(value){
        this.balance -= value;
        console.log(`${this.name} has ${value} deducted from the account`)
        this.describe();
        return `${this.name} has ${value} deducted from the account`
    };
    describe(){
        console.log(`${this.name} account has US$${this.balance} in balance`)
    }
    render(){
        let bankClientsSection = document.querySelector("#bank-clients")
        let personNameAndUid = document.createElement("p")
        personNameAndUid.innerText = `${this.name} --- ${this.uid}`
        bankClientsSection.append(personNameAndUid)
        let creditButton = document.createElement("button")
        creditButton.innerText = "credit"
        bankClientsSection.append(creditButton)
        creditButton.addEventListener("click", () => {
            let valor = prompt(`How much should ${this.name} be credited?`, 0)
            this.credit(Number(valor))
        })
        let debitButton = document.createElement("button")
        debitButton.innerText = "debit"
        bankClientsSection.append(debitButton)
        debitButton.addEventListener("click", () => {
            let valor = prompt(`How much should ${this.name} be debited?`, 0)
            this.debit(Number(valor))
        })
    }
}

let alex = new BankAccount("Alex", 0, "uid-0001")
let bert = new BankAccount("Bert", 0, "uid-0002")
let cris = new BankAccount("Cris", 0, "uid-0003")
let donna = new BankAccount("Donna", 0, "uid-0004")

let bankClients = [alex, bert, cris, donna]

// bankClients.forEach(client => {
//     client.render()
// })

