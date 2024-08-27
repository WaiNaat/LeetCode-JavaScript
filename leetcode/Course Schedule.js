/**
과목별로 dfs든 bfs든 돌려서 사이클이 있는지를 판단하는 문제로 보임
    >>>>> 여태까지 틀린 이유는 이 전제가 틀려서였음
    마름모꼴의 연결관계도 가능하기 때문
정직하게 선행과목이 없는 문제부터 탐색
    선행과목을 다 듣지 못했는데 큐에서 빠져나왔을 때 어떻게 처리할 것인가
    그대로 다시 넣으면 무한루프가 발생할 텐데
    visited를 더 복잡하게 작성해야 하나
    >> 애초에 다 못들었으면 큐에 들어가면 안됨
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const pre = Array.from({ length: numCourses }).map(() => new Set());
  const next = Array.from({ length: numCourses }).map(() => new Set());
  prerequisites.forEach(([target, prerequisite]) => {
    pre[target].add(prerequisite);
    next[prerequisite].add(target);
  });

  const listened = new Set();
  const stack = [];

  for (let course = 0; course < pre.length; course += 1) {
    if (pre[course].size === 0) {
      stack.push(course);
    }
  }

  while (stack.length) {
    const cur = stack.pop();

    if (listened.has(cur)) {
      continue;
    }
    listened.add(cur);

    next[cur].forEach((nextCourse) => {
      pre[nextCourse].delete(cur);

      if (pre[nextCourse].size === 0) {
        stack.push(nextCourse);
      }
    });
  }

  return listened.size === numCourses;
};
