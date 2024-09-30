/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  return Array.from(n.toString(2)).filter((char) => char === '1').length;
};
