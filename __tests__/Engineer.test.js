// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Sam', 90, 'sam.doe@gmail', 'samdoe66');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Alex', 90, 'alex.roxs@gmail', 'alexroxs88');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Ben', 90, 'ben.smellsw@gmail', 'bensmells98');

    expect(engineer.getRole()).toEqual("Engineer");
});