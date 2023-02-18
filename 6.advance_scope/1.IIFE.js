function getRandomNumber() {
	console.log(Math.random());
}

// prettier-ignore
(getRandomNumber)() // wrapping a paren around the function name means its acting as source reference i.e value getter and then the enclosing paren (`()`) would execute that expression. So why not put the entire expression into it and execute it immediately.

/**
 * IIFE is also known as Immediately Invoked Function Expression
 * It is known as function expression because the first line is not starting with the function its starting with an opening paren.
 * IIFEs doesn't pollute the current scope i.e no parsing happens for IIFEs.
 */

(function getRandomNumber() {
	console.log(Math.random());
})();

// We can also turn a try catch block into an expression by wrapping it inside an IIFE, not very common though.

var number = (function getRandomNumber() {
	try {
		return someRandomFunc(); // dummy function return a value, if error goes to catch
	} catch (error) {
		return Math.random();
	}
})();

// Note : we can use IIFE anytime whenever we want to use a statement/scope to be in an expression position.
