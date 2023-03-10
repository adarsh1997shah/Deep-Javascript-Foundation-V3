// Example
function Workshop(teacher) {
	this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
	console.log(this.teacher, question);
};

function AnotherWorkshop(teacher) {
	Workshop.call(this, teacher);
}

AnotherWorkshop.prototype = Object.create(Workshop.prototype);

const anotherWorkshop = new AnotherWorkshop('Kyle');

/**
 * Object.create creates a new object and sets its prototype to Workshop.prototype
 */
