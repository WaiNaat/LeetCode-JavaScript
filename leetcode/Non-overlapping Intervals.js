/**
시작순 정렬
겹치는 애들은 끝점이 가장 작은애들을 골라야 함
    (항상 뒤쪽 남는공간이 최대가 되도록)

 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let end = -Infinity;
  for (let i = 0; i < intervals.length; i += 1) {
    if (end > intervals[i][0]) {
      count += 1;
      end = Math.min(end, intervals[i][1]);
    } else {
      end = intervals[i][1];
    }
  }

  return count;
};
