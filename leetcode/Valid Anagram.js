/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const base = 'a'.charCodeAt(0);
  const sCounts = new Array(26).fill(0);
  const tCounts = new Array(26).fill(0);

  Array.from(s).forEach((char) => {
    sCounts[char.charCodeAt(0) - base] += 1;
  });
  Array.from(t).forEach((char) => {
    tCounts[char.charCodeAt(0) - base] += 1;
  });

  return sCounts.join(' ') === tCounts.join(' ');
};
