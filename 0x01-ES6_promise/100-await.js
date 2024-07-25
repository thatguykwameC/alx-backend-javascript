import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously uploads a user's photo and creates a user,
 * returning an object containing the photo and user.
 *
 * @return {Promise<Object>} An object containing the uploaded photo
 * and user, or an object with null photo and user.
 */
export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
