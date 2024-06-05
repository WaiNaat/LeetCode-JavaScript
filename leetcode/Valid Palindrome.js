/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const target = Array.from(s.toLowerCase()).filter((char) => /[a-z0-9]/.test(char));

  for (let left = 0, right = target.length - 1; left < right; left += 1, right -= 1) {
    if (target[left] !== target[right]) {
      return false;
    }
  }

  return true;
};
