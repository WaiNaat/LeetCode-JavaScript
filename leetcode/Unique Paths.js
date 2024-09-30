/**
클래식 2차원dp

opt(row, col) = opt(row-1, col) + opt(row, col-1)
opt(0, col) = 1

 * @param {number} row
 * @param {number} col
 * @return {number}
 */
var uniquePaths = function (row, col) {
  const opt = Array.from({ length: col }).fill(1);
  for (let r = 1; r < row; r += 1) {
    for (let c = 1; c < col; c += 1) {
      opt[c] += opt[c - 1];
    }
  }

  return opt.at(-1);
};
