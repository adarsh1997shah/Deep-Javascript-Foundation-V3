// TODO: write the validation functions
function isValidName(name) {
	if (typeof name === 'string') {
		if (name.trim().length !== 0) {
			if (name.length > 2) {
				return true;
			}
		}
	}

	return false;
}

function hoursAttended(attended, length) {
	if (
		typeof attended === 'string' ||
		typeof length === 'string' ||
		typeof attended === 'number' ||
		typeof length === 'number'
	) {
		if (typeof attended === 'string' && attended.length === 0) {
			return false;
		} else if (typeof length === 'string' && length.length === 0) {
			return false;
		}

		const numAttended = Number(attended);
		const numLength = Number(length);

		if (numAttended > -1 && numLength > -1) {
			if (numAttended % 1 === 0 && numLength % 1 === 0) {
				if (numAttended < numLength) {
					return true;
				}
			}
		}
	}

	return false;
}

// tests:
console.log(isValidName('Frank') === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, '10') === true);
console.log(hoursAttended('6', 10) === true);
console.log(hoursAttended('6', '10') === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName('') === false);
console.log(isValidName('  \t\n') === false);
console.log(isValidName('X') === false);
console.log(hoursAttended('', 6) === false);
console.log(hoursAttended(6, '') === false);
console.log(hoursAttended('', '') === false);
console.log(hoursAttended('foo', 6) === false);
console.log(hoursAttended(6, 'foo') === false);
console.log(hoursAttended('foo', 'bar') === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, '6') === false);
console.log(hoursAttended('10', 6) === false);
console.log(hoursAttended('10', '6') === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, '10.1') === false);
console.log(hoursAttended('6.1', 10) === false);
console.log(hoursAttended('6.1', '10.1') === false);
