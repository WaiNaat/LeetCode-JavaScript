// Wrong Answer

// 아 이게 틀린 이유는 중간에 멈춰버린다고 생각해서였구나;

/**
 * @param {number[]} height
 * @return {number}

 양쪽에서 좁아지는 투포인터를 생각해보면
 한칸 좁아질 때 적어도 그 전보다 높이가 1이라도 더 높아야 면적손해를 안 봄
 양쪽 다 높아진다면 더 작은게 먼저 높아지는게 유리함
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  while (right - left > 1) {
    const isLeftGettingHigher = height[left] <= height[left + 1];
    const isRightGettingHigher = height[right] <= height[right - 1];

    if (isLeftGettingHigher && isRightGettingHigher) {
      const isLeftSmaller = height[left] <= height[right];
      if (isLeftSmaller) {
        left += 1;
      } else {
        right -= 1;
      }
    } else if (isLeftGettingHigher) {
      left += 1;
    } else if (isRightGettingHigher) {
      right -= 1;
    } else {
      break;
    }
  }

  const area = (right - left) * Math.min(height[left], height[right]);

  return area;
};
