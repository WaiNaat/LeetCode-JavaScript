/**
백트래킹보단 이진법이 편할거같은데

 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const sol = [];
  for (let value = 0; value < 2 ** nums.length; value += 1) {
    const isInSubset = Array.from(value.toString(2).padStart(nums.length, '0')).map(
      (char) => char === '1',
    );

    const subset = [];
    for (let i = 0; i < nums.length; i += 1) {
      if (isInSubset[i]) {
        subset.push(nums[i]);
      }
    }
    sol.push(subset);
  }
  return sol;
};
