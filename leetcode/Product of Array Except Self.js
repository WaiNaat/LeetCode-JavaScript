/**
오 이거좀 신선한데
근데 나누기안쓴건 어떻게알지?

0이 하나 들어있으면
    0의 인덱스 빼고 나머지는 0
0이 두개 이상 들어있으면
    전부 0
0이 하나도 없으면
    이걸 O(N)에 하는 문제
    나눗셈없이 된다고?

1. 각 숫자의 등장횟수를 센다 (숫자의 범위가 작으므로 충분히 가능) O(N)
2. 본인 카운트를 빼고 센걸 곱한다 O(N): 곱셉과정 자체는 인덱스 하나당 61번만 계산함

 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const appearanceCounts = Array.from({ length: 61 }).fill(0);
  nums.forEach((value) => {
    appearanceCounts[value + 30] += 1;
  });

  const sol = nums.map((target) => {
    let result = 1;
    for (let value = -30; value <= 30; value += 1) {
      result *= value ** (appearanceCounts[value + 30] + (target === value ? -1 : 0));
    }
    return result;
  });

  return sol;
};
