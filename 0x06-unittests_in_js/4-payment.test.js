#!/usr/bin/env node

/*
 * Test file for sendPaymentRequestToApi
 * Stubs Utils.calculateNumber
 * Stubs console.log
 * Verifies if Utils.calculateNumber is called with the correct args
 * Verifies if console.log is called
 * Verifies if console.log is called with the correct args
 */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let spy, stub;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore();
    spy.restore();
  });

  it('Validating the usage of the Utils function', () => {
    const totalAmount = 100,
      totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
