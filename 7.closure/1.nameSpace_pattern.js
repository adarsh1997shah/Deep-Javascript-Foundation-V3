// Name space pattern example.
const workshop = {
	teacher: 'Kyle',
	ask(question) {
		console.log(this.teacher, question);
	},
};

workshop.ask('Is this module');
