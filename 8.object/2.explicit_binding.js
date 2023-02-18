// Example for explicit binding.
function ask(question) {
	console.log(this.teacher, question);
}

const workshop1 = {
	teacher: 'Kyle',
};

const workshop2 = {
	teacher: 'Suzy',
};

ask.call(workshop1, 'What is explicit binding1?'); // Kyle What is explicit binding1?
ask.call(workshop2, 'What is explicit binding2?'); // Suzy What is explicit binding2?

/**
 * In the above scenario, we are explicitly, calling the function, mentioning the `this` context to be.
 */
