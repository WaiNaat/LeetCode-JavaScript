// 시간 초과

/**
 * @param {number[]} nums
 * @return {number[][]}

각 숫자가 몇번 등장했는지 센다.
등장한 숫자중에 두개를 고른다.
0이 되기 위한 마지막 조각이 있는지 확인한다.

중복 숫자로 인한 중복 결과가 나올 수 있으므로 set으로 관리
 */
var threeSum = function (nums) {
  const counts = {};
  nums.forEach((value) => {
    if (!counts[value]) counts[value] = 0;
    counts[value] += 1;
  });

  const sol = new Set();
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const one = nums[i];
      const another = nums[j];
      const needed = -nums[i] - nums[j];
      const canUseOneTwice = one !== needed || counts[one] >= 2;
      const canUseAnotherTwice = another !== needed || counts[another] >= 2;
      const canUseOneThreeTimes = one !== needed || another !== needed || counts[one] >= 3;
      const hasNeeded =
        counts[needed] && canUseOneTwice && canUseAnotherTwice && canUseOneThreeTimes;
      if (!hasNeeded) continue;
      const triplet = [one, another, needed].sort((a, b) => a - b);
      sol.add(triplet.join(' '));
    }
  }

  return Array.from(sol.values()).map((value) => value.split(' ').map(Number));
};
