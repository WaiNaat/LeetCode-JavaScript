/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const traverse = (orders, visited, permutations) => {
    if (orders.length === nums.length) {
      permutations.push([...orders]);
      return permutations;
    }

    for (let i = 0; i < nums.length; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        orders.push(nums[i]);
        traverse(orders, visited, permutations);
        orders.pop();
        visited[i] = false;
      }
    }

    return permutations;
  };
  return traverse([], new Array(nums.length).fill(false), []);
};
