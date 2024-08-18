/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const tempHead = new ListNode(-1, null);

  let lastDigit = tempHead;
  let hasCarry = false;
  for (
    let cur1 = l1, cur2 = l2;
    cur1 !== null || cur2 !== null || hasCarry;
    cur1 = cur1?.next ?? null, cur2 = cur2?.next ?? null
  ) {
    const sum = (cur1?.val ?? 0) + (cur2?.val ?? 0) + (hasCarry ? 1 : 0);
    const digit = sum % 10;
    hasCarry = sum >= 10;

    const newDigit = new ListNode(digit, null);
    lastDigit.next = newDigit;
    lastDigit = newDigit;
  }

  return tempHead.next;
};
