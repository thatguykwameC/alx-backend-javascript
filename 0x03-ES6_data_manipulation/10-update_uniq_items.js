/**
 * Updates the values in the given Map object so that
 * any item with a quantity of 1 is set to 100.
 *
 * @param {Map} map - The Map object to update.
 * @return {Map} The updated Map object.
 * @throws {Error} If the input is not an instance of Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });

  return map;
}
