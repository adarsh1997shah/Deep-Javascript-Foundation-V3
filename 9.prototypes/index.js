/**
 * Now coming to a new topic called prototypes.

 * So what are these prototype ?
 * How does this effects the object creation ?
 * And what the heck is prototypal inheritance ?

 * We will answer or get the answer to those question above and many more in this module. 
 */

/**
 * Few things we should know before we move on
   - JS does linking rather than copying before creating objects.
   - A constructor calls makes an object linked to its own prototype. 
 */

/**
 * As we know that or it is surprising to know that, whenever we create an object or array in JS like const obj = {} or const ar = [], it internally does new Object() or new Array(), which we usually call them as constructor call
 * So we earlier discussed that `new` does 4 things, one of which was lining the new created object with an object
 * This object is know as prototype, as it actually resides as key named `prototype` in the function.
 */

// Example
function Workshop(teacher) {
	this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
	console.log(this.teacher, question);
};

const workshop = new Workshop('Kyle');

workshop.ask('Is this prototype?'); // KyleIs this prototype?

/**
 * We also hear __proto__ , as we cannot access [[Prototype]], this dunder proto links back to what it was linked to from the func's prototype.
 * So it is advised to not change __proto__ directly as it will change the prototype chain.
 */

workshop.__proto__ === Workshop.prototype; // true
workshop.__proto__.__proto__ === Object.prototype; // true
workshop.__proto__.__proto__.__proto__ === null; // true

/**
 * Another question - why do we add function to the prototype and not directly inside the constructor func ?
  - Because we don't want to create func again and again, when the new instance is created, it will directly inherit those funcs through the prototype chain
 */
