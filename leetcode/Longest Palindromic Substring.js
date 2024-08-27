/**
이게 1차원 dp라고?

opt(i) := i번 char를 중심으로 하는 palin max length
근데 이러면 dp가 아니라 투포인터인데
    그럼 투포인터로 해

 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const getMaxPalindromeInfo = (leftStart, rightStart) => {
    let left = leftStart;
    let right = rightStart;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1;
      right += 1;
    }
    left += 1;
    right -= 1;

    return { left, right, length: right - left + 1 };
  };

  const maxPalindrome = Array.from({ length: s.length })
    .map((_, index) => [getMaxPalindromeInfo(index, index), getMaxPalindromeInfo(index, index + 1)])
    .map(([a, b]) => (a.length > b.length ? a : b))
    .toSorted((a, b) => a.length - b.length)
    .at(-1);

  return s.slice(maxPalindrome.left, maxPalindrome.right + 1);
};
