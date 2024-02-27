// Function declaration
function add(num1, num2) {
    return num1 + num2;
}

// Function expression
const subtract = function(num1, num2) {
    return num1 - num2;
};

// Arrow function
const multiply = (num1, num2) => {
    return num1 * num2;
};
const div = (num1, num2) => {
    return num1 / num2;
};

// Calling functions
console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2
console.log(multiply(5, 3));   // Output: 15
console.log(div(7,7));         // Output: 1
