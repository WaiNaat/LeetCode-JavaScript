/**
결과를 보아하니 O(N^2)보다 좋은 방법이 있는게 틀림없다
이분탐색 쓰면 O(NlogN)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i += 1) {
    let left = i + 1;
    let right = numbers.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (numbers[i] + numbers[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    if (numbers[left] + numbers[i] === target) {
      return [i + 1, left + 1];
    }
  }
};
