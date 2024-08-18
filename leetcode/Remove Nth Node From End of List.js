/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
아 끝에서 지우는거구나
쭉 탐색하면서 현재 노드 말고도 현재보다 n+1개 뒤쪽의 노드도 같이 기억해두기

 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let cur = head;
  let targetPrev = null;

  for (let i = 1, cur = head; cur !== null; i += 1, cur = cur.next) {
    if (i === n + 1) {
      targetPrev = head;
    } else if (i > n + 1) {
      targetPrev = targetPrev.next;
    }
  }

  if (targetPrev !== null) {
    targetPrev.next = targetPrev.next?.next ?? null;
    return head;
  } else {
    return head.next;
  }
};
