const calculator = require('./calculator');

describe('calculator', () => {
  test('add 2+2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('add 3+4', () => {
    expect(calculator.add(3, 4)).toBe(7);
  });
  
  test('subtract 2-2', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
  });
  
  test('subtract 1-4', () => {
    expect(calculator.subtract(1, 4)).toBe(-3);
  });
  
  test('divide 2/2', () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });
  
  test('divide 5/2', () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
  });
  
  test('multiply 2*2', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  
  test('multiply 10*15', () => {
    expect(calculator.multiply(10, 15)).toBe(150);
  });
})