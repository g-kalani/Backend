// --- Fundamentals of JavaScript: Arrays, Objects, and Functions ---

// 1. Array Initialization
// An array is an ordered list of values.
var arr = [1, 2, 3, 4, 5]; 

// 2. Array Methods (forEach, map, filter, find, indexOf)

// 2.1. forEach()
// Executes a provided function once for each array element.
arr.forEach(function(val) {
    console.log(val + "hello");
});

// 2.2. map()
// Creates a *new* array with the results of calling a provided function 
// on every element in the calling array.
var newarr = arr.map(function(val) {
    return val * 3;
});
console.log("Map Result:", newarr); // Output: [3, 6, 9, 12, 15]

// 2.3. filter()
// Creates a *new* array with all elements that pass the test implemented 
// by the provided function (i.e., return true).
var ans_filter = arr.filter(function(val) {
    if (val >= 3) {
        return true;
    } else {
        return false;
    }
});
console.log("Filter Result:", ans_filter); // Output: [3, 4, 5]

// 2.4. find()
// Returns the *first* element in the array that satisfies the provided 
// testing function. Otherwise, returns undefined.
var ans_find = arr.find(function(val) {
    if (val === 2) {
        return val;
    }
});
console.log("Find Result:", ans_find); // Output: 2

// 2.5. indexOf()
// Returns the first index at which a given element can be found in the array, 
// or -1 if it is not present.
console.log("indexOf(5):", arr.indexOf(5));   // Output: 4
console.log("indexOf(12):", arr.indexOf(12));  // Output: -1
console.log("indexOf(2):", arr.indexOf(2));   // Output: 1

// 3. Objects

// 3.1. Object Initialization
// Objects are collections of key-value pairs (properties).
var obj = {
    name: "garima",
    age: 23
};

// 3.2. Accessing Object Properties
console.log("Dot Notation:", obj.name); 
console.log("Bracket Notation:", obj['name']);

// 3.3. Object.freeze()
// Freezes an object, preventing properties from being changed.
Object.freeze(obj); 
obj.age = 25; // This change is ignored because the object is frozen.
console.log("Frozen Age (remains 12):", obj.age); 

// 4. Function Definition, Return, and Length Property

// 4.1. Basic Function Return Value
// Defines a function that returns a simple string.
// (Based on image_be2fe3.png)
function abcd_return() {
    return "hello world";
}

// Invoking the function and storing the returned value in a variable.
var ans_return = abcd_return();
console.log("Function Return Value:", ans_return); // Output: "hello world"


// 4.2. Function Parameter Count (Length)
// Function defined with three parameters.
// (Based on image_be3c36.png)
function abcd_params(a, b, c) {
    // This function expects 3 arguments
    return a + b + c;
}

// The 'length' property on a function returns the number of formally declared parameters.
console.log("Function parameter count (abcd_params.length):", abcd_params.length); // Output: 3

// 5. Array/String Length
// The 'length' property returns the number of elements in an array.
console.log("Array length (arr.length):", arr.length); // Output: 5