/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
이거 좀 재밌네
한번 순회하면서 각 노드에 꼬리표를 달아두면 풀수있지만 좋은방법은 아님 (원본의 순수성을 더럽힘)
아니다 꼬리표를 다른데 달아두면 되는거아님?

 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  const copies = new Map();
  for (let cur = head; cur !== null; cur = cur.next) {
    copies.set(cur, new _Node(cur.val, cur.next, cur.random));
  }

  for (let cur = head; cur !== null; cur = cur.next) {
    const copy = copies.get(cur);
    copy.next = copies.get(cur.next) ?? null;
    copy.random = copies.get(cur.random) ?? null;
  }

  return copies.get(head);
};
