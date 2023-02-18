/**
 * Examples
 */

const num1 = 4;
const arr1 = [4];

if (num1 == arr1) {
	// Hmm.. true
}

// Breakdown
// if (num1 == arr1) {
// if(4 == '4') // First only primitive type checking, so [] --> to string
// if(4 == 4) // prefers numeric comparison
// if(true)
if (true) {
	// yeh.. true
}
