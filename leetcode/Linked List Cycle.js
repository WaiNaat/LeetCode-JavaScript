/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
pos는 뭔소리하는거지 내부동작방식을 왜알려주는거임? 그냥 디버깅용도인가
Set에 객체 참조값이 들어갈 수 있음
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const visited = new Set();
  for (let cur = head; cur !== null; cur = cur.next) {
    if (visited.has(cur)) {
      return true;
    }
    visited.add(cur);
  }
  return false;
};
