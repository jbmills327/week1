// Functions

// Function Expression Anonymous Function
//cannot be constructed
var calculateArea = function(width, height) {
    return width * height;
};



//Explicit "named Function"
//can be constructed
//OOP
function calculateArea2(width, height){
  return width * height;
};
// console.log(calculateArea(2, 4));
// console.log(calculateArea(4, 6));


//Object Literal
var bill = {};
var alice = {};

bill.doSomething = calculateArea;


console.log(bill.doSomething(2,4));


//built into javascript
function simple(a,b){};
console.log(simple.length);
console.log(simple.constructor);

var weekString = 'Monday , Tuesday ,  Wednesday , Thursday , Friday';
var weekArray = weekString.split(" , ");

console.log(weekString);
console.log(weekArray);

var newString = weekArray.join("  ");

console.log(newString);


console.log(weekString.toUpperCase());
console.log(weekString.toLowerCase());


//This prints "M" after it was mdae to "m"
console.log(weekString.charAt(0).toUpperCase());
