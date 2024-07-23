/**
 * Uploads a photo with a given filename
 *
 * @param {string} filename - The filename to be uploaded.
 * @return {Promise} A rejected Promise with an Error.
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
