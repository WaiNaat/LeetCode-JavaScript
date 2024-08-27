/**
money(i) := i번째 집을 털고 얻는 돈
opt(i) := i번째 집까지 털었을 때 버는 최대 돈
opt(i) = max(
    opt(i-2) + money(i) // i번째 집을 털기
    opt(i-1) // i번쨰 집을 털지 않기.
)

 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const opt = [0, 0];

  for (let i = 0; i < nums.length; i += 1) {
    opt.push(Math.max(opt.at(-2) + nums[i], opt.at(-1)));
  }

  return opt.at(-1);
};
