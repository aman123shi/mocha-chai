import { describe, it } from "mocha";
import { expect, assert, should } from "chai";

import { fizzBuzz } from "../src/common.js";

describe("My FizzBuzz Test suite", () => {
  before(() => {
    should();
  });

  it('should return "FizzBuzz" for multiples of both 3 and 5', () => {
    const actual = fizzBuzz(15);
    const expected = "FizzBuzz";

    expect(actual).to.equal(expected);
    expect(actual).to.be.a("string").and.to.be.lengthOf(8);

    assert.strictEqual(actual, expected);

    actual.should.equal(expected);
  });

  it('should return "Fizz" for multiples of 3', () => {
    const actual = fizzBuzz(9);
    const expected = "Fizz";

    expect(actual).to.equal(expected);
    assert.strictEqual(actual, expected);
    actual.should.equal(expected);
  });

  it('should return "Buzz" for multiples of 5', () => {
    const expected = "Buzz";
    const actual = fizzBuzz(10);

    expect(actual).to.equal(expected);
    assert.strictEqual(actual, expected);
    actual.should.equal(expected);
  });

  it("should return the number as a string for non-multiples of 3 or 5", () => {
    const expected = "7";
    const actual = fizzBuzz(7);

    expect(actual).to.equal(expected).to.be.a("string").to.be.lengthOf(1);
  });
});
