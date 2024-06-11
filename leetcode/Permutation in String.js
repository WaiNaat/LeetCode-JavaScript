/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}

 permutation은 순열아님?
 등장횟수가 같은 substring이 있는지 묻는거라면 그냥 고정길이 슬라이딩윈도우 시원하게 하면됨
 */
var checkInclusion = function (s1, s2) {
  const offset = 'a'.charCodeAt(0);
  const targetCounts = Array.from({ length: 26 }).fill(0);

  Array.from(s1).forEach((char) => {
    targetCounts[char.charCodeAt(0) - offset] += 1;
  });

  const target = targetCounts.join(' ');
  const counts = Array.from({ length: 26 }).fill(0);

  for (let i = 0; i < s1.length; i += 1) {
    counts[s2.charCodeAt(i) - offset] += 1;
  }

  let left = 0;
  let right = s1.length - 1;
  while (right < s2.length) {
    if (counts.join(' ') === target) return true;
    counts[s2.charCodeAt(left) - offset] -= 1;
    left += 1;
    right += 1;
    counts[s2.charCodeAt(right) - offset] += 1;
  }

  return false;
};
