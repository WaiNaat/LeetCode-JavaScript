/**
빈칸이 (문자열 길이 - 1)개만큼 있는데
여기중에 어디에 구분선을 넣을지 정하는 문제

2^15가지 경우의 수
구분선을 켜고 끄는 두 가지 경우만 존재
>> 이진법 사용가능

 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (word) => {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};

var partition = function (s) {
  const sol = [];
  const end = 2 ** (s.length - 1);

  for (let value = 0; value < end; value += 1) {
    const partitionPositions = Array.from(value.toString(2).padStart(s.length, '0'))
      .map((char, index) => [char === '1', index])
      .filter(([isPartition]) => isPartition)
      .map(([, index]) => index);

    partitionPositions.push(s.length);

    const substrings = [];
    for (let i = 0; i < partitionPositions.length; i += 1) {
      const left = partitionPositions[i - 1] ?? 0;
      const right = partitionPositions[i];
      substrings.push(s.slice(left, right));
    }

    const isAllPalindrome = substrings.every(isPalindrome);
    if (isAllPalindrome) {
      sol.push(substrings);
    }
  }

  return sol;
};
