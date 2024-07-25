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
    queue.push(mathFunction());
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
