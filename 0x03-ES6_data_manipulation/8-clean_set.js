/**
 * FIlters a given set by removing all strings that
 * do not start with the provided startString.
 *
 * @param {Set} set - The set of strings to be filtered.
 * @param {string} startString - The starting string to filter the set by.
 * @return {string} - A string representation of the cleaned set,
 * with each string separated by a hyphen.
 */
export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter((string) => (string !== undefined ? string.startsWith(startString) : ''))
    .map((string) => (string !== undefined ? string.slice(startString.length) : ''))
    .join('-');
}
