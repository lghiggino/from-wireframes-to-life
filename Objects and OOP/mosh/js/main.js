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
    //abstracting defaultLocation
    let defaultLocation = {x : 3, y : 3}
    let computeOptimumLocation = function() {
        //do something
        console.log(defaultLocation);
        //yo dawg, I heard you liked abstraction so I put an abstraction inside your abstraction    
        let x = 2
        let y = 2
        let doSomething = function(){
            console.log(x,y)

        }
    }
    //getters and setters
    Object.defineProperty(this, defaultLocation, {
       get: function(){
           return defaultLocation;
       } 
    })

    this.draw = function(){
        //this calls the private method and that function will call the private 
        computeOptimumLocation()
        console.log("draw other circle")
    }
}

const circleC = new ConstructorCircle(1);
circleC.draw();


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



function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (running) throw new Error("stopwatch is already running")
        
        running = true;

        startTime = new Date()
    };

    this.stop = function(){
        if(!running) throw new Error("stopwatch is not yet started")
        
        running = false;
        
        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) /1000

        duration +=seconds;
    };

    this.reset = function(){
        startTime = 0;
        endTime = 0;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, "duration", {
        get: function() {return duration;}
    });
}

let casius = new Stopwatch
