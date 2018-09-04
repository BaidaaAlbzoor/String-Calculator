const add = require('./calculator.js');

test('return 0 if input is ""', () => {
    expect(add("")).toBe(0);
});

test('return 1 if input is "1"', () => {
    expect(add("1")).toBe(1);
});