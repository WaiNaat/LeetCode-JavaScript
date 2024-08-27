/**
dfs
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const getAreaSize = (startR, startC) => {
    const stack = [[startR, startC]];
    let size = 0;

    while (stack.length) {
      const [r, c] = stack.pop();

      if (grid[r][c] !== 1) {
        continue;
      }
      grid[r][c] = 2;
      size += 1;

      directions.forEach(([dr, dc]) => {
        const r2 = r + dr;
        const c2 = c + dc;

        if (r2 < 0 || r2 >= row || c2 < 0 || c2 >= col || grid[r2][c2] !== 1) {
          return;
        }

        stack.push([r2, c2]);
      });
    }

    return size;
  };

  const sizes = [];
  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < col; c += 1) {
      if (grid[r][c] === 1) {
        sizes.push(getAreaSize(r, c));
      }
    }
  }

  return Math.max(0, ...sizes);
};
