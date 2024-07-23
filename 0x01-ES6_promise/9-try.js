/**
 * Executes the given math function and pushes the result
 * or an error message to a queue.
 *
 * @param {function} mathFunction - The function to be executed.
 * @return {Array} An array containing the result or error message.
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
