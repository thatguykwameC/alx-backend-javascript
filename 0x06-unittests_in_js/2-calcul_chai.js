#!/usr/bin/env node

/**
 * Performs a mathematical operation based on the provided type.
 *
 * @param {string} type - The type of operation to perform (SUM, SUBTRACT, DIVIDE)
 * @param {number} a - The first operand
 * @param {number} b - The second operand
 * @return {number|string} The result of the operation or 'Error' if division by zero occurs
 */
const calculateNumber = (type, a, b) => {
  const val1 = Math.round(a);
  const val2 = Math.round(b);

  switch (type) {
    case 'SUM':
      return val1 + val2;
    case 'SUBTRACT':
      return val1 - val2;
    case 'DIVIDE':
      return val2 === 0 ? 'Error' : val1 / val2;
    default:
      throw new Error('Invalid type');
  }
};

module.exports = calculateNumber;
