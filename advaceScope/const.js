/**
 * When a variable is declared with type const then it cannot be re-assigned rather than not changing throughout the scope.
 */

// Examples.
const number = 2;
number = 4; // TypeError.

const array = [1, 2, 3];
array[2] = 4; // allows mutation

// Take always - const should always be used for primitve immutable values.
