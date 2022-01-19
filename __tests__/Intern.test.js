const Intern = require('../lib/Intern');

// creating the intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Rick', 90, 'rick.roll@gmail', 'ABCD');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Rick', 90, 'rick.roll@gmail', 'ABCD');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Rick', 90, 'rick.roll@gmail.com', 'ABCD');

    expect(intern.getRole()).toEqual("Intern");
}); 