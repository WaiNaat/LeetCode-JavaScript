/**
 * @param {number[]} prices
 * @return {number}

 거꾸로 순회하면서 각 숫자마다 본인 이후의 값들 중 최댓값을 알면 됨
 */
var maxProfit = function (prices) {
  let sol = 0;
  let currentMax = 0;
  for (let i = prices.length - 1; i >= 0; i -= 1) {
    sol = Math.max(currentMax - prices[i], sol);
    currentMax = Math.max(currentMax, prices[i]);
  }
  return sol;
};
