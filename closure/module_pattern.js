// Module pattern
function WorshopModule(teacher) {
	const publicApi = { ask };

	return publicApi;

	function ask(question) {
		console.log(teacher, question);
	}
}

const workshop = WorshopModule('Kyle');
workshop.ask('Is this module');

/**
 * Module can also be created by an IIFE.
 */
