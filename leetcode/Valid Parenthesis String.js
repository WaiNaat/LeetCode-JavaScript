/**
와일드카드 성능이 너무 좋은데
)()*

괄호를 싹 무시하고 올바른 괄호들 처리
남는애들 대상으로 와카+닫괄, 여괄+와카 조합 처리
와카만 남으면 성공

 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i += 1) {
    switch (s[i]) {
      case '(': {
        stack.push('(');
        break;
      }
      case ')': {
        if (stack.at(-1) === '(') {
          stack.pop();
        } else if (stack.length > 1 && stack.at(-2) === '(') {
          const wildcard = stack.pop();
          stack.pop();
          if (typeof stack.at(-1) === 'number') {
            stack.push(stack.pop() + wildcard);
          } else {
            stack.push(wildcard);
          }
        } else {
          stack.push(')');
        }
        break;
      }
      case '*':
        if (typeof stack.at(-1) === 'number') {
          stack.push(stack.pop() + 1);
        } else {
          stack.push(1);
        }
        break;
      default:
        break;
    }
  }

  const brokenString = stack
    .map((val) => (typeof val === 'number' ? new Array(val).fill('*') : val))
    .flat();

  stack = [];
  for (let i = 0; i < brokenString.length; i += 1) {
    switch (brokenString[i]) {
      case '(':
        stack.push('(');
        break;
      case ')': {
        if (stack.at(-1) === '(' || stack.at(-1) === '*') {
          stack.pop();
        } else {
          stack.push(')');
          return false;
        }
        break;
      }
      case '*':
        if (stack.at(-1) === '(') {
          stack.pop();
        } else {
          stack.push('*');
        }
        break;
      default:
        break;
    }
  }

  return !stack.includes('(');
};
