/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(element) {
    this.data.push(element);
    this.length += 1;
  }

  pop() {
    if (this.length === 0) throw Error('EmptyStack');
    this.length -= 1;
    return this.data.pop();
  }

  peek() {
    if (this.length === 0) throw Error('EmptyStack');
    return this.data[this.length - 1];
  }
}

module.exports = Stack;
