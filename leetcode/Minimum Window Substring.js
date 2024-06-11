/**
시간제한: O(m+n)

슬라이딩 윈도우

1. 첫 번째로 만족할 때까지 오른쪽 늘림
2. 불만족 직전까지 왼쪽 줄임
3. 기억
4. 만족할 때까지 이동
5. 2번부터 반복

대소문자는 구분하는거겠지?

 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) {
    return '';
  }

  const isUpperCase = (char) => char.toUpperCase() === char;
  const a_CODE = 'a'.charCodeAt(0);
  const A_CODE = 'A'.charCodeAt(0);
  const window = new Array(52).fill(0);
  const target = new Array(52).fill(0);
  const isIncluding = () => {
    for (let i = 0; i < window.length; i += 1) {
      if (window[i] < target[i]) {
        return false;
      }
    }
    return true;
  };
  const findIndex = (char) => {
    if (isUpperCase(char)) {
      return 26 + char.charCodeAt(0) - A_CODE;
    }
    return char.charCodeAt(0) - a_CODE;
  };

  for (let i = 0; i < t.length; i += 1) {
    target[findIndex(t[i])] += 1;
    window[findIndex(s[i])] += 1;
  }

  let sol = '';
  let left = 0;
  let right = t.length - 1;

  while (right < s.length - 1 && !isIncluding()) {
    right += 1;
    window[findIndex(s[right])] += 1;
  }

  while (right < s.length) {
    while (isIncluding()) {
      window[findIndex(s[left])] -= 1;
      left += 1;

      if (!isIncluding()) {
        left -= 1;
        window[findIndex(s[left])] += 1;

        sol = s.slice(left, right + 1);
        break;
      }
    }

    if (right === s.length - 1) {
      break;
    }

    right += 1;
    window[findIndex(s[right])] += 1;
    window[findIndex(s[left])] -= 1;
    left += 1;
  }

  return sol;
};
