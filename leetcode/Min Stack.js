/*
최솟값을 어떻게 찾을 것인가....
스택 2개 사용
하나는 진짜 스택
하나는 그 시점에서의 최솟값 스택
*/
var MinStack = function () {
  this.realStack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.realStack.push(val);
  this.minStack.push(Math.min(this.minStack.at(-1) ?? Infinity, val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.realStack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.realStack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.at(-1);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
