/**
전에 풀었던 문제랑 완전 똑같음
순서? set은 넣은순 보존됨 ㅅㄱ

일단 선행과목과 후행?과목? 매핑을 해놓고
들을 수 있는 과목을 스택에 넣은다음 dfs
마지막에 들은 과목들이 총 과목의 개수랑 같은지를 보면 됨

 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const pre = Array.from({ length: numCourses }).map(() => new Set());
  const next = Array.from({ length: numCourses }).map(() => new Set());
  prerequisites.forEach(([target, prerequisite]) => {
    pre[target].add(prerequisite);
    next[prerequisite].add(target);
  });

  const stack = [];
  pre.forEach((prerequisiteSet, course) => {
    if (prerequisiteSet.size === 0) {
      stack.push(course);
    }
  });

  const listened = new Set();
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

  const canListenAll = listened.size === numCourses;
  return canListenAll ? Array.from(listened) : [];
};
