const stringLength = require('./stringLength');

test('egg', () => {
  expect(stringLength('egg')).toBe(3);
});

test('length', () => {
  expect(stringLength('hermaphrodite')).toBe('String must be between 1 and 10 characters');
});