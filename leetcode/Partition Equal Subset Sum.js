/**
이게 dp라고?

각 값들에게는 선택권이 주어짐. 합류 또는 거절
배열 끝까지 갔을 때 '합류' 한 애들이 총합의 절반이 되면 됨
    >> 이건 그냥 2의 200승 완탐이잖아

=====

opt(i, sum) := i번 숫자까지 써서 합이 sum이 되는지 여부
opt(i+1, sum+nums(k)) = opt(i, sum)
opt(i+1, sum) = opt(i, sum)
이거 두개로 계속 불려가는 문제인듯?

후자는 이전거 계승이니까 건드릴 필요 없고
전자는 이전거에 nums(k) 더하는거니까 sum 내림차순으로 진행하면 opt 하나로 in-place 가능

opt(0, nums[0]) = true

 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const target = nums.reduce((prev, cur) => prev + cur, 0) / 2;

  if (target % 1 !== 0) {
    return false;
  }

  const opt = Array.from({ length: target + 1 }).fill(false);
  opt[0] = true;

  for (let i = 0; i < nums.length; i += 1) {
    for (let sum = target; sum >= 0; sum -= 1) {
      opt[sum] ||= opt[sum - nums[i]];
    }

    if (opt.at(-1)) {
      return true;
    }
  }

  return false;
};
