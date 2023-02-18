// Example of hard binding.
const workshop = {
	teacher: 'Kyle',
	ask(question) {
		console.log(this.teacher, question);
	},
};

setTimeout(workshop.ask, 10, 'What is explicit hard binding?'); // undefined What is explicit hard binding?

/**
 * In the above scenario, when ask function is passed to the settimeout as a callback, it loses it `this`, because inside settimeout the callback might be called as `cb()` and `this` points to the global object as when calling the callback there is no dot notation performed, and undefined is printed because there is no such `teacher` property in the global object.
 */

// To fix the above scenario we ise hard bind.
setTimeout(workshop.ask.bind(workshop), 10, 'What is explicit hard binding?'); // Kyle What is explicit hard binding?
