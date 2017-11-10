const sum = require('./../index');

test('Checks if Home is defined', () => {
  expect(sum(1, 2)).toBe(3);
});