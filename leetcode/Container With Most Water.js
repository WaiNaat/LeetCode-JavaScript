// Wrong Answer

/**
 * @param {number[]} height
 * @return {number}

 투포인터
 제일 높은애 둘부터 시작, 양끝으로 벌어지는 모양새
 1. 제일 높은애들부터 시작했기 때문에 좁아지면 가로세로 둘다 좁아지는거라 무조건 손해
 2. 벌어질땐 둘중에 더 높은애부터 먼저 해서 높이손해 최소화
 */
var maxArea = function (height) {
  const max = { index: null, value: -1 };
  const secondMax = { index: null, value: -1 };
  height.forEach((value, index) => {
    if (value > max.value) {
      secondMax.value = max.value;
      secondMax.index = max.index;
      max.value = value;
      max.index = index;
    } else if (value > secondMax.value) {
      secondMax.value = value;
      secondMax.index = index;
    }
  });

  let left = Math.min(max.index, secondMax.index);
  let right = Math.max(max.index, secondMax.index);
  let maxWater = (right - left) * Math.min(height[left], height[right]);

  while (left >= 0 || right < height.length) {
    maxWater = Math.max(maxWater, (right - left) * Math.min(height[left], height[right]));

    const nextLeft = left > 0 ? height[left - 1] : -Infinity;
    const nextRight = right < height.length - 1 ? height[right + 1] : -Infinity;

    if (left > 0 && nextLeft >= nextRight) {
      left -= 1;
    } else if (right < height.length - 1) {
      right += 1;
    } else {
      break;
    }
  }

  return maxWater;
};
