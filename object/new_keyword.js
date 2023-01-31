/**
 * new keyword also known as `contructor calls`

 * The new keyword usually does the four things
   - Creates a brand new object
   - Links that object to other object(we talk about this later)
   - Call function with `this` set to the new linked object in the above step
   - Lastly if func doesnt returns an object, assume return the `this`
 */

// Example
function Ask(question) {
	return console.log(this.teacher, question);
}

const question1 = new Ask('What is this new ?'); // undefined What is this new ?
