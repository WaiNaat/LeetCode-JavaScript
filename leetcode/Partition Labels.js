/**
최대한 많이 쪼개기
뒤쪽에 지금 그룹에 들어있는게 남아있는지 알아내면 끝나는 문제

일단 개수를 세
앞에서부터 하나씩 봐
    지금 그룹에 넣기
    개수 하나 빼기
    지금 그룹에 들어있는 알파벳 종류 + 남아있는 알파벳 종류 = 총 알파벳 종류
    이걸 만족하면 해당 그룹은 분리 가능

 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const charCount = {};
  const charLeft = new Set();
  for (let i = 0; i < s.length; i += 1) {
    if (!charCount[s[i]]) {
      charCount[s[i]] = 0;
      charLeft.add(s[i]);
    }
    charCount[s[i]] += 1;
  }

  const sol = [];
  let charKindCount = charLeft.size;
  let cur = new Set();
  let curLength = 0;

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    cur.add(char);
    curLength += 1;
    charCount[char] -= 1;

    if (charCount[char] === 0) {
      charLeft.delete(char);
    }
    if (charLeft.size + cur.size === charKindCount) {
      sol.push(curLength);
      charKindCount -= cur.size;
      cur.clear();
      curLength = 0;
    }
  }
  return sol;
};
