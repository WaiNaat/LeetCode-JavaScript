/**
개수세고
정렬하고
카드 나누기
    작은 숫자부터 출발

 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  const cardCounts = {};
  hand.forEach((card) => {
    if (!cardCounts[card]) {
      cardCounts[card] = 0;
    }
    cardCounts[card] += 1;
  });

  const cardValues = Object.keys(cardCounts)
    .map(Number)
    .sort((a, b) => a - b);

  for (let i = 0; i < cardValues.length; i += 1) {
    const card = cardValues[i];

    while (cardCounts[card] > 0) {
      for (let next = card; next < card + groupSize; next += 1) {
        if (!cardCounts[next] || cardCounts[next] <= 0) {
          return false;
        }
        cardCounts[next] -= 1;
      }
    }
  }

  return true;
};
