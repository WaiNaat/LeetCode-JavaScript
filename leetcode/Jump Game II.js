/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0;
  let i = 0;
  let max = 0;
  let nextMax = 0;

  while (i < nums.length && max < nums.length - 1) {
    nextMax = Math.max(nextMax, i + nums[i]);

    if (i === max) {
      max = nextMax;
      count += 1;
    }

    i += 1;
  }

  return count;
};
