/**
 * Signs a User up with their first and last names.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @return {Promise<Object>} A Promise that resolves with an
 * object containing the provided first name and last name.
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
