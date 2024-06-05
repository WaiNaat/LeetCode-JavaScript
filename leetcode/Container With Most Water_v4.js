/**
 * @param {number[]} height
 * @return {number}

 아니 힌트에서 정답을주는데?
 */
var maxArea = function (height) {
  const getWater = (leftIdx, rightIdx) =>
    (rightIdx - leftIdx) * Math.min(height[leftIdx], height[rightIdx]);
  let left = 0;
  let right = height.length - 1;
  let maxWater = getWater(left, right);

  while (left < right) {
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
    maxWater = Math.max(maxWater, getWater(left, right));
  }

  return maxWater;
};
