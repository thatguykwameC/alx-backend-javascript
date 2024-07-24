import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the profile signup process.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file.
 * @return {Promise<Array<Object>>} A promise that resolves with an array
 * of objects containing the status and value or error of each promise.
 */
export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  const handlePromise = (promise) =>
    promise
      .then((result) => ({ status: 'fulfilled', value: result }))
      .catch((error) => ({
        status: 'rejected',
        error: `Error: ${error.message}`,
      }));

  const promises = [
    handlePromise(signUpUser(firstName, lastName)),
    handlePromise(uploadPhoto(fileName)),
  ];

  return Promise.all(promises);
}
