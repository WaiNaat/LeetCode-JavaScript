/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let first = null;
  let last = null;
  let list1Head = list1;
  let list2Head = list2;
  const getSmaller = () => {
    if (list1Head === null && list2Head === null) {
      return null;
    }

    if (list1Head === null) {
      const target = list2Head;
      list2Head = list2Head.next;
      return target;
    }

    if (list2Head === null) {
      const target = list1Head;
      list1Head = list1Head.next;
      return target;
    }

    if (list1Head.val < list2Head.val) {
      const target = list1Head;
      list1Head = list1Head.next;
      return target;
    } else {
      const target = list2Head;
      list2Head = list2Head.next;
      return target;
    }
  };

  for (let smallest = getSmaller(); smallest !== null; smallest = getSmaller()) {
    if (first === null) {
      first = smallest;
    }

    if (last !== null) {
      last.next = smallest;
    }

    last = smallest;
  }

  return first;
};
