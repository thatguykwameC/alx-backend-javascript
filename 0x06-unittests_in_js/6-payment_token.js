#!/usr/bin/env node

/**
 * Retrieves a payment token from the API.
 *
 * @param {boolean} success - Indicates whether the API call should be successful or not.
 * @return {Promise} A promise that resolves to an object with a "data" property
 *                   if the API call is successful.
 *                   If the API call is not successful, an empty promise is returned.
 */
const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    return new Promise(() => {});
  }
};

module.exports = getPaymentTokenFromAPI;
