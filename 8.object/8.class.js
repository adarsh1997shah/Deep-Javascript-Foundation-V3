// Example
class Workshop {
	constructor(teacher) {
		this.teacher = teacher;
	}

	ask(question) {
		console.log(this.teacher, question);
	}
}

const workshop1 = new Workshop('Kyle');

workshop1.ask('Is this class?'); // Kyle Is this class?

/**
 * So above is the ES6 class syntax
 *
 * Classes can be expression and it can be anonymous.
 * We can also use parent properties and methods to child class with extends keyword.

 * We can also use super keyword with extend such that, if we define a func in child class with a same name as in parent class, we can call the parent func with super keyword as called shadowing.
 */

// But if....
setTimeout(workshop1.ask, 1000, 'Will this work?'); // undefined Will this work?

/**
 * Well on the class system as well, the `this` is not hard bound, to fix either create an arrow func around the func or hard bind with workshop1 object.

 
 * But however, most codes base creates a property and then assigns an arrow func to it, does this actually solved the above settimeout problem.
 */

// Example
class Workshop {
	constructor(teacher) {
		this.teacher = teacher;
	}

	ask = (question) => {
		console.log(this.teacher, question);
	};
}

/**
 * So why we don't need bind for the above function, drums roll...., because function has been declared as a property to an object rather than a member func. This works but as according to the JS nature, func should be added to the `objects prototype` rather than the object itself, if we add func as a property then every time we instantiate from class we will get new set of funcs rather the copy of the func, that could severely hamper the performance, but as chrome handle its gracefully we don't notice.
 * And so when we pass above func to settimeout which is an arrow func, the `this` gets resolved lexically, so the parent scope for ask func is the class (which is internally acts as func constructor).
 */
