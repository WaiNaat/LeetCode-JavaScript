/**
조건) 정렬ㄴㄴ
1. set에 집어넣는다
2. 배열 순회하면서 set에서 뺀다
    이때 빼면서 본인이 시작한 연속수열은 길이가 몇인지 따로 저장한다.

 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  const lengths = {};

  nums.forEach((value) => {
    let cur = value;
    let count = 0;
    while (set.has(cur) || lengths[cur]) {
      if (set.has(cur)) {
        set.delete(cur);
        count += 1;
        cur += 1;
      } else {
        count += lengths[cur];
        cur += lengths[cur];
      }
    }
    lengths[value] = count;
  });

  return Math.max(...Object.values(lengths), 0);
};
