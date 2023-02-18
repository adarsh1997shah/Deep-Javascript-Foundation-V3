/**
 * Convert value to number
 * Examples
 */

// We can use Number func to convert values to number or mimic toNumber
// Operation to primitives
console.log(Number('')); // 0
console.log(Number('0')); // 0
console.log(Number('-0')); // -0
console.log(Number('   009 ')); // -9
console.log(Number('0.')); // 0
console.log(Number('.0')); // 0
console.log(Number('.')); // NaN
console.log(Number('0xaf')); // 175, handles other bases

console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

/**
 * Operation to non-primitives
 * First it invokes with the `number` hint so the order is valueOf ---> toString
 * For [] and {} it return this
 * valueOf() { return this; }
 */

console.log(Number([''])); // so here first the valueOf will return the array reference and then toString performs and converts to "" and then when we convert that to number it gives 0

console.log(Number(['0'])); // toString -> '0', toNumber -> 0
console.log(Number(['-0'])); // toString -> '-0', toNumber -> -0
console.log(Number([null])); // toString -> '', toNumber -> 0
console.log(Number([undefined])); // toString -> '', toNumber -> 0
console.log(Number([1, 2, 3])); // toString -> '1,2,3', toNumber -> NaN
console.log(Number([[[[[]]]]])); // toString -> '', toNumber -> 0

console.log(Number({})); // toString -> [object Object], toNumber -> NaN
