/**
 * Lexical scope is an idea of scope being nested within each other, where a compiler/parser/processor is figuring out scope ahead of time before being executed.
 * Lexical scoping is a scoping that happens at compile time.
 * Lexical scope is not affected at run-time.
 */

var name = 'goat';

function outer() {
	var name = 'goat';

	function inner() {
		console.log(name); // variable name is lexically scoped.
	}

	inner();
}

outer();

/**
 * Dynamic scope by the name means its scope is dynamic in nature
 */

// Example if JS would have behaved dynamically
var random_name = 'dynamic';

function getName() {
	console.log(random_name); // inner, for dynamic cases
}

function logName() {
	var random_name = 'inner';

	getName(); // so now if this function runs it would print inner, as the it doent matter where the function is declared but from where the function is being called.
}
