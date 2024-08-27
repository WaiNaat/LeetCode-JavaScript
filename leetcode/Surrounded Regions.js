/**
O가 모서리에 없는 O의 영역은 필연적으로 X에 둘러싸여있음
따라서 모서리의 O 대상으로 dfs를 돌리고
이 과정에서 방문하지 못한 모든 셀을 X로 바꿔버리면 됨

 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const row = board.length;
  const col = board[0].length;
  const visited = Array.from({ length: row }).map(() => Array.from({ length: col }));
  const stack = [];

  for (let r = 0; r < row; r += 1) {
    if (board[r][0] === 'O') stack.push([r, 0]);
    if (board[r][col - 1] === 'O') stack.push([r, col - 1]);
  }
  for (let c = 0; c < col; c += 1) {
    if (board[0][c] === 'O') stack.push([0, c]);
    if (board[row - 1][c] === 'O') stack.push([row - 1, c]);
  }

  while (stack.length) {
    const [r, c] = stack.pop();

    if (visited[r][c]) continue;
    visited[r][c] = true;

    directions.forEach(([dr, dc]) => {
      const r2 = r + dr;
      const c2 = c + dc;

      if (r2 < 0 || r2 >= row || c2 < 0 || c2 >= col || visited[r2][c2] || board[r2][c2] !== 'O') {
        return;
      }

      stack.push([r2, c2]);
    });
  }

  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < col; c += 1) {
      if (!visited[r][c]) {
        board[r][c] = 'X';
      }
    }
  }
};
