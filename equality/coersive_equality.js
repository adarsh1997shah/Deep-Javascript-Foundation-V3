/**
 * For null and undefined, `==` coerses them both to true
 */

const user1 = { name: 'arun' };
const user2 = {};

if (
	(user1.name === null || user1.name === undefined) &&
	(user2.name === null || user2.name === undefined)
) {
	// do something
}

// We can user the poser of coersion
if (user1.name === null && user2.name == null) {
	// Do something
}
