/**
 * Coercion is basically performed in two steps on either side for conditional statement.
 * Either toString or valueOf func is invoked based on the operation that is being performed.
 * If the value is not a primitive it gets turns to primitive like object, array, func
 * The alogrithm of JS for coercion is recursive, i.e. if the output of first conversion is not a primitive then it converts again and it goes on until it gets to a primitive value
 * If the alorithm hint
    - `is Number`
        - first perform valueOf(), if it gives primitive,
        - then perform toString()

    - `is String`
        - first perform toString(), if it gives primitive,
        - then perform valueOf()

      If by performing both the operation we doesnt get primitive then it generally gives an error
 */
