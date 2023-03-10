/**
 * To the surprising, the prototype chain occurs even before we actually do something is JS

 * Now before executing anything, theres an function named `Object` and then there is another object that have no name, but it usually refers to the object that is linked to `Object` function by one of the keys called `prototype`.
 * Theres also a key, that points from that prototype key property back to Object function known as constructor, so as to look and feel that `that` prototype object was created from the Object constructor. 
 */
