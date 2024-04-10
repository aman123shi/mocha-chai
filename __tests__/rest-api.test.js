import { describe, it } from "mocha";
import chai from "chai";
import app from "../src/index";

chai.use(require("chai-http"));

const { request, expect } = chai;

describe("#POST FizzBuzz API  /api/fizzbuzz", () => {
  it("should return a 400 error for non-number input", async () => {
    const response = await request(app)
      .post("/api/fizzbuzz")
      .send({ number: "abc" });

    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal("Input must be a number");
  });

  it("should return a 400 error for non-positive numbers", async () => {
    const response = await request(app)
      .post("/api/fizzbuzz")
      .send({ number: -5 });

    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal("Input must be a positive number");
  });

  it('should return "FizzBuzz" for multiples of 3 and 5', async () => {
    const response = await request(app)
      .post("/api/fizzbuzz")
      .send({ number: 15 });

    expect(response.status).to.equal(200);
    expect(response.body.result).to.equal("FizzBuzz");
  });

  it('should return "Fizz" for multiples of 3', async () => {
    const response = await request(app)
      .post("/api/fizzbuzz")
      .send({ number: 9 });

    expect(response.status).to.equal(200);
    expect(response.body.result).to.equal("Fizz");
  });

  it('should return "Buzz" for multiples of 5', async () => {
    const response = await request(app)
      .post("/api/fizzbuzz")
      .send({ number: 10 });

    expect(response.status).to.equal(200);
    expect(response.body.result).to.equal("Buzz");
  });

  it("should return the input number as a string for non-multiples", async () => {
    const response = await request(app)
      .post("/api/fizzbuzz")
      .send({ number: 7 });

    expect(response.status).to.equal(200);
    expect(response.body.result).to.equal("7");
  });
});
