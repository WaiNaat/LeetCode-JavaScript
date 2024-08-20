/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
bfs잖아
메모리 초과나면 그냥 탐색하면서 depth, value 쌍을 만들고 정렬해도 됨
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const sol = [];
  let cur = root !== null ? [root] : [];
  while (cur.length) {
    sol.push(cur.map((node) => node.val));
    const next = [];
    cur.forEach((node) => {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    });
    cur = next;
  }

  return sol;
};
