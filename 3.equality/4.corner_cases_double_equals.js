// How can value be coercive equal to not of itself
// can be re-written as [] != []
if ([] == ![]) {
	// Hmm... true
}

// NOTE: != behaves as !(==)

// Breakdown
// if(!([] == [])) // here types are same so false as they(references) are both diff
// if(!(false))
// if(true)
if (true) {
	// Do something
}

// Breakdown
// if([] == ![])) // here [] is truthy value so ![] is falsy
// if([] == false)
// if("" == false)
// if(0 == false)
// if(0 == 0)
if (true) {
	// Do something
}
