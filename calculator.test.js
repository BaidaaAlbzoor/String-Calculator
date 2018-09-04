const add = require('./calculator.js');

test('return 0 if input is ""', () => {
    expect(add("")).toBe(0);
});