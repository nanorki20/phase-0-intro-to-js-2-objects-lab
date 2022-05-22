// Write your solution in this file!
const employee = {
    name: 'Tee',
    streetAddress : '3 Bergen Street '
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
// updateEmployeeWithKeyAndValue()

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    let newE = employee;
    newE[key] = value;
    return newE;
}

// destructivelyUpdateEmployeeWithKeyAndValue()

function deleteFromEmployeeByKey(employee, key) {
    let newObject = {...employee}
    delete newObject[key];
    return newObject
}



function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let newObject = employee
    delete newObject[key];
    return newObject
}

