/**
각 알파벳의 등장 횟수는 순서대로 나열하면 일종의 '유니크 키'가 됨
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const a_CODE = 'a'.charCodeAt(0);
  const getAnagramKey = (str) => {
    const appearanceCounts = Array.from({ length: 26 }).fill(0);
    Array.from(str).forEach((char) => {
      appearanceCounts[char.charCodeAt(0) - a_CODE] += 1;
    });
    return appearanceCounts.join(' ');
  };
  const groups = {};

  strs.forEach((str) => {
    const key = getAnagramKey(str);
    if (groups[key] === undefined) {
      groups[key] = [];
    }
    groups[key].push(str);
  });

  return Object.values(groups);
};
