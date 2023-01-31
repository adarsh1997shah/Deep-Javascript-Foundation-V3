/**
 * The `this` keyword

 * A functions `this` references the execution context for that call, determined entirely by how the function is called.
 * We cannot look at the function definition to determine `this`, that doesn't matter at all, the only thing that matters is how that function was invoked/called.
 * A this-aware function can have different context each time it is called, that make it more flexible and reusable.
 */

// this-aware dynamic scope function.
function ask(question) {
	console.log(this.teacher, question);
}

function otherClass() {
	const obj = {
		teacher: 'Kyle',
	};

	ask.call(obj, 'Ask?'); // Kyle Ask?
}

otherClass();

/**
 * In the above scenario the context of the `this` of the ask function can be controlled by passing different objects.
 
 * NOTE: there are 4 different ways in which a function can be invoked, but many different ways a function can be defined.
 */
