// Object intializers and methods
var loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    var x = (this.flour / this.water)*100;
    return x;

  }
}
console.log("1stloaf" + loaf.prototype); // result: Logs undefined
console.log("1stloaf"+ loaf.constructor); // result: function Object() { [native code] }
//
console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

// Constructors and Prototypes


function Loaf(flour, water) {
  this.flour = flour;
  this.water = water;
}
// Question 1: Does this function require parameters Yes / No
Loaf.prototype.hydration = function() {
  var x = (this.flour / this.water)*100;
    return x;

}
console.log("2nd loaf"+ Loaf.prototype); // result: Why? [object Object]
console.log("2nd loaf"+ Loaf.prototype.constructor); // function Function() { [native code] }

var bread1 = new Loaf(300, 210);
var bread2 = new Loaf(300, 325);
console.log(bread1.hydration());
console.log(bread2.hydration());

/// Inheritance

  function YeastedLoaf(flour, water, yeast){
// Step 3 Call the parent constructor
  Loaf.prototype.constructor.call(this, flour, water);
  this.yeast = yeast;
}
// Step 1 Inherit from prototype
YeastedLoaf.prototype = Object.create(Loaf.prototype);
console.log("constructor overwritten"+YeastedLoaf.prototype.constructor);
// Step 2 Reset the constructor
YeastedLoaf.prototype.constructor = YeastedLoaf;
console.log(YeastedLoaf.prototype);
console.log("constructor reset"+YeastedLoaf.prototype.constructor);
YeastedLoaf.prototype.riseTime = function() {
  return this.flour/this.yeast;
}




// ParentObj.call(ChildObj, flour, water)


// ChildObj = function(){
//   ParentObj.call(this)
// }
