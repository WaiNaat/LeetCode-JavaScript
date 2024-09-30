/**
앞에서부터 쭉 더해줌
본인 or 본인 포함 앞쪽 합 중에 큰걸 가져감

opt(i):= i번을 반드시 마지막으로 포함하는 maximum subarray sum
opt(i) = max(opt(i-1) + nums[i], nums[i])

 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sol = -Infinity;
  let sum = -Infinity;

  nums.forEach((val) => {
    sum = Math.max(sum + val, val);
    sol = Math.max(sol, sum);
  });

  return sol;
};
