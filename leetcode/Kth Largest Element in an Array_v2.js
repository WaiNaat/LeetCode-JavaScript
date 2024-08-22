/**
quick select 연습용

1. 맨뒤값을 pivot
2. 중앙으로 좁아지는 투포인터를 이용해서 left가 pivot보다 크고 right가 pivot보다 작은애를 찾아 서로 교환
3. 맨뒤값과 left값 교환
4. left(pivot이 이동한 위치)이 목표 위치라면 종료
5. 아니면 범위 바꿔서 반복

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const quickSelect = (leftStart, rightStart) => {
    const pivot = rightStart;
    const pivotVal = nums[pivot];

    let left = leftStart;
    let right = rightStart - 1;
    while (true) {
      while (nums[left] < pivotVal) {
        left += 1;
      }
      while (nums[right] > pivotVal) {
        right -= 1;
      }

      if (left >= right) {
        break;
      }

      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      left += 1;
      right -= 1;
    }

    nums[pivot] = nums[left];
    nums[left] = pivotVal;

    if (left === nums.length - k) {
      return pivotVal;
    } else if (k < nums.length - left) {
      return quickSelect(left + 1, rightStart);
    } else {
      return quickSelect(leftStart, left - 1);
    }
  };

  return quickSelect(0, nums.length - 1);
};
