/**
숫자를 표현하는 데 필요한 비트 수에 따라 나뉘는데
총 비트수가 1 증가 -> 여태까지 있던 비트수 복붙한담에 각각의 값에 1 더한만큼 늘어남

 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bits = [0];

  while (bits.length < n + 1) {
    const curLength = bits.length;
    for (let i = 0; i < curLength && bits.length < n + 1; i += 1) {
      bits.push(bits[i] + 1);
    }
  }

  return bits;
};
