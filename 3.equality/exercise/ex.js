// Refactored logic
function findAll(valueToBeChecked, values) {
	return values.filter((val) => {
		if (valueToBeChecked == null && val == null) {
			return val == valueToBeChecked;
		} else if (typeof valueToBeChecked == 'boolean' && typeof val == 'boolean') {
			return valueToBeChecked == val;
		} else if (typeof valueToBeChecked == 'object' && typeof val == 'object') {
			return valueToBeChecked == val;
		}
		// check for NaN for either value
		else if (valueToBeChecked != valueToBeChecked || val != val) {
			return valueToBeChecked != valueToBeChecked && val != val;
		}
		// Check if both are string
		else if (typeof valueToBeChecked == 'string' && typeof val == 'string') {
			return valueToBeChecked == val;
		}
		// Check if either is string and number
		else if (
			typeof valueToBeChecked == 'string' &&
			valueToBeChecked.trim() != '' &&
			typeof val == 'number' &&
			1 / val != -Infinity
		) {
			return valueToBeChecked == val;
		}
		// Check if either is string and number
		else if (
			typeof valueToBeChecked == 'number' &&
			valueToBeChecked != -Infinity &&
			valueToBeChecked != Infinity &&
			1 / valueToBeChecked != -Infinity &&
			typeof val == 'string' &&
			val.trim() != ''
		) {
			return valueToBeChecked == val;
		}
		// Check for `-0`
		else if (
			(valueToBeChecked == 0 && 1 / valueToBeChecked == -Infinity) ||
			(val == 0 && 1 / val == -Infinity)
		) {
			return (
				valueToBeChecked == 0 &&
				val == 0 &&
				1 / valueToBeChecked == -Infinity &&
				1 / val == -Infinity
			);
		}

		// Check for unique types, so strictly checked
		return val === valueToBeChecked;
	});
}

// tests:
var myObj = { a: 2 };

var values = [
	null,
	undefined,
	-0,
	0,
	13,
	42,
	NaN,
	-Infinity,
	Infinity,
	'',
	'0',
	'42',
	'42hello',
	'true',
	'NaN',
	true,
	false,
	myObj,
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, '0']) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, '42']) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll('', values), ['']) === true);
console.log(setsMatch(findAll('0', values), [0, '0']) === true);
console.log(setsMatch(findAll('42', values), [42, '42']) === true);
console.log(setsMatch(findAll('42hello', values), ['42hello']) === true);
console.log(setsMatch(findAll('true', values), ['true']) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, '42hello']) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false);
console.log(setsMatch(findAll('', values), ['', 0]) === false);
console.log(setsMatch(findAll('false', values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, 'true']) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}

// TODO: write `findAll(..)`
// On first logic
// function findAll(valueToBeChecked, values) {
// 	return values.filter((val) => {
// 		if (valueToBeChecked == null || val == null) {
// 			return val == valueToBeChecked;
// 		} else if (typeof valueToBeChecked == 'boolean' || typeof val == 'boolean') {
// 			return valueToBeChecked === val; // Strict as val can be boolean but valueToBeChecked can be of any type
// 		} else if (typeof valueToBeChecked == 'object' || typeof val == 'object') {
// 			return valueToBeChecked === val; // Strict as val can be boolean but valueToBeChecked can be of any type
// 		}
// 		// check for NaN for either value
// 		else if (valueToBeChecked != valueToBeChecked || val != val) {
// 			return valueToBeChecked != valueToBeChecked && val != val;
// 		} else if (typeof valueToBeChecked == 'string' && typeof val == 'string') {
// 			return valueToBeChecked == val;
// 		} else if (typeof valueToBeChecked == 'string') {
// 			// Check for empty string
// 			if (valueToBeChecked.trim().length == 0) {
// 				return val === '';
// 			}

// 			numValueToBeChecked = Number(valueToBeChecked);

// 			// Check for NaN after converting to number
// 			if (numValueToBeChecked !== numValueToBeChecked) {
// 				return false;
// 			}

// 			valueToBeChecked = numValueToBeChecked;
// 		} else if (typeof val == 'string') {
// 			const trimmedVal = val.trim();

// 			// Check for empty string
// 			if (trimmedVal.length === 0) {
// 				return false;
// 			}

// 			numVal = Number(val);

// 			// Check for NaN after converting to number
// 			if (numVal !== numVal) {
// 				return false;
// 			}

// 			val = numVal;
// 		}

// 		if (
// 			(valueToBeChecked == 0 && 1 / valueToBeChecked == -Infinity) ||
// 			(val == 0 && 1 / val == -Infinity)
// 		) {
// 			return 1 / valueToBeChecked === 1 / val;
// 		}

// 		return val == valueToBeChecked;
// 	});
// }
