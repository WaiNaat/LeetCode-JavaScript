/**
시작점과 끝점을 본인의 정체성만 남기고 분리
점 오름차순 정렬

점 순회
현재 시작점 기억
시작점 발견시 카운트 +1
끝점 발견시 카운트 -1
카운트 0되면 거기가 끝점

 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const points = intervals
    .map(([start, end]) => [
      [start, true],
      [end, false],
    ])
    .flat()
    .sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      }
      return a[1] ? -1 : 1;
    });

  const sol = [];
  let start;
  let count = 0;

  for (let i = 0; i < points.length; i += 1) {
    const [value, isStart] = points[i];

    if (isStart) {
      if (count === 0) {
        start = value;
      }
      count += 1;
    } else {
      count -= 1;
      if (count === 0) {
        sol.push([start, value]);
      }
    }
  }

  return sol;
};
