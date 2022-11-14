/**
 * If either of the operand of `==` is a string/number/boolean and other one is number, then `==` prefers number comparison
 * If either of operand is a non-primitive like {}/[], then are converted to primitve i.e `==` only checks primitve values
 */

const num1 = 4;
const num2 = '4';

if (Number(num1) === Number(num2)) {
	// Do something
}

// It will look lot cleaner with `==`, if we know the types i.e it will either be a string or a number
if (num1 === num2) {
	// Do something
}
