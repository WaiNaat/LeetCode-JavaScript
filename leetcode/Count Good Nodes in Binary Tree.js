/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
평범한 탐색문제인데
자식으로 내려갈 때 부모부터 본인까지 중 가장 큰 숫자도 같이 알려주면 됨

 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let sol = 0;

  const traverse = (node, max) => {
    if (node === null) {
      return;
    }

    if (max <= node.val) {
      sol += 1;
    }

    traverse(node.left, Math.max(node.val, max));
    traverse(node.right, Math.max(node.val, max));
  };

  traverse(root, -Infinity);

  return sol;
};
