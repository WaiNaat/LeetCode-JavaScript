/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let reversedHead = null;

  for (let cur = head; cur !== null; cur = cur.next) {
    const newNode = new ListNode(cur.val, reversedHead);
    reversedHead = newNode;
  }

  return reversedHead;
};
