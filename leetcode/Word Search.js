/**
dfs
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const row = board.length;
  const col = board[0].length;
  const visited = Array.from({ length: row }).map((row) => Array.from({ length: col }));

  const dfs = (r, c, depth) => {
    if (depth === word.length) {
      return true;
    }

    for (let i = 0; i < directions.length; i += 1) {
      const [dr, dc] = directions[i];
      const r2 = r + dr;
      const c2 = c + dc;

      if (
        r2 < 0 ||
        r2 >= row ||
        c2 < 0 ||
        c2 >= col ||
        visited[r2][c2] ||
        board[r2][c2] !== word[depth]
      ) {
        continue;
      }

      visited[r2][c2] = true;

      const result = dfs(r2, c2, depth + 1);
      if (result) {
        return true;
      }

      visited[r2][c2] = false;
    }

    return false;
  };

  for (let startR = 0; startR < row; startR += 1) {
    for (let startC = 0; startC < col; startC += 1) {
      if (board[startR][startC] === word) {
        return true;
      }
      if (board[startR][startC] !== word[0]) {
        continue;
      }

      visited[startR][startC] = true;

      const result = dfs(startR, startC, 1);
      if (result) {
        return true;
      }

      visited[startR][startC] = false;
    }
  }

  return false;
};
