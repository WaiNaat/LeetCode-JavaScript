/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
그냥 BST 탐색문제인가
왼쪽 -> 본인 -> 오른쪽 순서로 탐색하면 작은 순서부터 얻을 수 있음.

 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const values = [];

  const traverse = (node) => {
    if (node === null) {
      return;
    }

    traverse(node.left);
    values.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  return values[k - 1];
};
