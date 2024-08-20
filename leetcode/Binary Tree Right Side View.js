/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
노드의 개수가 엄청 적은데?
bfs로 깊이별로 모아놓은다음에 가장 오른쪽껄 빼면 됨
탐색을 오른쪽부터하면 무조건 0번이 가장 오른쪽 노드가 됨

 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const sol = [];

  let cur = root !== null ? [root] : [];
  while (cur.length) {
    const [rightNode] = cur;
    sol.push(rightNode.val);

    const next = [];
    cur.forEach((node) => {
      if (node.right) {
        next.push(node.right);
      }
      if (node.left) {
        next.push(node.left);
      }
    });
    cur = next;
  }

  return sol;
};
