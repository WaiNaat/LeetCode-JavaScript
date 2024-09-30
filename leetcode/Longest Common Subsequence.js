/**
opt(i, j):= 각각 i,j번까지 봤을때 lcs 길이
opt(i, j) = max(
    opt(i-1, j-1) + 1 (두개가 같을때)
    opt(i-1, j) (두개가 다를때)
    opt(i, j-1) (두개가 다를때)
)

 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const opt = Array.from({ length: text1.length }, () =>
    Array.from({ length: text2.length }, () => 0),
  );

  for (let i = 0; i < text1.length; i += 1) {
    for (let j = 0; j < text2.length; j += 1) {
      if (text1[i] === text2[j]) {
        opt[i][j] = (opt[i - 1]?.[j - 1] ?? 0) + 1;
      } else {
        opt[i][j] = Math.max(opt[i - 1]?.[j] ?? 0, opt[i][j - 1] ?? 0);
      }
    }
  }

  return opt.at(-1).at(-1);
};
