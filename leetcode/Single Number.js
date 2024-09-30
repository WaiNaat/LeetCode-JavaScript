/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let sol = 0;
  nums.forEach((num) => {
    sol ^= num;
  });
  return sol;
};
