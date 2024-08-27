/**
이게 O(N)으로 되나? 안될거같은데

opt(i) := i번 숫자를 반드시 마지막으로 하는 lis 길이
opt(i) = max(opt(k)) + 1 where nums(k) < nums(i) and k < i

 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let sol = 1;
  const opt = [];
  for (let i = 0; i < nums.length; i += 1) {
    let prev = 0;
    for (let k = i - 1; k >= 0; k -= 1) {
      if (nums[k] < nums[i]) {
        prev = Math.max(prev, opt[k]);
      }
    }
    opt.push(prev + 1);
    sol = Math.max(sol, opt.at(-1));
  }
  return sol;
};
