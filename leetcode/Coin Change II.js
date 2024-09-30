/**
opt(i, 돈):= i번째 동전까지 써서 돈을 만들 수 있는 경우의 수
opt(i, 돈):= sum(
    opt(i-1, 돈 - k * coins[i]), k는 음이 아닌 정수
)

 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const opt = Array.from({ length: amount + 1 }, () => 0);
  opt[0] = 1;

  for (let i = 0; i < coins.length; i += 1) {
    for (let money = amount; money > 0; money -= 1) {
      for (let prev = money - coins[i]; prev >= 0; prev -= coins[i]) {
        opt[money] += opt[prev];
      }
    }
  }

  return opt[amount];
};
