// declared a variable with const, that means it can never be reassigned, and gave it a value.
const kelvin = 293;

// declared a vairable named celsius and gave it a value from the result of subtracting the result of subtracting 293 - 273...
var celsius = kelvin - 273;

// declared a variable named fahrenhheit with the formula for the vlue...
var fahrenheit = celsius * (9/5) + 32;

// this line will round it so that it never has a decimal...
fahrenheit = Math.floor(fahrenheit);

// bonus extra practice code...
var newton = celsius * (33/100);
newton = Math.floor(newton);

// final results of the kelvin weather project...
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees in Newton.`)