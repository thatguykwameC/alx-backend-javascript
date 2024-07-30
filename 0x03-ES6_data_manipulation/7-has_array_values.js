/**
 * Checks if all values in the given array are present in the set.
 *
 * @param {Set} set - The set to check for values.
 * @param {Array} array - The array of values to check.
 * @return {boolean} True if all values in the array are
 * present in the set, else false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
