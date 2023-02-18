/**
 * Hoisting - myth is that JS does moves variables declaration(especially `var` type and function declaration) to top of the current scope, but this not actually the case.
 * JS doesn't move things around the code, rather it(hoisting) is metaphor to discuss the idea of parsing/compiling before executing.
 */

// Variable hoist
console.log(number); // undefined.
var number = 12;

// Function hoist
getRandomNumber(); // a random number
getAnotherRandomNumber(); // Type error

function getRandomNumber() {
	console.log(Math.random());
}

const getAnotherRandomNumber = function () {
	// this will treated as variable and will hoist to undefined and then we cannot execute an undefined statement.
	console.log(Math.random());
};

// Another example
var number = 2;

getNumber();

function getNumber() {
	console.log(number); // undefined, as variable hoist to its own scope.
	var number = 5;
}

/**
 * `let` doesn't hoist! hmmm...
 * So breaking the myth, let and const both hoist, but there is a difference on how they hoist.

 * So the difference between `let/const` hoisting w.r.t to `var` is `var` gets initialized to undefined while `let/const` remain uninitialized(a state where we cant touch it yet), therefore we get error of a variable cannot be accessed before initialization.

 * So TDZ basically comes with const type, because if was to be initialized with undefined and then on the other place it changes to something else(i.e. in the intermediate state it would say `undefined`), then it would be inappropriate by definition, and then later on it was also added on let type as well.
 */

{
	number = 8;
	let number; // Temporal dead zone error
}
