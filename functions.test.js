// const functions = require ("./functions");

// test ("Adds 2 + 2 to equal 4", () => {
//     expect(functions.add(2,2)).toBe(4);
// })

// test ("Adds 2 + 2 to NOT equal 3", () => {
//     expect(functions.add(2,2)).not.toBe(3);
// })

const functions = require('./functions.js')

test('Should be null', () => {
        // Start with expect()
        // Inside the first brackets put what you want to test. That will be a function.
        // Then follows your .toBeSomethingSomething function,
        // find the appropriate function in the documentation.
        // In this case we want to check if the function "isNull()" actually
        // returned null. So "toBeNull()" makes the most sense
  expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {

});

test('User should be Brad Traversy object', () => {

});

// Tests are really just functions. To demonstrate that, 
// we now let you create tests that work without outside input:

// Less than or greater than
test('Should be under or equal to 1600', () => {
        const load1 = 800;
        const load2 = 800;
        expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
        expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
     usernames = ['john', 'karen', 'admin'];
     expect(usernames).toContain('admin');
});