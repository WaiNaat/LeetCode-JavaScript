/**
어떤 칸에 도착하려면 결국 한칸 전에서 오거나 두칸 전에서 와야함
opt(i) := i번째 계단까지 오는 경우의 수
opt(i) = opt(i-1) + opt(i-2)

 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const opt = [1, 1];
  for (let i = 2; i <= n; i += 1) {
    opt.push(opt.at(-1) + opt.at(-2));
  }
  return opt[n];
};
