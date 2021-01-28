/*encapsulation - grouping properties and methods in the same object - inside the cameraObject we hava zoom function, takeAPicture function... reduced complexity*/
let employee = {
    //these properties should be hidden and only accesibly by setters for abstraction?
    baseSalary : 30000,
    overtime : 10,
    rate : 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
};
console.log(employee.getWage())
/*abstraction - complex logic inside, few buttons on the outside. Hide properties and methods from the outside, making a simpler interface. Show only the essentials
/*"when you touched on Enter a pickup point then how the map is opened and how that pointer points to your location? Did you need to know that?"*/

/*inheritance - allows for the elimination of redundant code. If a method can be shared by many object, make said method in prototype*/

/*polymorphism - For every HTML that has a method, it willl behave differently according to the type of the object
google search takes in a string, but can return Images, Videos, News, ALL text etc etc... acording to the class defined at each search group*/


//LETIRAL NOTATION
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

//FACTORY UNCTION
function factoryCircle(radius){
    return  {
        radius,
        draw : function(){
            console.log("draw circle")
        }
    };
}

const circleF = factoryCircle(1)
circleF.draw()


//CONSTRUCTOR FUNCTION
function ConstructorCircle(radius){
    this.radius = radius;
    this.defaultLocation = {x : 1}
    this.computeOptimumLocation = function() {
        //do something
    }
    this.draw = function(){
        this.computeOptimumLocation()
        console.log("draw other circle")
    }
}

const circleC = new ConstructorCircle(1)
circleC.draw()

//prototypes
//doesnt work on factories
factoryCircle.prototype.calculateDiameter = function(){
    console.log(circle.radius * 2)
}
//works on constructors
ConstructorCircle.prototype.calculateDiameter = function(){
    console.log(this.radius * 2)
}

circleF.location = {x : 1}
circleC.location = {x : 1}

/* deleting properties
delete circleF.location
delete circleC.location */

//loops
for (let key in circleF){
    //use bracket notation to call the property using a variable name
    console.log(key, circleF[key])
}

for (let key in circleC){
    if (typeof circleC[key] !== "function"){
        console.log(key, circleC[key])
    }
}

if ("radius" in circleC){
    console.log("circleC radius is:", circleC.radius)
}

