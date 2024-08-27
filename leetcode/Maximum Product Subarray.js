/**
0과 음수의 위치를 파악하면 됨

  -1  2 -2 -2 0 2 -2 -4
  -1 -2  4 -8 0 0  0  0

  -2 -2 -4
  -2  4 -16

  1 2 -4  8
  1 2 -8 -64

  -1 -2 -3 0
  -1 2 -6 0

  0 -3 1 1
  = -3 -3 -3

0 기준으로 배열을 나눔
나눠진 각 영역마다
누적곱을 구한다음에
    가장 큰 음수 / 가장 작은 음수
    가장 큰 양수
이거 두개를 비교하면 됨

 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let total = 1;
  let maxNegative = -Infinity;
  let maxNegativeIdx = -1;
  let minNegative = 0;
  let minNegativeIdx = -1;
  let maxPositive = -Infinity;
  let sol = -Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      sol = Math.max(
        sol,
        minNegative < 0
          ? maxNegativeIdx !== minNegativeIdx
            ? minNegative / maxNegative
            : maxNegative
          : -Infinity,
        maxPositive,
        0,
      );

      total = 1;
      maxNegative = -Infinity;
      minNegative = 0;
      maxPositive = -Infinity;

      continue;
    }

    total *= nums[i];
    if (total < 0) {
      if (total > maxNegative) {
        maxNegative = total;
        maxNegativeIdx = i;
      }
      if (total <= minNegative) {
        minNegative = total;
        minNegativeIdx = i;
      }
    } else {
      maxPositive = Math.max(maxPositive, total);
    }
  }
  sol = Math.max(
    sol,
    minNegative < 0
      ? maxNegativeIdx !== minNegativeIdx
        ? minNegative / maxNegative
        : maxNegative
      : -Infinity,
    maxPositive,
  );

  return sol;
};
