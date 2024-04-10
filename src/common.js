export class Calculator {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n.toString();
  }
}

export function calculateAndMakeItDouble(a, b, calculate) {
  const result = calculate(a, b);
  return result * 2;
}

export function addAndMakeItDouble(a, b) {
  const result = Calculator.add(a, b);
  return result * 2;
}
