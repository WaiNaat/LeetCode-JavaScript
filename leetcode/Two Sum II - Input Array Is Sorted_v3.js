/**
이분탐색도 안된다
O(N)이 있는게 틀림없다

투포인터 양끝에서 출발
합이 모자라면 왼쪽 전진
합이 넘치면 오른쪽 후진

 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [left + 1, right + 1];
};

// 근데 오히려 이게 v2보다 느린데
