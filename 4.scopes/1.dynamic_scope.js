// Example of a dynamic scope.
const teacher = 'Kyle';

function ask(question) {
	console.log(teacher, question);
}

function otherClass() {
	const teacher = 'Adam';

	ask('How are you ?');
}

otherClass();

/**
 * Here when the ask function is called from inside the otherClass function, it logs the teacher defined inside the otherClass, rather than the one defined in the global scope.
 * So here the teacher variable log depend on the where the ask function was called rather than where it was defined.
 */
