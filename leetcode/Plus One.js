/**
아이 귀찮아

 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const sol = digits.toReversed();

  sol[0] += 1;
  sol.push(0);

  for (let i = 0; i < sol.length - 1; i += 1) {
    if (sol[i] >= 10) {
      sol[i] %= 10;
      sol[i + 1] += 1;
    }
  }

  if (sol.at(-1) === 0) {
    sol.pop();
  }

  return sol.reverse();
};
