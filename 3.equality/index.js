/**
 * So far we know that JS use two equality sign/operator to decide whether or not they are equal or not
 * `==` and `===`
 * If we can say the universal/heard definition of both of them is as
   - `==`: it checks the value (loose)
   - `===`: it checks both the value and the type (strict)
 * Now it might be contradictory with your views as to this is not the actual case
 
 * According to the release notes by JS, we can tweak the definition a little
   - `==`: it helps with the coercion of the values
   - `===`: it doesn't help with coercion of the values
   - OR WHETHER OR NOT WE ARE GOING TO ALLOW ANY COERCION TO OCCUR 😱

 * To the surprise `==` uses type checking internally if the types of both the value are equal they do `===`
 */

/**
 * Summary of `==`

 * If the types are same: ===
 * If null or undefined: equal
 * If non-primitive: ToPrimitive
 * prefer: ToNumber
 */

// NOTE: two `===` comparison is always going to be a little bit slower than one `==` comparison
