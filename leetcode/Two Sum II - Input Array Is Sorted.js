/**
조건) set으로 날먹하지 말라는 뜻
그냥 for문 두번쓰면되는거아님? 변수 3개면 되는데
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (numbers[i] + numbers[j] === target) {
        return [j + 1, i + 1];
      }
    }
  }
};
