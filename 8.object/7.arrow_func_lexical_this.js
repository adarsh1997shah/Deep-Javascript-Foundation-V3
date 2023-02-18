/**
 * Hmm... Now we come to interesting things of arrow functions
   - What is lexical `this` in an arrow function ?
   - How does arrow function decides the context of `this` ?
   - Does arrow function have some kind of `this` in them ?

   Lets find out
 */

// Example
const workshop1 = {
	teacher: 'Kyle',
	ask(question) {
		setTimeout(() => console.log(this.teacher, question));
	},
};

workshop1.ask('Is this lexical this?'); // Kyle Is this lexical this?

/**
 * So lets deep dive into whats happening on an above call

 * Now when the ask function is called, settimeout is invoked that runs the log statement
 * Now `question` will be easily printed using lexically passed param to ask
 * For `this.teacher`, note that arrow func doesn't have its own `this` so it takes `this` lexically means it searches for `this` in the above scope as any other variable.
 * So the immediate parent is ask func scope, now we need to check the `this` context in ask func, and we check it by looking at how the func was called.
 * So it was called with dot operator with workshop object as it `this` context
 * And so the `this.teacher` will evaluate to `workshop.teacher`
 */

// NOTE: Arrow func does not have its own this, super, arguments etc.

// Example
const workshop2 = {
	teacher: 'Kyle',
	ask: (question) => console.log(this.teacher, question),
};

workshop2.ask('Is this lexical this?'); // undefined Is this lexical this?
workshop2.ask.call(workshop2, 'Is this lexical this?'); // undefined Is this lexical this?

/**
 * Here when the ask func is called, its directly an arrow func, and so it will not have `this`, and so it will lexically look for its parent scope which is window and on that there is no teacher defined so undefined.
 * NOTE: objects are not scoped
 */

// NOTE: If `new` keyword used on arrow func you get exception as to you cannot use `new` keyword with arrow func.
