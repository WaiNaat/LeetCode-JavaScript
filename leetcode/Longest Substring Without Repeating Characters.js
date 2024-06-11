/**
 * @param {string} s
 * @return {number}

 슬라이딩 윈도우
 각 문자의 등장 여부를 판단하는 객체

 창문 길이 1부터 시작, 첫 중복 직전까지 길이 늘리면서 배열 채움
 중복 생기면 중복 없을때까지 창문 이동, 다시 중복 직전까지 길이 늘리면서 배열 채움
 */
var lengthOfLongestSubstring = function (s) {
  const used = {};
  let left = 0;
  let right = -1;
  let sol = 0;

  while (right < s.length) {
    const isValid = Object.values(used).every((value) => value <= 1);
    if (isValid) {
      sol = right - left + 1;
    } else {
      used[s[left]] -= 1;
      left += 1;
    }
    right += 1;
    if (used[s[right]] === undefined) {
      used[s[right]] = 0;
    }
    used[s[right]] += 1;
  }

  return sol;
};
