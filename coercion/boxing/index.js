/**
 * Ever thought that how can we access length property from string type variable which is primitve in nature
 * So phenomenon is also an example of implicit coercion, as it turns the string to string object and we can have lenght proprety in its prototype.
 */

const str = 'some random string';

console.log(str.length); // Due to implicit coercion
