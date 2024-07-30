/**
 * Creates a typed array of 8-bit signed integers with
 * the given length and value at the specified position.
 *
 * @param {number} length - The length of the array.
 * @param {number} position - The position at which the value should be set.
 * @param {number} value - The value to be set at the specified position.
 * @return {DataView} The created typed array.
 * @throws {Error} If the position is outside the range of the array.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const intView = new DataView(buffer);
  intView.setInt8(position, value);
  return intView;
}
