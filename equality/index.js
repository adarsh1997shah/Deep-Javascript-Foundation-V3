/**
 * So far we know that JS use two equality sign/operator to decide whether or not they are equal or not
 * `==` and `===`
 * If we can the universal/heard defination of both of them is as
   - `==`: it checks the value
   - `===`: it checks both the value and the type
 * Now it might be contradictary with your views as to this is not the actual case
 
 * According to the release notes by JS, we can twick the defination a little
   - `==`: it helps with the coersion of the values
   - `===`: it doesnt help with coersion of the values
   - OR WHETHER OR NOT WE ARE GOING TO ALLOW ANY COERSION TO OCCUR

 * To the suprise `==` to uses type checking internally if the types of both the value are equal i.e they do `===`
 */

/**
 * Summary of `==`

 * If the types are same: ===
 * If null or numdefined: equal
 * If non-primitive: Toprimitive
 * prefer: Tonumber
 */

// NOTE: two `===` is always going to be a little bit slower than one `==`
