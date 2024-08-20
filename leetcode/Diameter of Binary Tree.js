/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
본인 중심으로 왼쪽+오른쪽 리프노드 거리가 정답이거나
위쪽에서 본인이랑 본인과 가장 먼 리프노드의 거리를 쓸 수 있음

 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let sol = 0;

  const traverse = (node) => {
    const leftDistance = node.left ? traverse(node.left) + 1 : 0;
    const rightDistance = node.right ? traverse(node.right) + 1 : 0;

    sol = Math.max(sol, leftDistance + rightDistance);

    return Math.max(leftDistance, rightDistance);
  };

  traverse(root);

  return sol;
};
