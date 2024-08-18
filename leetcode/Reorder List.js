/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
한번 순회하면서 값들을 뽑아오고 그걸로 작업하는게 빠를거같음
아 inplace구나

 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const nodes = [];
  for (let cur = head; cur !== null; cur = cur.next) {
    nodes.push(cur);
  }

  for (let i = 0; i < nodes.length; i += 1) {
    const last = nodes.pop();

    if (nodes[i]) {
      // 기존 연결 해제
      nodes.at(-1).next = null;
      // 신규 연결
      nodes[i].next = last;
      last.next = nodes[i + 1] ?? null;
    }
  }
};
