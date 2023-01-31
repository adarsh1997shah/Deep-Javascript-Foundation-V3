const teacher = 'Kyle';

function ask(question) {
	console.log(this.teacher, question);
}

function askStrict(question) {
	'use-strict';
	console.log(this.teacher, question);
}

ask('What is without strict?'); // Kyle What is without strict?
askStrict('What is with strict?'); // Type error

// We got  type error because, in strict mode `this` remains undefined and we are trying to access a property on an undefined object so type error;
