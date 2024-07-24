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
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
    for (const item of values) {
      arr.push({ status: item.status, value: item.value || item.reason });
    }
    return arr;
  });
}
