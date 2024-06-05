// Wrong Answer

/**
 * @param {number[]} height
 * @return {number}

 [1, 200, 200, 1]
 이거의 존재때문에 결국 양끝에서 출발하더라도 도중에 탈출하는 게 아니라 끝까지 봐야 함

 [1, 1, 1, 1, 200, 200, 1]
 이거의 존재때문에 항상 중앙 수렴하도록 코드를 짜면 안 됨

 [1, 200, 1]
 이거의 존재때문에 본인 옆에꺼가 커진다고 무작정 달려들면 안 됨

 아무리 생각해 봐도 제일 큰거 두개 잡고 양끝으로 벌어지는게 좋아보이는데
 아까는 왜 안 됐을까
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
    } else if (value >= secondMax.value) {
      secondMax.value = value;
      secondMax.index = index;
    }
  });

  const getWater = (leftIdx, rightIdx) =>
    (rightIdx - leftIdx) * Math.min(height[leftIdx], height[rightIdx]);
  let left = Math.min(max.index, secondMax.index);
  let right = Math.max(max.index, secondMax.index);
  let maxWater = getWater(left, right);

  while (left >= 0 || right < height.length) {
    const canMoveLeft = left > 0;
    const canMoveRight = right < height.length - 1;
    const nextLeftWater = canMoveLeft ? getWater(left - 1, right) : -Infinity;
    const nextRightWater = canMoveRight ? getWater(left, right + 1) : -Infinity;

    if (canMoveLeft && nextLeftWater >= nextRightWater) {
      left -= 1;
      maxWater = Math.max(maxWater, nextLeftWater);
    } else if (canMoveRight && nextLeftWater <= nextRightWater) {
      right += 1;
      maxWater = Math.max(maxWater, nextRightWater);
    } else if (canMoveLeft) {
      left -= 1;
      maxWater = Math.max(maxWater, nextLeftWater);
    } else if (canMoveRight) {
      right += 1;
      maxWater = Math.max(maxWater, nextRightWater);
    } else {
      break;
    }
  }

  return maxWater;
};
