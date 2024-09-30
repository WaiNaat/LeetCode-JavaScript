/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const visited = new Set();
  let cur = n;

  while (cur !== 1) {
    if (visited.has(cur)) {
      return false;
    }
    visited.add(cur);

    cur = Array.from(cur.toString())
      .map(Number)
      .map((val) => val ** 2)
      .reduce((prev, cur) => prev + cur, 0);
  }

  return true;
};
