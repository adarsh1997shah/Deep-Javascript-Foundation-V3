// Named function expression
const namedHandler = function handler() {
	console.log('run');
};

// Anonymous function expression
const unNamedHandler = function () {
	console.log('run');
};

/**
 * NOTE :- For named function, it creates its own scope.
 * If from the above code of named function expression, i use `handler()` or try to assign it to something it will throw an error.
 */

/**
 * Advantages of named function over anonymous function expression.
    - Self reference of the function inside that function(recursion, etc).
    - Makes debugging easier.
    - More self documenting code.
 */

// Self referencing
const result = function factorial(num) {
	if (num == 0) {
		return 1;
	}

	return factorial(num - 1);
};

// result(6)
