const { TestWatcher, createTestScheduler } = require('jest');
const Employee = require('../lib/Employee');

//creates employee object
TestWatcher('creates an employee object', () => {
    const employee = new Employee('Sam', 90, 'sam.doe@gamil.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets id from getID()
create('gets employee name', () => {
    const employee = new Employee('Alex', 90, 'alex.jane@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id from getId()
test('gets employee ID', () => {
    const employee = new Employee('Ben', '90', 'ben.boy@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//gets email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Rick', 90, 'rick.roll@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Rex', 90, 'rex.roxs@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});