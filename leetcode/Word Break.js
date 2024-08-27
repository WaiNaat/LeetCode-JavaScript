/**
매번 모든 wordDict를 순회하면서 마지막 몇 자리가 그 단어인지 보는건 좀 비싼데
주어진 단어들을 글자수별로 분류할까?

word(i) := i긃자 단어들의 집합
has(i, j) := word.slice(i, j)가 주어진 단어사전에 있는지
opt(i) := i번 글자까지 쪼개지기가 가능한지
opt(i) = some(opt(i-k) and has(i-k+1, i+1))

 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordLengths = [];
  const words = {};
  wordDict.forEach((word) => {
    if (!words[word.length]) {
      wordLengths.push(word.length);
      words[word.length] = new Set();
    }
    words[word.length].add(word);
  });

  const hasWord = (end, length) => {
    if (end + 1 - length < 0) return false;
    return words[length].has(s.slice(end + 1 - length, end + 1));
  };

  const opt = [];
  for (let i = 0; i < s.length; i += 1) {
    let result = false;
    for (let j = 0; j < wordLengths.length && !result; j += 1) {
      const targetLength = wordLengths[j];
      result = (opt[i - targetLength] ?? true) && hasWord(i, targetLength);
    }
    opt.push(result);
  }

  return opt.at(-1);
};
