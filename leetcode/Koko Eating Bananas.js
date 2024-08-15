/**
이분탐색
움직이는 값은 k
h시간 이하로 먹을 수 있다면 k를 줄임
h시간 초과하면 k를 늘림

 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const canEat = (k) => {
    const time = piles.reduce((prevTime, bananaCount) => {
      return prevTime + Math.ceil(bananaCount / k);
    }, 0);
    return time <= h;
  };

  let left = 0;
  let right = Math.max(...piles) + 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canEat(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
