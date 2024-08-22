/**
숫자-개수 쌍을 기억하고 그걸 바탕으로 재귀

 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const sol = [];
  const values = Array.from(new Set(nums));
  const counts = {};

  nums.forEach((num) => {
    if (!counts[num]) {
      counts[num] = 0;
    }
    counts[num] += 1;
  });

  const traverse = (subset, startIndex) => {
    sol.push([...subset]);

    for (let i = startIndex; i < values.length; i += 1) {
      if (counts[values[i]] > 0) {
        counts[values[i]] -= 1;
        subset.push(values[i]);
        traverse(subset, i);
        subset.pop();
        counts[values[i]] += 1;
      }
    }
  };

  traverse([], 0);

  return sol;
};
