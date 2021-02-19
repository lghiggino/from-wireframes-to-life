/*encapsulation - grouping properties and methods in the same object - inside the cameraObject we hava zoom function, takeAPicture function... reduced complexity*/
// let employee = {
//     //these properties should be hidden and only accesibly by setters for abstraction?
//     baseSalary : 30000,
//     overtime : 10,
//     rate : 20,
//     getWage: function(){
//         return this.baseSalary + (this.overtime * this.rate)
//     }
// };
// console.log(employee.getWage())

function Employee(name, age, baseSal){
    this.name = name;
    this.age = age;
    this.baseSal = baseSal;
    //bonus is an abstracted variable - unable to be edited from outside
    //calculate should be an abstracted method

    let bonus = 1000
    
    let calculateFinalSalary = function(){
        let finalSalary = this.baseSal + bonus
        console.log(`Final salary is ${finalSalary}`)
    }
  
    this.renderEmployee = function(){
      console.log(`${this.name} is ${this.age}`)
      calculateFinalSalary()
    }
  }

  let john = new Employee('john', 32, 1200)
  john.renderEmployee()


// /*abstraction - complex logic inside, few buttons on the outside. Hide properties and methods from the outside, making a simpler interface. Show only the essentials
// /*"when you touched on Enter a pickup point then how the map is opened and how that pointer points to your location? Did you need to know that?"*/

// /*inheritance - allows for the elimination of redundant code. If a method can be shared by many object, make said method in prototype*/

// /*polymorphism - For every HTML that has a method, it willl behave differently according to the type of the object
// google search takes in a string, but can return Images, Videos, News, ALL text etc etc... acording to the class defined at each search group*/


//LITERAL NOTATION
// const circle = {
//   radius : 1,
//   location : {
//       x : 1,
//       y : 1,
//   },
//   draw : function (){
//       console.log("draw circle")
//   },  
// };

// //FACTORY UNCTION
// function factoryCircle(radius){
//     return  {
//         radius,
//         draw : function(){
//             console.log("draw circle")
//         }
//     };
// }

// const circleF = factoryCircle(1)
// circleF.draw()


// //CONSTRUCTOR FUNCTION
// function ConstructorCircle(radius){
//     this.radius = radius;
//     this.defaultLocation = {x : 1}
//     this.computeOptimumLocation = function() {
//         //do something
//     }
//     this.draw = function(){
//         this.computeOptimumLocation()
//         console.log("draw other circle")
//     }
// }

// const circleC = new ConstructorCircle(1)
// circleC.draw()

// //prototypes
// //doesnt work on factories
// factoryCircle.prototype.calculateDiameter = function(){
//     console.log(circle.radius * 2)
// }
// //works on constructors
// ConstructorCircle.prototype.calculateDiameter = function(){
//     console.log(this.radius * 2)
// }

// circleF.location = {x : 1}
// circleC.location = {x : 1}

// /* deleting properties
// delete circleF.location
// delete circleC.location */

// //loops
// for (let key in circleF){
//     //use bracket notation to call the property using a variable name
//     console.log(key, circleF[key])
// }

// for (let key in circleC){
//     if (typeof circleC[key] !== "function"){
//         console.log(key, circleC[key])
//     }
// }

// if ("radius" in circleC){
//     console.log("circleC radius is:", circleC.radius)
// }

function Circle (radius){
    this.radius = radius;
    let defaultLocation = {x : 0, y : 0}
    let computeOptimumLocation = function(factor){
        console.log("banana")
        console.log(this.radius)
    }
    this.getDefaultLocation = function(){
        return defaultLocation
    }
    this.draw = function(){
        console.log("draw circle")
        computeOptimumLocation()
    }
}

let bolinha  = new Circle(5)
console.table(bolinha)


let spaceship = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 

  for (key in spaceship.crew){
      console.log(key)
  }