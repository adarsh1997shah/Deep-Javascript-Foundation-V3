// Example of implicit binding
const workshop = {
	teacher: 'Kyle',
	ask(question) {
		console.log(this.teacher, question);
	},
};

workshop.ask('What is implicit binding?'); // Kyle What is implicit binding?

/**
 * In the above scenario, ask get called and it references teacher with `this`, so how does the ask function knew the `this` is referenced to workshop.

 * Because of how the function was called, it was called with dot operator along with workshop to reference it and thats how `this` got implicitly bound to workshop object.
 */

// Example of implicit binding `sharing`
function ask(question) {
	console.log(this.teacher, question);
}

const workshop1 = {
	teacher: 'Kyle',
	ask,
};

const workshop2 = {
	teacher: 'Suzy',
	ask,
};

workshop1.ask('What is implicit binding1?'); // Kyle What is implicit binding1?
workshop2.ask('What is implicit binding2?'); // Suzy What is implicit binding2?

/**
 * Here ask function is a common function shared among two different object, and the way of calling of the ask function is determines the context  of `this`.
 */
