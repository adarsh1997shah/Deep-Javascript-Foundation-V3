/**
 * new keyword also known as `constructor calls`

 * The new keyword usually does the four things
   - Creates a brand new object.
   - Links that object to other object(we talk about this later).
   - Call function with `this` set to the new object(not the linked object).
   - Lastly if func doesn't returns an object, assume return the `this`.
 */

// Example
function Ask(question) {
	return console.log(this.teacher, question);
}

const question1 = new Ask('What is this new ?'); // undefined What is this new ?
