/*encapsulation - grouping properties and methods in the same object - inside the cameraObject we hava zoom function, takeAPicture function... reduced complexity*/
let employee = {
    baseSalary : 30000,
    overtime : 10,
    rate : 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
};
console.log(employee.getWage())
/*abstraction - complex login inside, few button on the outside. Hide properties and methods from the outside, making a simpler interface. Show only the essentials
/*"when you touched on Enter a pickup point then how the map is opened and how that pointer points to your location? Did you need to know that?"*/

/*inheritance - allows for the elimination of redundant code. If a method can be shared by many object, make said method in prototype*/

/*polymorphism - For every HTML that has a method, it willl behave differently according to the type of the object
google search takes in a string, but can return Images, Videos, News, ALL text etc etc... acording to the class defined at each search group*/
