function getRecordById(record) {
	return record.id;
}

function printRecords(recordIds) {
	const filteredRecords = studentRecords.filter(function filterById(record) {
		return recordIds.includes(record.id);
	});

	filteredRecords.sort(function sortByName(curr, next) {
		return curr.name < next.name ? -1 : 1;
	});

	filteredRecords.forEach(function displayRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not Paid'}`);
	});
}

function paidStudentsToEnroll() {
	const filteredIds = studentRecords
		.filter(function filterByIsPaidAndNotEnrolled(record) {
			return !currentEnrollment.includes(record.id) && record.paid;
		})
		.map(getRecordById);

	return [...filteredIds, ...currentEnrollment];
}

function remindUnpaid(recordIds) {
	return studentRecords
		.filter(function filterByIsNotPaid(record) {
			return recordIds.includes(record.id) && !record.paid;
		})
		.map(getRecordById);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
	{ id: 313, name: 'Frank', paid: true },
	{ id: 410, name: 'Suzy', paid: true },
	{ id: 709, name: 'Brian', paid: false },
	{ id: 105, name: 'Henry', paid: false },
	{ id: 502, name: 'Mary', paid: true },
	{ id: 664, name: 'Bob', paid: false },
	{ id: 250, name: 'Peter', paid: true },
	{ id: 375, name: 'Sarah', paid: true },
	{ id: 867, name: 'Greg', paid: false },
];

printRecords(currentEnrollment);
console.log('----');
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log('----');
unpaidEnrollment = remindUnpaid(currentEnrollment);
printRecords(unpaidEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
