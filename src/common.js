export class Calculator {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

export function addAndMakeItDouble(a, b) {
  const result = Calculator.add(a, b);
  return result * 2;
}

export function calculateAndMakeItDouble(a, b, calculate) {
  const result = calculate(a, b);
  return result * 2;
}
