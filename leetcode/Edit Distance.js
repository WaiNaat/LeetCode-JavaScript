/**
opt(i, j) := word1(i), word2(j) 까지 봤을때 변화에 필요한 횟수

opt(i, j) = 
    i,j번 글자가 똑같으면 굳이 바꿀필요없음
        opt(i-1, j-1)
    다르면
        min(opt(i-1,j), opt(i,j-1), opt(i-1,j-1)) + 1

빈 문자열 고려를 위한 padding 필요

 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const opt = Array.from({ length: word1.length + 1 }).map(() =>
    Array.from({ length: word2.length + 1 }),
  );

  // 한쪽이 빈문자열일떄 처리
  for (let i = 0; i < word1.length + 1; i += 1) {
    opt[i][0] = i;
  }
  for (let j = 0; j < word2.length + 1; j += 1) {
    opt[0][j] = j;
  }

  for (let i = 1; i < word1.length + 1; i += 1) {
    for (let j = 1; j < word2.length + 1; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        opt[i][j] = opt[i - 1][j - 1];
      } else {
        opt[i][j] = 1 + Math.min(opt[i - 1][j], opt[i][j - 1], opt[i - 1][j - 1]);
      }
    }
  }

  return opt.at(-1).at(-1);
};
