/**
 * Returns a Map object representing a list of groceries.
 *
 * @return {Map<string, number>} A Map object with item names
 * as keys and values as quantity.
 */
export default function groceriesList() {
  return new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
}
