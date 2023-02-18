/*
Nan as the name suggest is/abbreviated as Not a number, but basically it represents an invalid number.

Examples
*/

const myAge = Number('0o46'); // 38
const myNextAge = Number('39'); // 39
const myCatsAge = Number('n/a'); // NaN

// Some operations
myAge - 'my fathers age';

// To check whether the variable is NaN or not
isNaN(myAge); // false
isNaN(myCatsAge); // true

isNaN('my fathers age'); // true, but why, the value passed is not 'Nan', because the implementation of isNaN is, it first converts the passed value into a number and then decides whether the value is NaN or not.

// As of above implementation we cannot decide whether actual value passed is `NaN` i.e. without converting it to a number, or not so spec came up with this.
Number.isNaN(myCatsAge); // true
Number.isNaN('my fathers age'); // false

// To be noted in NaN.
NaN === NaN; // false, only NaN is not equal to itself in JS.

typeof NaN; // Number, because it denoted an invalid number and therefore an invalid number is also a number
