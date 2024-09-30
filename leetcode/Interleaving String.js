/**
opt(i,j):= i번, j번 char까지 봤을 때 올바른지
opt(i,j) = some(
    opt(i-1,j) and s3[i+j]==s1[i]
    opt(i,j-1) and s3[i+j]==s2[j]
)

각 문자열에서 아무것도 선택 안한 opt(-1,-1) 값이 필요함
-> 맨 마지막에 padding 넣고 거꾸로 계산하는게 나을듯

 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  // 이 조건은 왜 안줌
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  const opt = Array.from({ length: s1.length + 1 }, () =>
    Array.from({ length: s2.length + 1 }, () => false),
  );

  for (let i = 1; i <= s1.length && s3.at(-i) === s1.at(-i); i += 1) {
    opt[s1.length - i][s2.length] = true;
  }
  for (let j = 1; j <= s2.length && s3.at(-j) === s2.at(-j); j += 1) {
    opt[s1.length][s2.length - j] = true;
  }
  opt[s1.length][s2.length] = true;

  for (let i = s1.length - 1; i >= 0; i -= 1) {
    for (let j = s2.length - 1; j >= 0; j -= 1) {
      opt[i][j] = (opt[i + 1][j] && s3[i + j] === s1[i]) || (opt[i][j + 1] && s3[i + j] === s2[j]);
    }
  }

  return opt[0][0];
};
