/*
도대체 뭘 원하는 문제지????
의도가 뭐임??????????????????
*/
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return JSON.stringify(strs);
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    return JSON.parse(str);
  }
}
