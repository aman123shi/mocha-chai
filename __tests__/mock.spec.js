import { describe, it } from "mocha";
import { expect } from "chai";
import sinon from "sinon";

import {
  Calculator,
  addAndMakeItDouble,
  calculateAndMakeItDouble,
} from "../src/common.js";

describe("Mocking Dependencies Examples", () => {
  let sandbox;

  before(async () => {
    sandbox = sinon.createSandbox();
  });

  afterEach(async () => {
    sandbox.restore();
  });

  it("should perform a complex calculation using mocked add method", () => {
    // Create a stub for the add method
    const addStub = sandbox.stub(Calculator, "add").returns(10);

    // Call the performComplexCalculation function
    const result = addAndMakeItDouble(2, 3);

    // Verify the add method was called with the correct arguments
    expect(addStub.calledOnce).to.be.true;
    expect(addStub.calledWithExactly(2, 3)).to.be.true;

    // Verify the result
    expect(result).to.equal(20);
  });

  it("should perform a complex calculation using mocked add method", () => {
    // Create a stub for the callback method
    const callbackStub = sandbox.stub(Calculator, "multiply").returns(10);

    // Call the performComplexCalculation function
    const result = calculateAndMakeItDouble(2, 3, Calculator.multiply);

    // Verify the add method was called with the correct arguments
    expect(callbackStub.calledOnce).to.be.true;
    expect(callbackStub.calledWithExactly(2, 3)).to.be.true;

    // Verify the result
    expect(result).to.equal(20);
  });

  it("should add two numbers and double the result", () => {
    // Create a mock for the Calculator class
    const calculatorMock = sinon.mock(Calculator);

    // Set up the expectation on the mock
    calculatorMock.expects("add").withExactArgs(2, 3).returns(5);

    // Call the function under test
    const result = addAndMakeItDouble(2, 3);

    // Verify the expectation on the mock
    calculatorMock.verify();

    // Assert the result
    expect(result).to.equal(10);

    // Restore the original Calculator class
    calculatorMock.restore();
  });
});
