/**
요는 만남
나와 내 바로 앞의 차가 만난다.
    내 앞의 차는 나보다 느려야 한다.
    내 앞의 차랑 나랑 만나는 위치가 도착지 또는 그 이전이다.
만났다는 건 합쳐진다는 것
내 속도가 무조건 내 앞차 속도가 된다는 것

 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const cars = [];
  for (let i = 0; i < position.length; i += 1) {
    cars.push({
      position: position[i],
      speed: speed[i],
    });
  }
  cars.sort((a, b) => b.position - a.position);

  const stack = [];
  cars.forEach((car) => {
    const lastFleet = stack.at(-1);

    if (lastFleet === undefined) {
      stack.push(car);
      return;
    }

    const meetTime = (car.position - lastFleet.position) / (lastFleet.speed - car.speed);
    const meetPosition = car.position + car.speed * meetTime;
    const canMeet = lastFleet.speed < car.speed && meetPosition <= target;

    if (!canMeet) {
      stack.push(car);
    }
  });

  return stack.length;
};
