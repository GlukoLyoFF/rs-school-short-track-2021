const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    this.length += 1;
    if (!this.head) {
      this.head = new ListNode(element);
      this.head.value = element;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = new ListNode(element);
      cur.next.value = element;
    }
  }

  dequeue() {
    if (this.length === 0) throw new Error('EmptyQueue');
    const top = this.head;
    this.head = this.head.next;
    return top.value;
  }
}

module.exports = Queue;
