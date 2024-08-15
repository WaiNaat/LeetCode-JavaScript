/**
숫자들 스택에 쌓다가 연산자 나오면 스택에서 숫자 두개 빼서 연산하면됨
 * @param {string[]} tokens
 * @return {number}
 */

const operators = new Set(['+', '*', '-', '/']);
const isOperator = (maybeOperator) => operators.has(maybeOperator);
const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/': {
      const result = a / b;
      return result < 0 ? Math.ceil(result) : Math.floor(result);
    }
    default:
      return NaN;
  }
};

var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i += 1) {
    if (isOperator(tokens[i])) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(calculate(a, b, tokens[i]));
    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack.pop();
};
