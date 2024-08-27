/**
opt(i) := i번째 계단에 도착하는 데 드는 최소비용
opt(i) = min(
    opt(i-1)+cost(i-1),
    opt(i-2)+cost(i-2)
)

출발지는 0 또는 1
    opt(0)=0, opt(1)=0
계단 꼭대기 한 칸 위가 목적지

 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const opt = [0, 0];
  for (let i = 2; i <= cost.length; i += 1) {
    opt.push(Math.min(opt[i - 2] + cost[i - 2], opt[i - 1] + cost[i - 1]));
  }
  return opt.at(-1);
};
