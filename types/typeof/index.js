var v;
let type;

type = typeof v; // "undefined"
type = typeof '1'; // "string"

v = 2;
type = typeof v; // "number"

v = true;
type = typeof v; // "boolean"

v = {};
type = typeof v; // "object"

v = Symbol();
type = typeof v; // "symbol"

v = null;
type = typeof v; // "object"

v = function () {};
type = typeof v; // "function"

v = [];
type = typeof v; // "object, because array is a subset of object"

v = BigInt(42);
type = typeof v; // "bigint"
