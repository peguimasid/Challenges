class MyStack {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
  }
  /**
   * @return {number}
   */
  pop() {
    return this.stack.pop() ?? null;
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1] ?? null;
  }
  /**
   * @return {boolean}
   */
  empty() {
    return !this.stack.length;
  }
}

var obj = new MyStack();
obj.push(1);
var param_4 = obj.empty();
console.log(param_4);
var param_2 = obj.pop();
var param_3 = obj.top();
