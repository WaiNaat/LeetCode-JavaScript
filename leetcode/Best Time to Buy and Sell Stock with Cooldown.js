/**
주식을 하나씩만 들고있을수있음 -> 배열 두개로 처리

opt(day, hasStock) := day일에 주식 보유 여부에 따른 최대 이득
opt(i, false) = max(
    opt(i-1, true) + price(i) // 판매
    opt(i-1, false) // 계속 미구매
)
opt(i, true) = max(
    opt(i-2, false) - price(i) // 구매 (쿨다운 하루 포함)
    opt(i-1, true) // 계속 들고있기
)

 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const yesStock = [-Infinity, -Infinity];
  const noStock = [0, 0];

  for (let day = 0; day < prices.length; day += 1) {
    const nextYesStockValue = Math.max(noStock.at(-2) - prices[day], yesStock.at(-1));
    const nextNoStockValue = Math.max(yesStock.at(-1) + prices[day], noStock.at(-1));
    yesStock.push(nextYesStockValue);
    noStock.push(nextNoStockValue);
  }

  return Math.max(yesStock.at(-1), noStock.at(-1));
};
