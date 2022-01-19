const Manager = require('../lib/Manager');

// creating the manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Pusheen', 90, 'pusheen.cat@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Pusheen', 90, 'pusheen.cat@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 