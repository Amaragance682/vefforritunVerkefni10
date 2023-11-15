const minus = require('./minus');

test('subtracts 1 - 2 to equal -1', () => {
  expect(minus(1, 2)).toBe(-1);
});
