/*
Negative zero/(-0)/Negative representation of zero

Yes it sounds as misterious as it is represented. But it does have some kind of significance in JS and you might need in your application 😱

Examples
*/

const trendRate = -0;

trendRate === -0; // true

trendRate.toString(); // "0" OOPS!

trendRate === 0; // true OOPS!

trendRate < 0; // false
trendRate > 0; // false

// Now to uniquely identify whether we are getting negative zero and zero.
Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false

/*
Now why do we need a number something like this -0

Some practical example can be, it can be used to determine the direction of which it was flowing to and and the number itself.

So in -0, - will be the direction(inc/dec) and the number value itself.

Suppose a stock rate price values to 0, now in order to detect whether the value fallen to 0 or whether it increased to 0. Therefore in order to prevent creating another value to this trend we can use sign to represent the prev trend.
*/

// Now we also have utility method that determines the sign of a number that return -1 if number is negative and 1 if number is positive.
Math.sign(-3); // -1
Math.sign(3); // 1

// But
Math.sign(-0); // -0
Math.sign(0); // 0

// So in order to fix this we can create it our own
function sign(number) {
	return number !== 0 ? Math.sign(number) : Object.is(number, -0) ? -1 : 1;
}

sign(-3); // -1
sign(3); // 1

sign(-0); // -1
sign(0); // 1

// Now other example for showing trend even on 0 whether the value was moving up or dowm.
function getTrend(trend) {
	const direction = trend < 0 || Object.is(trend, -0) ? '👇' : '👆';

	return `${direction} ${Math.abs(trend)}`;
}

getTrend(-3); // "👇 3"
getTrend(3); // "👆 3"

getTrend(-0); // "👇 0"
getTrend(0); // "👆 0"
