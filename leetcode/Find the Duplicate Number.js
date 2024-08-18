/**
constant extra space
set이나 object는 아닐거아니야 그러면 변수 하나만 쓸수있는데
어떤 정보가 가장 유용하지?

합?
비트연산인가? 그러기에는 n이 너무 커
문자열 하나는 constant space로 쳐주나? 아닐거같은데

----

답지봄 연결리스트의 사이클을 찾는 플로이드 알고리즘을 알아야 했던 문제

문제 숫자가 [1, n]이고 배열 길이가 n+1 이므로
    시작 인덱스가 0인 연결리스트로 취급
    배열의 각 값을 다음 인덱스 포인터로 변형.

1. 토끼와 거북이 << 사이클이 있으면 둘이 언젠간 만남
2. 만난 후 거북이를 시작점으로 돌리고 토끼 속도를 1로 바꾼 후 다시 출발시키면 만나는 지점이 사이클 시작점


 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let tortoise = 0;
  let hare = 0;
  while (tortoise !== hare || tortoise + hare === 0) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  }

  tortoise = 0;
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return tortoise;
};
