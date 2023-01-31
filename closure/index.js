// Example
function counter() {
	let count = 0;

	return function incCount() {
		count++;
		console.log(count);
	};
}

const increaseCount1 = counter();
increaseCount1();
increaseCount1();

const increaseCount2 = counter();
increaseCount2();

/**
 * Hmmm, so what closure actually is
 *
 * Closure is actually when a function is able to access its lexically scoped variable even when it is executed outside that lexical scope.
 */

// Another example
function ask(question) {
	setTimeout(() => {
		console.log(question);
	}, 1000);
}

ask('What is closure');

/**
 * So whats happening in above function? According to the definition once the func is executed, all the variable is garbage collected !, So how does the function inside the settimeout able to log the `question` parameter passed to the ask function.

 * So here is the explanation
 * Once the ask func is called it first implicitly creates the a variable with a name same as that of the parameter passed and then executes the settimeout, and the function is then garbage collected but here is the catch, the variable `question` is lexically scoped to / closed over the `question` variable and so even if the ask function is destroyed, the settimeout remembers `question` variable that runs after 1 sec.

 * Closure happens on a full scope basis and not on a per variable
 * Closure is not closed over a value but rather its closed over the variable that value is assigned to, even if it means the value of that variable will change later in the code, it will show the updated variable value.
 */
