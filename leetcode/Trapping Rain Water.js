/**
 * @param {number[]} height
 * @return {number}

모든 숫자는 '본인의 높이 이상이 다시 나올 때' 전까지 물을 채울 수 있음
단, 본인의 높이 이상이 나와야만 그 물이 유효함
근데 정작 높은놈은 본인보다 높은게 있을지 없을지 모름
-> 낮은놈이 먼저 움직여야 함

양끝에서 출발하는 투포인터
둘중에 더 낮은값이 '베이스'
낮은놈이 안쪽으로 이동
베이스 이하면 물채우기 (베이스까지)
베이스보다 높은게 나오면 베이스 다시 계산
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let base = Math.min(height[left], height[right]);
  let water = 0;

  while (left < right - 1) {
    let moved;
    let other;
    if (height[left] <= height[right]) {
      left += 1;
      moved = height[left];
    } else {
      right -= 1;
      moved = height[right];
    }

    if (moved <= base) {
      water += base - moved;
    } else {
      base = Math.min(height[left], height[right]);
    }
  }

  return water;
};
