#!/usr/bin/env node

const calculateNumber = (type, a, b) => {
  const val1 = Math.trunc(a);
  const val2 = Math.trunc(b);

  switch (type) {
    case 'SUM':
      return val1 + val2;
    case 'SUBTRACT':
      return val1 - val2;
    case 'DIVIDE':
      return val2 !== 0 ? val1 / val2 : 'Error';
    default:
      throw new Error('Invalid type');
  }
};

module.exports = calculateNumber;
