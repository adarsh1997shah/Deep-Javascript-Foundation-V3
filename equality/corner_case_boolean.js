const arr1 = [];

// As [] is a truthy value
// if (arr1) {
// if (Boolean([])) {
if (true) {
	// yep
}

// Breakdown
// if (arr1 == true) {
// if ([] == true) {
// if ("" == true) {
// if (0 == 1) {
if (false) {
	// nope
}

// Breakdown
// if (arr1 == false) {
// if ([] == false) {
// if ("" == false) {
// if (0 == 0) {
if (true) {
	// yep
}
