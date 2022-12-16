class MyQueue {
  constructor() {
    this.stack1 = []; // ONLY push and pop
    this.stack2 = []; // ONLY push and pop
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    while (this.stack1.length) this.stack2.push(this.stack1.pop());
    this.stack2.push(x);
    while (this.stack2.length) this.stack1.push(this.stack2.pop());
  }
  /**
   * @return {number}
   */
  pop() {
    return this.stack1.pop();
  }
  /**
   * @return {number}
   */
  peek() {
    return this.stack1[this.stack1.length - 1];
  }
  /**
   * @return {boolean}
   */
  empty() {
    return !this.stack1.length;
  }
}

var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);

obj.pop();
obj.pop();
obj.pop();

console.log(obj.peek());
console.log(obj.empty());
// var param_2 = obj.pop();
// var param_3 = obj.peek();
// var param_4 = obj.empty();
