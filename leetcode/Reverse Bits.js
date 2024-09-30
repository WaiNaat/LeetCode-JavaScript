/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  return parseInt(Array.from(n.toString(2).padStart(32, '0')).reverse().join(''), 2);
};
