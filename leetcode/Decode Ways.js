/**
계단오르기 문제랑 비슷한데 특정 범위 내에 있어야 함
opt(i) := i번째 문자까지 해석했을 때 가능한 경우의 수
opt(i) =
    opt(i-1) // i번째 문자가 단독 해석 가능할 경우
    opt(i-2) // i-1번째와 i번째를 묶어서 해석 가능할 경우
    이거 두개를 더한 값

'2' << 해석가능
'02' << 해석 불가능

 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const canDecode = (substring) => {
    const value = Number(substring);

    if (value.toString().length !== substring.length) {
      return false;
    }

    return value >= 1 && value <= 26;
  };

  const opt = [0, 1];
  for (let i = 0; i < s.length; i += 1) {
    opt.push(
      (canDecode(s[i]) ? opt.at(-1) : 0) + (canDecode(`${s[i - 1]}${s[i]}`) ? opt.at(-2) : 0),
    );
  }

  return opt.at(-1);
};
