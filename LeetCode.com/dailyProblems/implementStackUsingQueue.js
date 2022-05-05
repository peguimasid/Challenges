class MyStack {
  constructor() {
    this.out = []; // out
    this.in = [];
  }

  push(x) {
    const { length } = this.out;

    for (let i = 0; i < length; i++) {
      this.in.unshift(this.out.pop());
    }

    this.out.unshift(x);

    for (let i = 0; i < length; i++) {
      this.out.unshift(this.in.pop());
    }
  }
  pop() {
    return this.out.pop() ?? null;
  }
  top() {
    return this.out[this.out.length - 1] ?? null;
  }
  empty() {
    return !this.out.length;
  }
}

var obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
obj.push(5);
