/**
dfs or bfs
바다에서 거꾸로 올라가는게 빠를듯
한번은 태평양에서 도달가능한곳
한번은 대서양에서 도달가능한곳
두개가 겹치는곳이 정답

 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const row = heights.length;
  const col = heights[0].length;
  const getReachableLands = (stack) => {
    const visited = Array.from({ length: row }).map(() => Array.from({ length: col }).fill(false));

    while (stack.length) {
      const [r, c] = stack.pop();

      if (visited[r][c]) {
        continue;
      }
      visited[r][c] = true;

      directions.forEach(([dr, dc]) => {
        const r2 = r + dr;
        const c2 = c + dc;

        if (
          r2 < 0 ||
          r2 >= row ||
          c2 < 0 ||
          c2 >= col ||
          visited[r2][c2] ||
          heights[r2][c2] < heights[r][c]
        ) {
          return;
        }

        stack.push([r2, c2]);
      });
    }

    return visited;
  };

  const pacificStack = [];
  const atlanticStack = [];
  for (let r = 0; r < row; r += 1) {
    pacificStack.push([r, 0]);
    atlanticStack.push([r, col - 1]);
  }
  for (let c = 0; c < col; c += 1) {
    pacificStack.push([0, c]);
    atlanticStack.push([row - 1, c]);
  }

  const pacificReachable = getReachableLands(pacificStack);
  const atlanticReachable = getReachableLands(atlanticStack);

  const sol = [];
  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < col; c += 1) {
      if (pacificReachable[r][c] && atlanticReachable[r][c]) {
        sol.push([r, c]);
      }
    }
  }

  return sol;
};
