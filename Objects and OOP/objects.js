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

function enemyMaker(name, health, agility, strength, intelligence){
    return{
        name, 
        health, 
        agility, 
        strength, 
        intelligence,
        xp : 0,
        level : 0,
        getsHarmed : function(damage){
            health -= damage
            console.log(`${name} was harmed and suffered ${damage} damage points. ${name} health is ${health}`)
        },
        attacks: function(enemy){
            console.log(`${name} attacks ${enemy.name} cuausing ${strength/2} damage`)
            enemy.health -= strenght / 2;
            if (enemy.health === 0){
                killed(enemy)
            }
        },
        killed: function(enemy){
            console.log(`${enemy} was killed. ${name} gains 10 experience points`)
            xp += 10
            if (xp >= 20){
                levelUp()
            }
        },
        levelUp: function(){
            level +=1
            console.log(`${name} leveld up to ${level}`)
        },
        equips: function(property, object, increment){
            property += increment
            console.log(`${name} equips a(n) ${property} ${object}. They have additional ${property} of ${increment}`)
        },
        removesEquipament: function(property, object, decrement){
            property -= decrement
            console.log(`${name} removes a(n) ${property} ${object}. They have decreassed ${property} by ${decrement}`)
        },
        describe: function(){
            console.log(`${name} has ${health} health points and ${strength} as strength`)
        },
    }
}


class Character{
    constructor(name, health, agility, strength, intelligence){
        this.name = name;
        this.health = health;
        this.agility = agility;
        this.strength = strength;
        this.intelligence = intelligence;
        let xp = 0;
        let level = 1
    };
    //methods
    getsHarmed(damage){
        this.health -= damage
        console.log(`${this.name} was harmed and suffered ${damage} damage points. ${this.name} health is ${this.health}`)
    };
    attacks(enemy){
        console.log(`${this.name} attacks ${enemy.name} causing ${this.strength / 2} damage`)
        enemy.health -= this.strength / 2;
        if (enemy.health === 0){
            this.killed(enemy)
        }
        console.log("from function attacks", xp, level)
    };
    killed(enemy){
        console.log(`${enemy} was killed. ${this.name} gains 10 experience points`)
        xp += 10
        if (this.xp > 20){
            this.levelUp()
        }
    }
    levelUp(){
        this.level +=1
        console.log(`${this.name} leveld up to ${this.level}`)
        
    }
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

let aurora = new Character("Aurora", 150, 18, 17, 17)
let glacius = new Character("Glacius", 225, 16, 20, 17)
let goblin = enemyMaker("FizzBuzz the Goblin", 82, 17, 13, 13)
aurora.describe()
goblin.describe()


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

