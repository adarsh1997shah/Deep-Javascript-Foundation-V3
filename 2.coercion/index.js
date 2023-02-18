/**
 * Coercion is basically performed in two steps on either side for conditional statement.
 * Either toString or valueOf func is invoked based on the operation that is being performed.
 * If the value is not a primitive it gets turns to primitive like object, array, func
 * The algorithm of JS for coercion is recursive, i.e. if the output of first conversion is not a primitive then it converts again and it goes on until it gets to a primitive value
 * If the algorithm hints
    - `a Number`
        - first perform valueOf(), if it gives primitive,
        - then perform toString()

    - `a String`
        - first perform toString(), if it gives primitive,
        - then perform valueOf()

      If by performing both the operation we dont get primitive then it generally gives an error

  * We have talked about a valueOf and toString a lot, so what those really are
      - valueOf - it returns the primitive value, if it is called upon a non-primitive value then it usually returns the reference of that non-primitive type
      - Link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf
      
      - toString() - it turns/converts value to string

  * Every primitive and non-primitive value have these two implemented by JS, until and unless they are overridden
 */
