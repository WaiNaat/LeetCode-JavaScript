/**
선택지 1. 이중for문: O(N^2)
선택지 2. value-index reverse map 만들기 O(N) + 한번 순회 O(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const valueToIndex = {};
  nums.forEach((value, index) => {
    // 같은 숫자가 여러 번 나오면 뒤쪽 인덱스로 덮어씌워짐
    valueToIndex[value] = index;
  });

  for (let i = 0; i < nums.length; i += 1) {
    const needed = target - nums[i];
    // 같은 숫자가 필요한데 그 숫자가 두 번 나왔다면 덮어씌워졌으므로 인덱스가 다를 것
    const j = valueToIndex[needed];
    const isValid = j !== undefined && i !== j;
    if (isValid) {
      return [i, j];
    }
  }

  return [-1, -1];
};
