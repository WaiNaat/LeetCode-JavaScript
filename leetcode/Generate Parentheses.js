/**
대충 길이 2n인 모든 괋호문자열에 대해 각각 스택으로 검사하면 되지만 그건 너무 멋없잖아
누가봐도 dp문젠데

라고 생각했는데

8달전의 나는 답지를 봤다
오늘의 나는 8달전의 나를 봤다

opt(i) := i개의 괄호쌍으로 만들 수 있는 올바른 괄호 문자열
opt(i) = '('opt(k)')'opt(i-k-1)
이런 형태로 제작 가능. 단, k는 0 이상

 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const possibles = [[''], ['()']];

  for (let i = 2; i <= n; i += 1) {
    const next = [];
    for (let k = 0; k < i; k += 1) {
      for (let left = 0; left < possibles[k].length; left += 1) {
        for (let right = 0; right < possibles[i - k - 1].length; right += 1) {
          next.push(`(${possibles[k][left]})${possibles[i - k - 1][right]}`);
        }
      }
    }
    possibles.push(next);
  }

  return possibles[n];
};
