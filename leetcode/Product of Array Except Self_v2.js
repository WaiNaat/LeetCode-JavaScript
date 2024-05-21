/**
본인 앞쪽 숫자들을 전부 곱한 값
본인 뒤쪽 숫자들을 전부 곱한 값

이 두 개의 곱
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const sol = Array.from({ length: nums.length }).fill(1);

  let before = 1;
  for (let i = 0; i < nums.length; i += 1) {
    sol[i] = before;
    before *= nums[i];
  }

  let after = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    sol[i] *= after;
    after *= nums[i];
  }

  return sol;
};
