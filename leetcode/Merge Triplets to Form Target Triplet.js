/**
x,y,z 중 한 값을 바꿀 때 나머지 두개를 목표치보다 높게 바꾸면 안됨
단순히 순회하면서 하나는 일치, 두개는 이하인거 찾으면 되는거 아님?

 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  const canUpdate = Array.from({ length: 3 }, () => false);
  const [x, y, z] = target;
  triplets.forEach(([a, b, c]) => {
    if (a === x && b <= y && c <= z) {
      canUpdate[0] = true;
    }
    if (a <= x && b === y && c <= z) {
      canUpdate[1] = true;
    }
    if (a <= x && b <= y && c === z) {
      canUpdate[2] = true;
    }
  });
  return canUpdate.every((bool) => bool);
};
