/**
 * Module pattern encapsulates the data and behavior(methods) together.
 * The state of the data is held by its methods via closure.
 */

// Module pattern
function WorshopModule(teacher) {
	const publicApi = { ask };

	return publicApi;

	function ask(question) {
		console.log(teacher, question);
	}
}

const workshop = WorshopModule('Kyle');
workshop.ask('Is this module'); // Kyle Is this module

/**
 * Module can also be created by an IIFE.
 */
