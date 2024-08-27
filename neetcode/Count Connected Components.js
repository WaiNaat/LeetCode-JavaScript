class Solution {
  /**
   * 클래식 dfs
   *
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    const next = Array.from({ length: n }).map(() => []);
    edges.forEach(([a, b]) => {
      next[a].push(b);
      next[b].push(a);
    });

    const visited = new Array(n);
    const dfs = (start) => {
      const stack = [start];
      while (stack.length) {
        const cur = stack.pop();

        if (visited[cur]) {
          continue;
        }
        visited[cur] = true;

        next[cur].forEach((vertex) => {
          if (visited[vertex]) return;
          stack.push(vertex);
        });
      }
    };

    let sol = 0;
    for (let v = 0; v < n; v += 1) {
      if (!visited[v]) {
        sol += 1;
        dfs(v);
      }
    }

    return sol;
  }
}
