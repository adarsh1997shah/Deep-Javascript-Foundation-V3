/**
 * toString func returns a string converting the value it is called upon.
 * Examples
 */

// Arrays
console.log([].toString()); // ""
console.log([1, 2, 3].toString()); // "1,2,3"
console.log([[[], []], []].toString()); // ",,"
console.log([null, undefined].toString()); // ","

// Object
const obj1 = {};
const obj2 = { x: 2 };

console.log(obj1.toString()); // "[object Object]"
console.log(obj2.toString()); // "[object Object]"

/**
 * Note
 * We can override a toString function to completely control what are object stringification look like.
 * If we want to override toString we can do so by creating a property on that particular object
 */

// obj1.toString = function () {
// 	return 'Custom toString return';
// };

// So we can override the toString to return the actual contents of the object like so
obj1.toString = function () {
	return JSON.stringify(this);
};
