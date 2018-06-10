const minus = require('../minus');

test('빼기 테스트', () => {
  expect(minus(10, 3)).toBe(7);
  expect(minus(3, 1)).toBe(2);
  expect(minus(10 - 3, 1)).toBe(6);
});
