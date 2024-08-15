/**
방법 1. flat하고 한번에 이분탐색
방법 2. 열 기준 이분탐색 후 행 기준 이분탐색

작 왼쪽 올리고
크 오른쪽 내리고

 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (matrix[mid][0] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const targetRow = left - 1;

  if (targetRow < 0) {
    return false;
  }

  left = 0;
  right = matrix[0].length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (matrix[targetRow][mid] === target) {
      return true;
    } else if (matrix[targetRow][mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return false;
};
