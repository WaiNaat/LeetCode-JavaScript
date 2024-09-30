/**
in-place????
constant space?????

space complexity
O(mn): inplace인 척하면서 하나더만들기
O(m+n): 0이 나온 row번호, col번호를 기억하는 배열 두개

결국 진짜 0이랑 가짜 0을 구분하는 문제
    가짜 0을 null로 표시?

 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < col; c += 1) {
      if (matrix[r][c] === 0) {
        for (let r2 = 0; r2 < row; r2 += 1) {
          if (matrix[r2][c] !== 0) {
            matrix[r2][c] = null;
          }
        }
        for (let c2 = 0; c2 < col; c2 += 1) {
          if (matrix[r][c2] !== 0) {
            matrix[r][c2] = null;
          }
        }
      }
    }
  }

  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < col; c += 1) {
      if (matrix[r][c] === null) {
        matrix[r][c] = 0;
      }
    }
  }
};
