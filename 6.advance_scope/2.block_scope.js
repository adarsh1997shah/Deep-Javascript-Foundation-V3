/**
 * Block scope as the name suggest creates a block for scoping.
 * So instead of an IIFE we can use block scope to separate/privatize variables in that scope.
 * Blocks are not scopes unless there is a `let` type variable is declared inside it.
 */

var number = 12;

{
	let number = 4;
	console.log(number); // 4
}

console.log(number); // 12

// List of examples of var over let
function getRandomNumber() {
	try {
		var i = getNumber();
	} catch (error) {
		var i = Math.random();
	}

	return i; // As var attaches to function scope and not block scope, it escapes the block scope, semantically appeals the reader that the variable is to be used inside the whole function.
}
