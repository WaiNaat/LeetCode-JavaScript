/**
투포인터로 임의의 사이클 시작점과 끝점 지정
지금 사이클이 연료가 안모자라면 끝점을 시계 한칸 이동
지금 사이클에 연료가 모자라다면 시작점을 반시계 한칸 이동

 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = gas.length - 1;
  let end = 0;
  let fuel = gas[start] - cost[start];

  while (start > end) {
    if (fuel >= 0) {
      fuel += gas[end] - cost[end];
      end += 1;
    } else {
      start -= 1;
      fuel += gas[start] - cost[start];
    }
  }

  return fuel >= 0 ? start : -1;
};
