// Example

const workshop = {
	teacher: 'Kyle',
	ask(question) {
		console.log(this.teacher, question);
	},
};

new (workshop.ask.bind(workshop))('What the hell is this?'); // Kyle What the hell is this?

/**
 * So if more than one binding is applied then what is the binding precedence

 * Check whether the function is called with new, then brand new object will get returned.
 * Check if the function is called with call or apply and the context object specified will be used
 * Check if the function is call with dot operator then that object will be used
 * And lastly the window object will be used except in strict mode
 */
