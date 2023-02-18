/**
 * Ever thought that how can we access length property from string type variable which is primitve in nature
 * So phenomenon is also an example of implicit coercion called boxing, as it turns the string into its string object using `new String` and we can have length property in its prototype.
 */

const str = 'some random string';

console.log(str.length); // Due to implicit coercion
