/**
n이 큰거보니까 분할정복에 메모이제이션 쓰는거같은데

 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const memo = {};
  const pow = (base, exponent) => {
    if (exponent === 0) {
      return 1;
    }
    if (exponent === 1) {
      return base;
    }

    if (memo[exponent] !== undefined) {
      return memo[exponent];
    }

    const half = pow(base, Math.floor(exponent / 2));
    const result = half * half * (exponent % 2 === 1 ? base : 1);

    memo[exponent] = result;

    return result;
  };

  return n >= 0 ? pow(x, n) : pow(1 / x, -n);
};
