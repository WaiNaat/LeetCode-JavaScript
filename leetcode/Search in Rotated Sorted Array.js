/**
앞에서 가장 작은값 찾는거 풀었으니까
1. 이분탐색으로 가장 작은값 위치 찾기
2. 인덱스에 그만큼 보정치 적용해서 이분탐색

가장 작은값 위치 찾기 = 연결점 위치 찾기
배열 맨뒤값 하나 빼서 기준으로 삼음
기준보다 지금 보는 값 x가
    작으면 오른쪽을 줄임 (x와 기준 사이에는 연결점이 없음)
    크면 왼쪽을 늘림 (x와 기준 사이에 연결점이 있음)

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const base = nums.pop();
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < base) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  nums.push(base);

  const offset = left;
  const getIndex = (index) => (index + offset) % nums.length;

  left = 0;
  right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const originalIndex = getIndex(mid);

    if (nums[originalIndex] === target) {
      return originalIndex;
    } else if (nums[originalIndex] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return -1;
};
