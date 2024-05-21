/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const counts = {};
  nums.forEach((value) => {
    if (counts[value] === undefined) {
      counts[value] = 0;
    }
    counts[value] += 1;
  });
  const result = Object.entries(counts)
    .sort((one, another) => another[1] - one[1])
    .slice(0, k)
    .map(([value]) => value);
  return result;
};
