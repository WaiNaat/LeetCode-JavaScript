/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const getCombinations = (combination, sum, startIndex, sol) => {
    if (sum >= target) {
      if (sum === target) {
        sol.push([...combination]);
      }
      return sol;
    }

    for (let i = startIndex; i < candidates.length; i += 1) {
      combination.push(candidates[i]);
      getCombinations(combination, sum + candidates[i], i, sol);
      combination.pop();
    }

    return sol;
  };

  return getCombinations([], 0, 0, []);
};
