/*
Certainly! In Sinon, there are three main concepts: spies, stubs, and mocks. Here's an explanation of each:

1. Spies:
   - Spies are used to observe the behavior of a function or method. They allow you to monitor if a function has been called, how many times it has been called, with which arguments, and more.
   - Spies do not modify the original function's behavior. They simply wrap the function and provide information about its invocations.
   - Spies are useful when you want to gain insight into the interactions between different parts of your code.

2. Stubs:
   - Stubs are similar to spies but have additional behavior: they replace the original function with a custom implementation defined by you.
   - Stubs can be used to control the behavior of functions or methods during testing. You can define the return value of a stub, make it throw an error, or execute a custom implementation.
   - Stubs are often used to isolate the code under test by replacing dependencies with controlled substitutes.

3. Mocks:
   - Mocks provide a way to define expected behavior for a function or method and also verify that the expected behavior has occurred.
   - Mocks combine the functionality of spies and stubs. They allow you to define expectations about how a function should be called (e.g., with specific arguments) and specify the desired behavior (e.g., return a specific value).
   - Mocks also provide built-in assertions to verify that the expected behavior has been fulfilled. If the expectations are not met, a mock will typically throw an error.
   - Mocks are useful when you want to specify and verify the behavior of a function or method in a test case.

In summary, spies are used to observe the behavior of functions, stubs allow you to control the behavior of functions, and mocks enable you to define expected behavior and verify that it has occurred.

It's important to note that Sinon provides a unified API, so you can create a spy, a stub, or a mock using the same `sinon` methods, such as `sinon.spy()`, `sinon.stub()`, or `sinon.mock()`. The specific behavior and usage depend on how you configure them.

I hope this clarifies the differences between spies, stubs, and mocks in Sinon! Let me know if you have any further questions.


*/

// describe("My Test suite", () => {
//   before(() => {
//     // Code to run once before all tests in the describe block
//   });

//   beforeEach(() => {
//     // Code to run before each test case in the describe block
//   });

//   afterEach(() => {
//     // Code to run after each test case in the describe block
//   });

//   after(() => {
//     // Code to run once after all tests in the describe block
//   });

//   it("should do something", () => {
//     // Test case code
//   });
// });

// it("should do something", () => {
//   const actual = add(5, 2);
//   const expected = 7;

//   expect(actual).to.be.equal(expected);

//   assert.isTrue(actual);

//   actual.should.equal(expected);
// });

// // Chai’s different assertion styles

//             class Calculator {
//             static add(a, b) {
//             return a + b;
//             }
//             }

//             // Create a stub for the  method add and override it to return 10
//             const addStub = sinon.stub(Calculator, 'add');
//             addStub.returns(10);

//             // Use the stub
//             const result = Calculator.add(3, 5);  // Output: 10

//             // Restore the stub
//             addStub.restore();

//             // Create a mock for the static method
//             const addMock = sinon.mock(Calculator);
//             addMock.expects('add').once().withExactArgs(2, 3).returns(5);

//             // Use the mock
//             const result2 = Calculator.add(2, 3);
//             console.log(result2); // Output: 5

//             // Verify the mock
//             addMock.verify();
