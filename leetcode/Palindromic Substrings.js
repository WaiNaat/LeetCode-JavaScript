/**
오 중복가능
어떤 좌표가 주어졌을 때 이걸 세면 됨
    본인을 중심으로 하는 홀수 팰린드롬
    본인과 본인 다음걸 중심으로 하는 짝수 팰린드롬

 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const countPalindromes = (leftStart, rightStart) => {
    let left = leftStart;
    let right = rightStart;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1;
      right += 1;
    }
    left += 1;
    right -= 1;

    return Math.max(leftStart - left + 1, 0);
  };

  const sol = Array.from({ length: s.length })
    .map((_, index) => countPalindromes(index, index) + countPalindromes(index, index + 1))
    .reduce((prev, cur) => prev + cur, 0);

  return sol;
};
