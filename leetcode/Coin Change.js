/**
coin(i) := i번 코인의 가치
opt(i) := i원을 만드는데 필요한 최소 동전 개수
opt(i) = min(opt(i-coin(k))) + 1(전자의 값이 존재한다면)

 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const opt = [0];
  for (let i = 1; i <= amount; i += 1) {
    let min = Infinity;
    for (let j = 0; j < coins.length; j += 1) {
      const candidate = (opt[i - coins[j]] ?? Infinity) + 1;
      if (candidate < min) {
        min = candidate;
      }
    }
    opt.push(min);
  }
  return opt[amount] === Infinity ? -1 : opt[amount];
};
