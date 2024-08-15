/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    switch (s[i]) {
      case '(':
      case '{':
      case '[':
        stack.push(s[i]);
        break;
      case ')': {
        if (stack.at(-1) === '(') {
          stack.pop();
          break;
        } else {
          return false;
        }
      }
      case '}': {
        if (stack.at(-1) === '{') {
          stack.pop();
          break;
        } else {
          return false;
        }
      }
      case ']': {
        if (stack.at(-1) === '[') {
          stack.pop();
          break;
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
};
