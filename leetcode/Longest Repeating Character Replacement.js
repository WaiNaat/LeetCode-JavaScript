/**
 * @param {string} s
 * @param {number} k
 * @return {number}

 슬라이딩 윈도우
 창문 내 최빈값 + 잡것들인데 잡것들의 길이가 k 이하여야 함
    - 창문 내 각 알파벳의 등장 횟수들
    - 창문 내 알파벳 중 가장 많이 등장하는 알파벳
 변환 가능 -> 창문 늘림
 변환 불가능 -> 창문 이동
 */
var characterReplacement = function (s, k) {
  const offset = 'A'.charCodeAt(0);
  const counts = Array.from({ length: 26 }).fill(0);
  let left = 0;
  let right = -1;
  let mostIndex = 0;
  let sol = 0;

  while (right < s.length) {
    const countSumExceptMost = right - left + 1 - counts[mostIndex];
    const isPossible = countSumExceptMost <= k;
    if (isPossible) {
      sol = right - left + 1;
    } else {
      counts[s.charCodeAt(left) - offset] -= 1;
      left += 1;
    }
    right += 1;
    counts[s.charCodeAt(right) - offset] += 1;

    const mostValue = Math.max(...counts);
    mostIndex = counts.findIndex((value) => value === mostValue);
  }

  return sol;
};
