/**
깊이 20인 dfs랑 다를게 뭐지?
메모이제이션 -> x깊이의 y까지 도달하는 경우의 수를 기억
    +1+2-3=0
    -1-2+3=0
opt(i, 합):= i번쨰 숫자까지 사용했을 때 합이 나오는 경우의 수
opt(i, 합) = opt(i-1, 합+nums[i]) + opt(i-1, 합-nums[i])

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const memo = new Map();
  const toKey = (depth, sum) => `${depth} ${sum}`;
  const traverse = (depth, sum) => {
    if (depth === -1) {
      return memo.get(toKey(depth, sum)) ?? 0;
    }
    if (memo.get(toKey(depth, sum)) !== undefined) {
      return memo.get(toKey(depth, sum));
    }

    const count = traverse(depth - 1, sum - nums[depth]) + traverse(depth - 1, sum + nums[depth]);
    memo.set(toKey(depth, sum), count);

    return count;
  };

  memo.set(toKey(-1, 0), 1);
  return traverse(nums.length - 1, target);
};
