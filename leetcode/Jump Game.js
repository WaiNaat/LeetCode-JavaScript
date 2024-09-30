/**
0일때만 고려하면 됨
출발지부터 갈 수 있는 최대위치 계산

 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let last = 0;
  for (let i = 0; i <= last && last < nums.length - 1; i += 1) {
    last = Math.max(last, i + nums[i]);
  }
  return last >= nums.length - 1;
};
