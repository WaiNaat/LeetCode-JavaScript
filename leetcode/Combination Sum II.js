/**
우선 정렬
중복 숫자는 어떻게 할 것인가
    1. 내가 늘 먹던 맛으로 count를 이용한 처리
    2. neetcode 맛으로 해당 숫자와 중복 숫자를 포함하는 쪽이랑 아예 포함하지 않는 쪽으로 나눠서 진행

 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const sol = [];
  const traverse = (subset, sum, startIndex) => {
    if (sum === target) {
      sol.push([...subset]);
      return;
    }
    if (sum > target) {
      return;
    }

    if (startIndex >= candidates.length) {
      return;
    }

    // startIndex번과 중복인 숫자들을 포함하는 경우
    subset.push(candidates[startIndex]);
    traverse(subset, sum + candidates[startIndex], startIndex + 1);
    subset.pop();

    // 아예 포함하지 않는 경우
    let nextValueIndex = startIndex;
    while (candidates[nextValueIndex] === candidates[startIndex]) {
      nextValueIndex += 1;
    }
    traverse(subset, sum, nextValueIndex);
  };

  traverse([], 0, 0);

  return sol;
};
