/**
바람개비처럼 돌리기

 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const rotateFrame = (startR, startC, size) => {
    for (let offset = 0; offset < size - 1; offset += 1) {
      const top = matrix[startR][startC + offset];
      const right = matrix[startR + offset][startC + size - 1];
      const bottom = matrix[startR + size - 1][startC + size - 1 - offset];
      const left = matrix[startR + size - 1 - offset][startC];

      matrix[startR][startC + offset] = left;
      matrix[startR + offset][startC + size - 1] = top;
      matrix[startR + size - 1][startC + size - 1 - offset] = right;
      matrix[startR + size - 1 - offset][startC] = bottom;
    }
  };

  for (let i = 0; i < Math.floor(matrix.length / 2); i += 1) {
    rotateFrame(i, i, matrix.length - i * 2);
  }
};
