/**
 * @param {number[]} nums
 * @return {number[][]}

각 숫자가 몇번 등장했는지 센다.
등장한 숫자중에 두개를 고른다.
0이 되기 위한 마지막 조각이 있는지 확인한다.

중복 방지?
오름차순을 만족해야만 통과하게끔
 */
var threeSum = function (nums) {
  const counts = {};
  const numbers = [];
  nums.forEach((value) => {
    if (!counts[value]) {
      counts[value] = 0;
      numbers.push(value);
    }
    counts[value] += 1;
  });

  const sol = [];
  console.log({ numbers, counts });
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers.length; j += 1) {
      const one = numbers[i];
      const another = numbers[j];
      const needed = -(numbers[i] + numbers[j]);

      if (one > another || another > needed) continue;

      counts[one] -= 1;
      counts[another] -= 1;

      if (counts[another] < 0) {
        counts[one] += 1;
        counts[another] += 1;
        continue;
      }

      if (counts[needed] && counts[needed] > 0) {
        sol.push([one, another, needed]);
      }
      counts[one] += 1;
      counts[another] += 1;
    }
  }

  return sol;
};
