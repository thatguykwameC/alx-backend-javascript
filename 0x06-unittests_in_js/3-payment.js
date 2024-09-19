#!/usr/bin/env node

const Utils = require('./utils');

/**
 * Sends a payment request to the API by calculating the total amount and shipping cost.
 *
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost of the payment.
 * @return {undefined} This function does not return a value.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sumResult = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sumResult}`);
};

module.exports = sendPaymentRequestToApi;
