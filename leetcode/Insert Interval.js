/**
앞에서부터 구간 하나씩 보는데
구간 끝점 - 넣을 구간 시작점을 비교해서 겹치면 합치기
넣을 구간(또는 합쳐진 구간) 끝점이 다음 구간 시작점이랑 안겹치면 종료

악질적으로 intervals 길이가 0일수 있음

 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let [overlapStart, overlapEnd] = newInterval;
  let i;
  for (i = 0; i < intervals.length; i += 1) {
    const [currentStart, currentEnd] = intervals[i];
    if (currentEnd < overlapStart) {
      result.push(intervals[i]);
    } else if (currentStart <= overlapEnd) {
      overlapStart = Math.min(overlapStart, currentStart);
      overlapEnd = Math.max(overlapEnd, currentEnd);
    } else {
      break;
    }
  }
  result.push([overlapStart, overlapEnd]);
  while (i < intervals.length) {
    result.push(intervals[i]);
    i += 1;
  }

  return result;
};
