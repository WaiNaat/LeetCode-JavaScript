/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const letters = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const dfs = (temp, sol) => {
    if (temp.length === digits.length) {
      if (temp.length) {
        sol.push(temp.join(''));
      }
      return sol;
    }

    const next = letters[digits[temp.length]];
    for (let i = 0; i < next.length; i += 1) {
      temp.push(next[i]);
      dfs(temp, sol);
      temp.pop();
    }

    return sol;
  };

  return dfs([], []);
};
