/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const sol = [];
  const visited = new Set();
  let d = 0;
  let r = 0;
  let c = 0;

  while (visited.size < row * col) {
    visited.add(`${r} ${c}`);
    sol.push(matrix[r][c]);

    let [dr, dc] = directions[d];
    let r2 = r + dr;
    let c2 = c + dc;

    if (r2 < 0 || r2 >= row || c2 < 0 || c2 >= col || visited.has(`${r2} ${c2}`)) {
      d = (d + 1) % 4;
      [dr, dc] = directions[d];
      r2 = r + dr;
      c2 = c + dc;
    }

    r = r2;
    c = c2;
  }

  return sol;
};
