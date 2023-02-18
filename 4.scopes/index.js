/**
 * Compiled languages compiles(checks for any errors or create a scope plan) the code before running it
 * Interpreted languages compiles and runs the code line by line

 * JS is a compiled/parsed language as when there is any syntax error, it usually throws error without executing anything above/below it
 * Or we can say JS gets compiled in two passes
    - Parsing/Compilation (to generate the plan of scope)
    - Running/Executing the program

 * Two king of scopes in JS/JS organizes scopes with 
    - Function
    - Block

 * Lexical scoping is process of looking up to parent scope if the identifier is not defined in the current scope

 * Undefined
    - A variable is said to be undefined when it has been declared but haven't been assigned any value to it in its current scope.
 * Undeclared
    - A variable is said to be undeclared when it was never formally declared in any scope that we have access to.
 */

// Example for a compiled vs interpreted language
function compiled() {
	console.log('Run');
	// console.log()); // Here have added extra braces to generate error, so JS throws error without consoling the above code
}

function interpreted() {
	console.log('Run');
	test(); // Here we have an undefined function, when above code runs, it logs 'Run', before throwing the error, `test` is not defined.
}

// Example of lexical scope
let text = 'text';

function lexicalScope() {
	console.log(text); // Here text is not defined in the function, so it looks for its parents scope.
}
