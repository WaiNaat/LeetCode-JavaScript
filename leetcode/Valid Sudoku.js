/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const isEmpty = (value) => value === '.';
  const isValidRow = (row) => {
    const nonEmptyValues = board[row].filter((value) => !isEmpty(value));
    const uniqueValueCount = new Set(nonEmptyValues).size;
    return nonEmptyValues.length === uniqueValueCount;
  };
  const isValidCol = (col) => {
    const uniqueValues = new Set();
    let nonEmptyValueCount = 0;

    for (let r = 0; r < 9; r += 1) {
      if (!isEmpty(board[r][col])) {
        nonEmptyValueCount += 1;
        uniqueValues.add(board[r][col]);
      }
    }

    return nonEmptyValueCount === uniqueValues.size;
  };
  const isValidSquare = (row, col) => {
    const uniqueValues = new Set();
    let nonEmptyValueCount = 0;

    for (let r = row; r < row + 3; r += 1) {
      for (let c = col; c < col + 3; c += 1) {
        if (!isEmpty(board[r][c])) {
          nonEmptyValueCount += 1;
          uniqueValues.add(board[r][c]);
        }
      }
    }

    return nonEmptyValueCount === uniqueValues.size;
  };

  for (let i = 0; i < 9; i += 1) {
    if (!isValidRow(i) || !isValidCol(i)) {
      return false;
    }
  }

  for (let r = 0; r < 9; r += 3) {
    for (let c = 0; c < 9; c += 3) {
      if (!isValidSquare(r, c)) {
        return false;
      }
    }
  }

  return true;
};
