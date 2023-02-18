const deepJS = defineWorkshop();

deepJS.addStudent({ id: 313, name: 'Frank', paid: true });
deepJS.addStudent({ id: 410, name: 'Suzy', paid: true });
deepJS.addStudent({ id: 709, name: 'Brian', paid: false });
deepJS.addStudent({ id: 105, name: 'Henry', paid: false });
deepJS.addStudent({ id: 502, name: 'Mary', paid: true });
deepJS.addStudent({ id: 664, name: 'Bob', paid: false });
deepJS.addStudent({ id: 250, name: 'Peter', paid: true });
deepJS.addStudent({ id: 375, name: 'Sarah', paid: true });
deepJS.addStudent({ id: 867, name: 'Greg', paid: false });

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log('----');
deepJS.enrollPaidStudents();
console.log('----');
deepJS.remindUnpaidStudents();

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

// ********************************

function defineWorkshop() {
	const currentEnrollment = [];
	const studentRecords = [];

	return {
		addStudent,
		enrollStudent,
		printCurrentEnrollment,
		enrollPaidStudents,
		remindUnpaidStudents,
	};

	/** Start of public apis */

	function addStudent(student) {
		studentRecords.push(student);
	}

	function enrollStudent(id) {
		if (!currentEnrollment.includes(id)) {
			currentEnrollment.push(id);
		}
	}

	function printCurrentEnrollment() {
		printRecords(currentEnrollment);
	}

	function enrollPaidStudents() {
		const currentEnrollment = paidStudentsToEnroll();
		printRecords(currentEnrollment);
	}

	function remindUnpaidStudents() {
		remindUnpaid(currentEnrollment);
	}

	/** End of public apis */

	function getStudentFromId(studentId) {
		return studentRecords.find(matchId);

		// *************************

		function matchId(record) {
			return record.id == studentId;
		}
	}

	function printRecords(recordIds) {
		var records = recordIds.map(getStudentFromId);

		records.sort(sortByNameAsc);

		records.forEach(printRecord);
	}

	function sortByNameAsc(record1, record2) {
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	}

	function printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not Paid'}`);
	}

	function paidStudentsToEnroll() {
		var recordsToEnroll = studentRecords.filter(needToEnroll);

		var idsToEnroll = recordsToEnroll.map(getStudentId);

		return [...currentEnrollment, ...idsToEnroll];
	}

	function needToEnroll(record) {
		return record.paid && !currentEnrollment.includes(record.id);
	}

	function getStudentId(record) {
		return record.id;
	}

	function remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(notYetPaid);

		printRecords(unpaidIds);
	}

	function notYetPaid(studentId) {
		var record = getStudentFromId(studentId);
		return !record.paid;
	}
}
