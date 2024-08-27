class Solution {
  /**
   * 수학, 특히 그래프 이론에서 회로가 없는 연결된 무방향의 그래프를 트리라고 한다.
   * 그냥 visited 중복되면 즉시탈락아님?
   * 아무 정점 하나 찍고 출발해서 모든 점을 방문할 수 있는지도 확인해야함
   *
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    const next = Array.from({ length: n }).map(() => []);
    edges.forEach(([a, b]) => {
      next[a].push(b);
      next[b].push(a);
    });

    const stack = [0];
    const visited = new Set();
    while (stack.length) {
      const cur = stack.pop();

      if (visited.has(cur)) {
        return false;
      }

      next[cur].forEach((nextVertex) => {
        if (visited.has(nextVertex)) {
          return;
        }
        stack.push(nextVertex);
      });

      visited.add(cur);
    }

    return visited.size === n;
  }
}
