/**
그냥 정렬문제 아님?
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.toSorted((a, b) => a - b).at(-k);
};
