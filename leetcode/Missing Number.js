/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  return nums.reduce((sum, cur) => (sum -= cur), (nums.length * (nums.length + 1)) / 2);
};
