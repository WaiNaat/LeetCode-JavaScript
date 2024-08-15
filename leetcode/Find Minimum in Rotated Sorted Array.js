/**
오 문제 재밌네 이거 이분탐색 스포아니었으면 당했다

배열 첫번째 값을 기준으로 삼는다
    귀찮으니까 마지막꺼 pop해서 쓸까
나머지 값들 중 기준보다 작은애들을 이분탐색으로 찾아보면 된다
어떤 값 x가 기준보다
    작으면 오른쪽을 줄임 (x 왼쪽에 '연결점'이 있음)
    크면 왼쪽을 늘림 x (기준과 x 사이에는 '연결점'이 없음)
    같은건 유니크 보장 조건으로 고려ㄴ

 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
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

  const target = left;
  nums.push(base);

  return nums[target];
};
