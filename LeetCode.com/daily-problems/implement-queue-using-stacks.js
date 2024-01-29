class MyQueue {
  constructor() {
    this.s1 = []; // read
    this.s2 = []; // write
  }

  push(x) {
    while (this.s1.length) this.s2.push(this.s1.pop());
    this.s1.push(x);
    while (this.s2.length) this.s1.push(this.s2.pop());
  }

  pop() {
    return this.s1.pop();
  }

  peek() {
    return this.s1[this.s1.length - 1];
  }

  empty() {
    return this.s1.length === 0;
  }
}

const queue = new MyQueue();

queue.push(1);
queue.push(2);

console.log(queue.peek());

console.log(queue.pop());

console.log(queue);

console.log(queue.empty());
