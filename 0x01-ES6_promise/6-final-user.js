import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the profile signup process asynchronously.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file.
 * @return {Promise<Array<Object>>} A promise that resolves with an array
 * of objects containing the status, value or error of each promise.
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return results.map((res) => ({
    status: res.status,
    value: res.status === 'fulfilled' ? res.value : String(res.reason),
  }));
}
