// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
	// Because NaN is the only type that is not equal to itself
	function isItNaN(value) {
		return value !== value;
	}

	function isItNegZero(value) {
		// Reason to equate it to zero if 1/-Infinity is also -Infinity.
		return value === 0 && 1 / value === -Infinity;
	}

	Object.is = function ObjectIs(value, toBeEqual) {
		// Now we have to check both the sides whether the value passed is exactly NaN or not
		if (isItNaN(value) && isItNaN(toBeEqual)) {
			return true;
		}
		// First check whether one of it is -0 or not to enter the condition and then strictly check whether both of them is -0 or not because -0 === 0 is true
		else if (isItNegZero(value) || isItNegZero(toBeEqual)) {
			return isItNegZero(value) && isItNegZero(toBeEqual);
		} else if (value === toBeEqual) {
			return true;
		}

		return false;
	};
}

// tests:
console.log('1.', Object.is(42, 42) === true);
console.log('2.', Object.is('foo', 'foo') === true);
console.log('3.', Object.is(false, false) === true);
console.log('4.', Object.is(null, null) === true);
console.log('5.', Object.is(undefined, undefined) === true);
console.log('6.', Object.is(NaN, NaN) === true);
console.log('7.', Object.is(-0, -0) === true);
console.log('8.', Object.is(0, 0) === true);

console.log('9.', Object.is(-0, 0) === false);
console.log('10.', Object.is(0, -0) === false);
console.log('11.', Object.is(0, NaN) === false);
console.log('12.', Object.is(NaN, 0) === false);
console.log('13.', Object.is(42, '42') === false);
console.log('14.', Object.is('42', 42) === false);
console.log('15.', Object.is('foo', 'bar') === false);
console.log('16.', Object.is(false, true) === false);
console.log('17.', Object.is(null, undefined) === false);
console.log('18.', Object.is(undefined, null) === false);
