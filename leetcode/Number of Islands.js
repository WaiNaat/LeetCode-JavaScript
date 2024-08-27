/**
dfs

 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const LAND = '1';
  const row = grid.length;
  const col = grid[0].length;
  const visited = Array.from({ length: row }).map(() => Array.from({ length: col }));
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const dfs = (startR, startC) => {
    const stack = [[startR, startC]];

    while (stack.length) {
      const [r, c] = stack.pop();

      visited[r][c] = true;

      directions.forEach(([dr, dc]) => {
        const r2 = r + dr;
        const c2 = c + dc;

        if (r2 < 0 || r2 >= row || c2 < 0 || c2 >= col || visited[r2][c2]) {
          return;
        }

        if (grid[r2][c2] === LAND) {
          stack.push([r2, c2]);
        }
      });
    }
  };

  let sol = 0;
  for (let startR = 0; startR < row; startR += 1) {
    for (let startC = 0; startC < col; startC += 1) {
      if (grid[startR][startC] === LAND && !visited[startR][startC]) {
        dfs(startR, startC);
        sol += 1;
      }
    }
  }

  return sol;
};
