// Named function expression
const namedhandler = function handler() {
	console.log('run');
};

// Function expression
const unnamedhandler = function () {
	console.log('run');
};

/**
 * Advantages of named function over anonymous function expression.
    - Self reference of the function inside that function(recursion, etc)
    - Makes debugging easier
    - More self documenting code
 */

// Self referencing
const result = function factorial(num) {
	if (num == 0) {
		return 1;
	}

	return factorial(num - 1);
};

// result(6)
